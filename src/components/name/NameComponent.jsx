import {useState} from 'react';
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: 'transparent',
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha('#664de5', 0.25)} 0 0 0 0.2rem`,
      borderColor: '#664de5',
    },
  },
}));

const NameComponent = (props) => {

    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');

  return (
    <Paper elevation={0} sx={{width: '90%'}}>
      <Stack
        component="form"
        sx={{
          width: "100%",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" classes={{root: 'font-bold color-black'}}>
            FullName
          </InputLabel>
          <BootstrapInput value={username} onChange={(e) => setUsername(e.target.value)} fullWidth margin="dense" placeholder="Steve Jobs" id="fullName-input" />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" classes={{root: 'font-bold color-black'}}>
            Display Name
          </InputLabel>
          <BootstrapInput value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Steve" id="displayName-input" />
        </FormControl>
        <Button sx={{backgroundColor: '#664de5'}} onClick={() => {props.updateUserName({fullName: username, displayName: displayName})}} fullWidth margin="normal" variant="contained">Create Workspace</Button>
      </Stack>
    </Paper>
  );
};

export default NameComponent;
