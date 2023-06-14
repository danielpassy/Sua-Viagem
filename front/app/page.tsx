'use client';

import NavBar from '@/app/navbar';
import { CheckBox, Search } from '@mui/icons-material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import {
  Box,
  Checkbox,
  Collapse,
  Container,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

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
  const [initialDate, setInitialDate] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [noInitialDate, setNoInitialDate] = useState<boolean | undefined>(undefined);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ mt: 3 }} component="p">
        Quando?
      </Typography>
      <Container
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', my: 3 }}
      >
        <DatePicker
          disabled={noInitialDate}
          sx={{ width: '40%' }}
          label="Data inicial"
          value={initialDate}
          onChange={(newValue) => setInitialDate(newValue)}
        />
        <Divider sx={{ mx: 4 }} flexItem orientation="vertical" variant="middle" />
        <FormControlLabel
          label="Eu sei lá"
          className={noInitialDate === false ? 'Mui-disabled' : ''}
          control={
            <Checkbox
              checked={noInitialDate}
              className={noInitialDate === false ? 'Mui-disabled' : ''}
              onChange={() => setNoInitialDate(!noInitialDate)}
            />
          }
        />
      </Container>
    </Box>
  );
}

// Proposta de design:
//  1 seleciona o lugar
//  2 Seleciona datas/duração.
//  3 seleciona um template - inicial é o mais simples,
//  4 formas de visualizar - Organização em seções, Todo. Itinerário.

// Beleza, agora pensar numa forma de formulário genérico.
// A princípio vai mostrar um template e a pessoa vai poder escolher entre eles.
// O template vai ter um título e seções

// Título: Viagem espontânea de uma cidade.
// Seção 0 - Links importantes
//    descrição: link imporntate 1
//    descrição: link imporntate 2
//
// Seção 1 - Estadia -
//  descrição: o que eu quero.
//  todo: alugar
//
// seção 2 - Flight/bus.
//   descrição: Transporte de x até y.
//   todo: comprar.
//   tempo: dia x
//   onde: lugar y
//
// seção 3 - Visto.
//    descrição: verificar e tirar o visto.
//    todo: verificar se o visto precisa.
//    todo2: tirar o visto.
//
// seção 4 - Entretenimento
//    descrição: comer parada
//    tempo: ??
//    onde: tal lugar
