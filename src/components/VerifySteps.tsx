import { Stepper } from "react-form-stepper";
import { VerifySteps } from "@/types/verify.types";

export default function OwnStepper(config: VerifySteps) {
  const { stepOne, stepTwo, actualStep } = config;
  return (
    <div className="w-full flex justify-center items-center h-auto">
      <div className="w-[420px]">
        <Stepper
          steps={[{ label: stepOne }, { label: stepTwo }]}
          activeStep={actualStep}
          connectorStateColors={true}
          className="text-blue_800 text-[18px] font-[400] leading-[25px] text-center"
          styleConfig={{
            activeBgColor: "#A54729",
            activeTextColor: "#FFFFFF",
            completedBgColor: "#A54729",
            completedTextColor: "#FACCAD",
            inactiveBgColor: "#E19C5B",
            inactiveTextColor: "#FAFAFA",
            size: "2.5rem",
            circleFontSize: "0.85rem",
            labelFontSize: "1rem",
            borderRadius: "50%",
            fontWeight: 500,
          }}
          connectorStyleConfig={{
            disabledColor: "#E19C5B",
            activeColor: "#A54729",
            completedColor: "#A54729",
            size: 1,
            stepSize: "30px",
            style: "solid",
          }}
        />
        ;
      </div>
    </div>
  );
}
