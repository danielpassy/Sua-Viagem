'use client';

import { SearchBox } from '@/app/components/SearchBox';
import { DateSelect } from '@/app/components/date-select';
import InvitePeople from '@/app/components/invite-people';
import api from '@api';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, MobileStepper, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { useRouter, useSearchParams } from 'next/navigation';
import NavBar from '@/app/components/app/navbar';

export interface formInterface {
  initialDate?: Dayjs;
  endDate?: Dayjs;
  duration?: number;
  destination: '';
  editors: string[];
}
export default function NewTrip() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<formInterface>({
    initialDate: undefined,
    endDate: undefined,
    duration: undefined,
    destination: '',
    editors: [],
  });

  useEffect(() => {
    const searchTerm = searchParams.get('searchTerm');
    if (searchTerm) {
      handleFormChange('destination', searchTerm);
      handleNext();
    }
  }, [searchParams]);

  const handleFormChange = (name: keyof formInterface, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const submitForm = async () => {
    const trip = await api.trip.createTrip(formData);
    router.push(`/trips/${trip.id}`);
  };
  return (
    <Box
      sx={{
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        margin: 'auto',
      }}
    >
      {activeStep === 0 ? (
        <SearchBox
          setDestination={(value: string) => handleFormChange('destination', value)}
          destination={formData.destination}
          submit={() => handleNext()}
        />
      ) : null}
      {activeStep === 1 ? (
        <DateSelect
          setDates={({ initialDate, endDate, duration }: any) => {
            handleFormChange('initialDate', initialDate);
            handleFormChange('endDate', endDate);
            handleFormChange('duration', duration);
          }}
          next={handleNext}
        />
      ) : null}
      {activeStep === 2 ? (
        <InvitePeople
          setInvitations={(value: any) => {
            handleFormChange('editors', value);
          }}
          submitForm={submitForm}
        />
      ) : null}

      <MobileStepper
        variant="dots"
        steps={3}
        position="top"
        activeStep={activeStep}
        sx={{
          with: '100%',
        }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Previous
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      <NavBar />
    </Box>
  );
}
