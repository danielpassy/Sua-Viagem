import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Layouts } from '@/app/page';
import { Button } from '@mui/material';
import LayoutDisplay from '@/app/components/layout-display';

export default function LayoutSelect({
  setLayout,
  layout,
  submitForm,
}: {
  setLayout: Function;
  layout: Layouts;
  submitForm: Function;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={layout}
          label="Age"
          onChange={(value) => setLayout(value.target.value as Layouts)}
        >
          {Object.values(Layouts).map((l) => (
            <MenuItem value={l}>{l}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <LayoutDisplay layout={layout} />
      <Button variant="contained" onClick={submitForm}>
        Criar Viagem
      </Button>
    </Box>
  );
}
