'use client';
import { Search } from '@mui/icons-material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';

export function SearchBox({
  setDestination,
  destination,
  submit,
}: {
  setDestination: Function;
  destination: string;
  submit: Function;
}) {
  return (
    <>
      <Typography color="textPrimary" variant="h6" sx={{ mb: 0, fontWeight: 400 }}>
        Where are you going?
      </Typography>
      <TextField
        sx={{ width: '70%' }}
        id="outlined-select-currency"
        value={destination}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            submit();
          }
        }}
        onChange={(e) => setDestination(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FmdGoodOutlinedIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => submit()}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
