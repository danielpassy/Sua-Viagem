'use client';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

export function DateSelect({
  setInitialDate,
  setEndDate,
  setDuration,
  next,
  initialDate,
  endDate,
  duration,
}: {
  setInitialDate: Function;
  setEndDate: Function;
  setDuration: Function;
  next: Function;
  initialDate?: Dayjs;
  endDate?: Dayjs;
  duration?: number;
}) {
  const [datePickerReseter, setDatePickerReseter] = useState(0);
  const [durationReseter, setDurationReseter] = useState(0);
  const resetDatePickers = () => {
    setDatePickerReseter(datePickerReseter + 1);
  };
  const resetDuration = () => {
    setDurationReseter(durationReseter + 1);
  };
  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }} component="p">
        Quando?
      </Typography>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: 3,
        }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'row' }}>
          <DatePicker
            key={datePickerReseter}
            sx={{ margin: '6px', width: '50%', fontWeight: '12px' }}
            label="Ida"
            value={initialDate}
            onChange={(value) => {
              setInitialDate(value);
              setDuration(undefined);
              resetDuration();
            }}
          />

          <DatePicker
            key={datePickerReseter + 2}
            sx={{ margin: '6px', width: '50%', fontWeight: '12px' }}
            label="Volta"
            value={endDate}
            onChange={(value) => {
              setEndDate(value);
              setDuration(undefined);
              resetDuration();
            }}
          />
        </Container>
        <Typography variant="subtitle1" sx={{ my: 3 }} component="p">
          Ou
        </Typography>
        <FormControl key={durationReseter} sx={{ m: 1, minWidth: '45vw' }}>
          <InputLabel id="demo-simple-select-helper-label">Duração</InputLabel>
          <Select
            label="Duração"
            variant="outlined"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
              setInitialDate(undefined);
              setEndDate(undefined);
              resetDatePickers();
            }}
          >
            {Array.from(Array(100).keys()).map((el) => (
              <MenuItem value={el}>{el} Dias</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={(_) => next()}>
          Próximo
        </Button>
      </Container>
    </>
  );
}
