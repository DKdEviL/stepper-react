import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";
import StepContent from "@mui/material/StepContent";
import "./App.css";
import NameComponent from "./components/name/NameComponent";
import WorkSpaceComponent from "./components/workspace/WorkSpaceComponent";

const steps = ["", "", "", ""];
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [userName, setUserName] = useState({ fullName: "", displayName: "" });
  const [workspace, setWorkspace] = useState({name: '', url: ''});

  useEffect(() => {
    if ((userName.fullName && userName.displayName) || workspace.name) {
      setActiveStep(activeStep + 1);
    }
  }, [userName, workspace]);

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
    </Container>
  );
}

export default App;
