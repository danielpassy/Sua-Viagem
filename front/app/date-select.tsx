'use client';
import { Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

export function DateSelect({
  setDate,
  date,
}: {
  setDate: Function;
  date: Dayjs | null;
}) {
  const handleChange = (value: dayjs.Dayjs | null) => {
    setDate(value);
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
        <DatePicker
          sx={{ width: '45%', fontWeight: '12px' }}
          label="Data inicial"
          value={date}
          onChange={(newValue) => handleChange(newValue)}
        />
        <Typography variant="subtitle2" sx={{ my: 3 }} component="p">
          Ou
        </Typography>
        <FormControlLabel
          sx={{ mr: 0, width: '45%', marginLeft: '7vw' }}
          label="Eu sei lá"
          control={
            <Checkbox checked={date === null} onChange={() => handleChange(null)} />
          }
        />
      </Container>
    </>
  );
}
