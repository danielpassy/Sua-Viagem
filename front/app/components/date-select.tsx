'use client';
import {
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
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
import { TransitionGroup } from 'react-transition-group';

export function DateSelect({
  setDates,
  next,
}: {
  setDates: Function;

  next: Function;
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDurationPicker, setShowDurationPicker] = useState(false);

  const [initialDate, setInitialDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const handleSubmit = (field: 'duration' | 'dates') => {
    if (field === 'duration') {
      setDates({ duration });
    } else {
      setDates({ initialDate, endDate });
    }
    next();
  };

  const alignItensContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const selectCardStyle = {
    ...alignItensContainerStyle,
    cursor: 'pointer',
    borderRadius: '3px',
    width: '85vw',
    height: '30vh',
  };
  return (
    <>
      <Container sx={alignItensContainerStyle}>
        <Card
          variant="outlined"
          sx={selectCardStyle}
          onClick={() => {
            setShowDatePicker(true), setShowDurationPicker(false);
          }}
        >
          <CardContent sx={alignItensContainerStyle}>
            <>
              <Typography variant="h6" component="p">
                Escolher Data
              </Typography>
              <TransitionGroup>
                {showDatePicker ? (
                  <Collapse>
                    {
                      <Box sx={{ ...alignItensContainerStyle }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                          <DatePicker
                            sx={{ margin: '6px', width: '50%', fontWeight: '12px' }}
                            label="Ida"
                            value={initialDate}
                            onChange={(value) => {
                              setInitialDate(value);
                            }}
                          />
                          <DatePicker
                            sx={{ margin: '6px', width: '50%', fontWeight: '12px' }}
                            label="Volta"
                            value={endDate}
                            onChange={(value) => {
                              setEndDate(value);
                            }}
                          />
                        </Box>
                      </Box>
                    }
                  </Collapse>
                ) : null}
                {showDatePicker && initialDate && endDate ? (
                  <Collapse sx={{ textAlign: 'center' }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleSubmit('dates');
                      }}
                    >
                      Próximo
                    </Button>
                  </Collapse>
                ) : (
                  ''
                )}
              </TransitionGroup>
            </>
          </CardContent>
        </Card>

        <Box sx={{ m: 4 }} />

        <Card
          variant="outlined"
          sx={selectCardStyle}
          onClick={() => {
            setShowDurationPicker(true);
            setShowDatePicker(false);
          }}
        >
          <CardContent sx={alignItensContainerStyle}>
            <>
              <Typography variant="h6" component="p">
                Escolher Duração
              </Typography>
              <TransitionGroup>
                {showDurationPicker ? (
                  <Collapse>
                    {
                      <Container sx={alignItensContainerStyle}>
                        <FormControl sx={{ m: 1, minWidth: '45vw' }}>
                          <InputLabel id="demo-simple-select-helper-label">
                            Duração
                          </InputLabel>
                          <Select
                            label="Duração"
                            variant="outlined"
                            value={duration}
                            onChange={(e) => {
                              setDuration(e.target.value);
                            }}
                          >
                            {Array.from(Array(100).keys()).map((el) => (
                              <MenuItem value={el}>{el} Dias</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Container>
                    }
                  </Collapse>
                ) : null}
                {showDurationPicker && duration ? (
                  <Collapse sx={{ textAlign: 'center' }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        handleSubmit('duration');
                      }}
                    >
                      Próximo
                    </Button>
                  </Collapse>
                ) : (
                  ''
                )}
              </TransitionGroup>
            </>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
