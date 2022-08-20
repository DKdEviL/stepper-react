import { useState } from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { BootstrapInput } from "../name/NameComponent";
import "./WorkSpace.css";

const defaultURL = 'www.eden.com/';

const WorkSpaceComponent = (props) => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

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
            Workspace Name
          </InputLabel>
          <BootstrapInput
          value={name}
            onChange={(e) => {setName(e.target.value)}}
            fullWidth
            margin="dense"
            placeholder="Eden"
            id="workspaceName-input"
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input" classes={{root: 'font-bold color-black'}}>
            Workspace URL (optional)
          </InputLabel>
          <Box
            component="div"
            className="urlContainer"
            sx={{ display: "flex" }}
          >
            <Chip classes={{ root: "urlChip" }} label={defaultURL} />
            <BootstrapInput
              classes={{ root: "urlInput" }}
              value={url}
              onChange={(e) => {setUrl(e.target.value)}}
              placeholder="Example"
              id="workUrl-input"
            />
          </Box>
        </FormControl>
        <Button
          onClick={() => {props.updateWorkspace({name: name, url: url ? defaultURL+url : ''})}}
          fullWidth
          sx={{backgroundColor: '#664de5'}}
          margin="normal"
          variant="contained"
        >
          Create Workspace
        </Button>
      </Stack>
    </Paper>
  );
};

export default WorkSpaceComponent;
