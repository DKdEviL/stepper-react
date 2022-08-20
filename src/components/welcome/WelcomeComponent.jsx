import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import './Welcome.css';

const WelcomeComponent = (props) => {
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
        <Card>
          <CardContent className='flex flex-column align-center'>
            <Icon sx={{ width: '48px', height: '48px', background: '#664de5', borderRadius: '50%'}} className='iconContainer flex justify-center align-center'>
                <DoneOutlinedIcon fontSize="medium" sx={{color: '#fff'}} />
            </Icon>
            <Typography variant="h5" component="div">
              Congratulations, {props.userName}
            </Typography>
            <Typography variant="body2">
              You have completed onboarding, you can start using the Eden!
            </Typography>
          </CardContent>
        </Card>
        <Button
          onClick={() => {}}
          fullWidth
          margin="normal"
          variant="contained"
        >
          Launch Eden
        </Button>
      </Stack>
    </Paper>
  );
};

export default WelcomeComponent;
