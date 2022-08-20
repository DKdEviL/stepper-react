
import Paper from "@mui/material/Paper";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { BootstrapInput } from "../NameComponent";
import './WorkSpace.css';


const WorkSpaceComponent = ()=> {
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
            Workspace Name
          </InputLabel>
          <BootstrapInput onChange={(e) => {}} fullWidth margin="normal" placeholder="Eden" id="workspaceName-input" />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            Workspace URL (optional)
          </InputLabel>
          <Box component="div" className="urlContainer" sx={{display: 'flex'}}>
          <Chip classes={{root: 'urlChip'}} label="www.eden.com/" />
          <BootstrapInput classes={{root: 'urlInput'}} onChange={(e) => {}} placeholder="Example" id="workUrl-input" />
          </Box>
        </FormControl>
        <Button onClick={() => {}} fullWidth margin="normal" variant="contained">Create Workspace</Button>
      </Stack>
    </Paper>
    )
}

export default WorkSpaceComponent;