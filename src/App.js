import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import StepContent from "@mui/material/StepContent";
import "./App.css";
import NameComponent from "./components/name/NameComponent";
import WorkSpaceComponent from "./components/workspace/WorkSpaceComponent";
import UsecaseComponent from "./components/usecase/UsecaseComponent";

const steps = ["", "", "", ""];
const appUsers = [
  {
    title: 'For myself',
    description: 'Write better. Think more clearly. Stay organized'
  },
  {
    title: 'With my team',
    description: 'Wikis, docs, tasks & projects, all in one place.'
  }
]
function App() {
  const [activeStep, setActiveStep] = useState(2);
  const [userName, setUserName] = useState({ fullName: "", displayName: "" });
  const [workspace, setWorkspace] = useState({name: '', url: ''});
  const [userSelected, setUserSelected] = useState(null);


  useEffect(() => {
    if ((userName.fullName && userName.displayName) || workspace.name) {
      setActiveStep(activeStep + 1);
    }
  }, [userName, workspace]);

  const handleCreateWorkspaceClick = () => {
    setActiveStep(activeStep + 1);
  }

  return (
    <Container maxWidth="sm">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <NameComponent updateUserName={setUserName} />}
      {activeStep === 1 && <WorkSpaceComponent updateWorkspace={setWorkspace} />}
      {
        activeStep === 2 && <UsecaseComponent userTypes={appUsers} createSpaceHandler={handleCreateWorkspaceClick} selectedUser={userSelected} updateSelectedUser={setUserSelected} />
      }
    </Container>
  );
}

export default App;
