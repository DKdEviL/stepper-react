import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./App.css";
import NameComponent from "./components/name/NameComponent";
import WorkSpaceComponent from "./components/workspace/WorkSpaceComponent";
import UsecaseComponent from "./components/usecase/UsecaseComponent";
import WelcomeComponent from "./components/welcome/WelcomeComponent";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#664de5",
    },
  },
});

const steps = ["", "", "", ""];
const appUsers = [
  {
    title: "For myself",
    description: "Write better. Think more clearly. Stay organized",
  },
  {
    title: "With my team",
    description: "Wikis, docs, tasks & projects, all in one place.",
  },
];
const appText = [
  {
    primary: 'Welcome! First things first...',
    secondary: 'You can always change them later.'
  },
  {
    primary: "Let's setup a homework for all your work",
    secondary: 'You can always create another workspace later.'
  },
  {
    primary: "How are you planning to use Eden?",
    secondary: "We'll streamline your setup experience accordingly."
  }
]
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState({ fullName: "", displayName: "" });
  const [workspace, setWorkspace] = useState({ name: "", url: "" });
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    if ((userName.fullName && userName.displayName)) {
      handleCreateWorkspaceClick()
    }
  }, [userName]);

  useEffect(() =>{
    if (workspace.name) {
      handleCreateWorkspaceClick();
    }
  }, [workspace])

  const handleCreateWorkspaceClick = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ height: "100vh" }}
      classes={{ root: "flex flex-column justify-center align-center" }}
    >
      <Stepper activeStep={activeStep} alternativeLabel sx={{ width: "80%", marginBottom: '0.5rem' }}>
        {steps.map((label, index) => (
          <Step key={label + index}>
            <StepLabel
              StepIconProps={{
                classes: {
                  active: "color-primary",
                  completed: "color-primary",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        activeStep <= 2 &&
        <>
        <Typography variant="h5" component="h3" mt={4} mb={1} sx={{letterSpacing: '1px', fontWeight: 'bold', textAlign: 'center'}}>
        {appText[activeStep].primary}
      </Typography>
      <Typography variant="body1" component="span"mt={1} mb={4} sx={{letterSpacing: '1px', textAlign: 'center'}}>
        {appText[activeStep].secondary}
      </Typography>
        </>
      }
      {activeStep === 0 && <NameComponent updateUserName={setUserName} />}
      {activeStep === 1 && (
        <WorkSpaceComponent updateWorkspace={setWorkspace} />
      )}
      {activeStep === 2 && (
        <UsecaseComponent
          userTypes={appUsers}
          createSpaceHandler={handleCreateWorkspaceClick}
          selectedUser={userSelected}
          updateSelectedUser={setUserSelected}
        />
      )}
      {activeStep >= 3 && <WelcomeComponent userName={userName.displayName} />}
    </Container>
  );
}

export default App;
