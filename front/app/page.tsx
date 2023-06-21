'use client';

import api from '@api';
import { Box, Button, MobileStepper, Typography } from '@mui/material';
import { useState } from 'react';
import { SearchBox } from './components/SearchBox';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';
import NavBar from '@/app/components/app/navbar';
import { DateSelect } from '@/app/components/date-select';
import LayoutSelect from '@/app/components/layout-select';
import Carousel from '@/app/destionations-carousel';

export enum Layouts {
  OneStop = 'oneStop',
  International = 'international',
}
export interface formInterface {
  initialDate: null | Dayjs;
  destination: '';
  layout: Layouts;
}

function NewTrip() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<formInterface>({
    initialDate: dayjs(),
    destination: '',
    layout: Layouts.OneStop,
  });

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
          setDate={(value: any) => {
            handleFormChange('initialDate', value), handleNext();
          }}
          date={formData.initialDate}
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
    </Box>
  );
}

export default function Home() {
  return (
    <main style={{ width: '100%', height: '100%', display: 'flex' }}>
      <NewTrip />
      <Box sx={{ width: '100%', height: '100%', display: 'flex' }}>
        <Typography variant="h1">Explore Destinatin</Typography>
        <DestinationCarousel />
      </Box>
      <NavBar />
    </main>
  );
}
