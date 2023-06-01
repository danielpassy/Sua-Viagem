'use client';

import NavBar from '@/app/navbar';
import { Search } from '@mui/icons-material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, Collapse, IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function SearchBox({ showForm }: { showForm: Function }) {
  const [destination, setDestination] = useState('');
  const submitSearch = () => {
    showForm();
  };

  return (
    <TextField
      sx={{ flexGrow: 1 }}
      id="outlined-select-currency"
      label="Destination"
      value={destination}
      onKeyDown={(e) => {
        console.log(e.key === 'Enter');
        if (e.key === 'Enter') {
          submitSearch();
        }
      }}
      onChange={(e) => setDestination(e.target.value)}
      helperText="Where are you going?"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FmdGoodOutlinedIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={submitSearch}>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default function Home() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <main
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <TransitionGroup className="flex flex-col justify-center text-center">
        <Collapse>
          <SearchBox showForm={() => setFormVisible(!formVisible)} />
        </Collapse>
        {formVisible ? (
          <Collapse>
            {' '}
            <TripForm />{' '}
          </Collapse>
        ) : null}
      </TransitionGroup>

      {/* </Box> */}
      <NavBar />
    </main>
  );
}

function TripForm() {
  const [initialDate, setInitialDate] = useState<Date>(new Date());
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      Choose a date:
      <DatePicker
        label="Controlled picker"
        value={initialDate}
        onChange={(newValue: any) => setInitialDate(newValue)}
      />
    </Box>
  );
}
