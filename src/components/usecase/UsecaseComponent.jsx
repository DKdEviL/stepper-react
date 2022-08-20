import {useState} from 'react';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import PeopleIcon from "@mui/icons-material/People";

import './Usecase.css';

const UsecaseComponent = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
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
      <List classes={{root: 'userList'}} component="nav" aria-label="main mailbox folders">
        {props.userTypes.map((user, index) => {
          return (
            <ListItemButton
            classes={{selected: 'selectedItem'}}
              key={user.title + index}
              selected={props.selectedUser === index}
              onClick={() => {props.updateSelectedUser(index)}}
            >
              <Card classes={{root: 'cardContainer'}}>
                <CardContent>
                  <ListItemIcon>
                    {user.title.includes("team") ? (
                      <PeopleIcon fontSize="small" />
                    ) : (
                      <PersonIcon fontSize="small" />
                    )}
                  </ListItemIcon>
                  <Typography variant="h5" component="div">
                    {user.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {user.description}
                  </Typography>
                </CardContent>
              </Card>
            </ListItemButton>
          );
        })}
      </List>
      <Button
          onClick={() => props.createSpaceHandler()}
          fullWidth
          margin="normal"
          variant="contained"
        >
          Create Workspace
        </Button>
      </Stack>
    </Paper>
  );
};

export default UsecaseComponent;
