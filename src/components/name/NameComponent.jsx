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
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const NameComponent = (props) => {

    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');

  return (
    <Paper elevation={0}>
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
          <InputLabel shrink htmlFor="bootstrap-input">
            FullName
          </InputLabel>
          <BootstrapInput value={username} onChange={(e) => setUsername(e.target.value)} fullWidth margin="dense" placeholder="Steve Jobs" id="fullName-input" />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Display Name
          </InputLabel>
          <BootstrapInput value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Steve" id="displayName-input" />
        </FormControl>
        <Button onClick={() => {props.updateUserName({fullName: username, displayName: displayName})}} fullWidth margin="normal" variant="contained">Create Workspace</Button>
      </Stack>
    </Paper>
  );
};

export default NameComponent;
