'use client';
import { Search } from '@mui/icons-material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

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
      <TextField
        sx={{
          width: '90%',
          color: 'whitesmoke',
          backgroundColor: `white`,
          borderRadius: 4,
        }}
        placeholder="Qual destino?"
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
              <Box
                sx={{ backgroundColor: '#EB6E5D', borderRadius: '10px', mr: '-3px' }}
              >
                <IconButton sx={{ color: 'whitesmoke' }} onClick={() => submit()}>
                  <Search />
                </IconButton>
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}
