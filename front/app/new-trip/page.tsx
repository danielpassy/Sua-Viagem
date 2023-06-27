'use client';

import { SearchBox } from '@/app/components/SearchBox';
import { DateSelect } from '@/app/components/date-select';
import LayoutSelect from '@/app/components/layout-select';
import api from '@api';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, MobileStepper, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { useSearchParams } from 'next/navigation';
import NavBar from '@/app/components/app/navbar';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international',
}
export interface formInterface {
  initialDate?: Dayjs;
  endDate?: Dayjs;
  duration?: number;
  destination: '';
  layout: Layouts;
}
export default function NewTrip() {
  const searchParams = useSearchParams();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<formInterface>({
    initialDate: undefined,
    endDate: undefined,
    duration: undefined,
    destination: '',
    layout: Layouts.OneStop,
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
    await api.trip.createTrip(formData);
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
          setInitialDate={(value: any) => {
            handleFormChange('initialDate', value);
          }}
          setEndDate={(value: any) => handleFormChange('endDate', value)}
          setDuration={(value: any) => handleFormChange('duration', value)}
          next={handleNext}
          initialDate={formData.initialDate}
          endDate={formData.endDate}
          duration={formData.duration}
        />
      ) : null}
      {activeStep === 2 ? (
        <LayoutSelect
          setLayout={(value: any) => {
            handleFormChange('layout', value);
          }}
          layout={formData.layout}
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
