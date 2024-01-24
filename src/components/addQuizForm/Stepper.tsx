import { Step, Stepper } from "@material-tailwind/react";
import React from "react";

export function DefaultStepper() {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div className="w-full py-4 px-8">
            <Stepper placeholder={""}
                activeStep={activeStep}
            >
                <Step className="px-8 w-fit" placeholder={""} onClick={() => setActiveStep(0)}>
                    Quiz List
                </Step>


                <Step className="px-8 w-fit" placeholder={""} onClick={() => setActiveStep(1)}>
                    Add Quiz
                </Step>
            </Stepper>
        </div>
    );
}