import Box from '@mui/material/Box';
import {
  Button,
  Collapse,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Clear } from '@mui/icons-material';
import { TransitionGroup } from 'react-transition-group';

export default function InvitePeople({
  setInvitations,
  submitForm,
}: {
  setInvitations: Function;
  submitForm: Function;
}) {
  const [email, setEmail] = useState('');
  const [emaiĺList, setEmailList] = useState<string[]>([]);

  const handleFormSubmit = () => {
    setInvitations(emaiĺList);
    submitForm();
  };

  const addEmail = () => {
    if (isEmailValid(email)) {
      setEmailList([...emaiĺList, email]);
      setEmail('');
    }
  };

  const deleteEmail = (email: string) => {
    setEmailList(emaiĺList.filter((e) => e !== email));
  };

  const isEmailValid = (email: string) => {
    return email === '' ? true : email.includes('@') && email.includes('.');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <TextField
          error={!isEmailValid(email)}
          helperText={isEmailValid(email) ? '' : 'Email inválido'}
          variant="outlined"
          label="Email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  onClick={() => {
                    addEmail;
                  }}
                  sx={{
                    backgroundColor: 'light-blue',
                    borderRadius: '10px',
                    mr: '-3px',
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="caption">Ok</Typography>
                </Box>
              </InputAdornment>
            ),
          }}
          value={email}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addEmail();
            }
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', mb: 4, justifyContent: 'end' }}>
        <TransitionGroup>
          {emaiĺList.map((email) => (
            <Collapse sx={{ my: '8px' }}>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                }}
              >
                <Typography variant="caption">{email}</Typography>
                <IconButton
                  onClick={() => {
                    deleteEmail(email);
                  }}
                  color="inherit"
                  aria-label="trips"
                  sx={{ mr: 0 }}
                >
                  <Clear />
                </IconButton>
              </Box>
            </Collapse>
          ))}
        </TransitionGroup>
      </Box>
      <Button variant="contained" onClick={() => handleFormSubmit()}>
        Criar Viagem
      </Button>
    </Box>
  );
}
