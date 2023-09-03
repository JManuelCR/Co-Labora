import { Stepper } from "react-form-stepper";

export default function CustomStepper() {
  return (
    <Stepper
      steps={[
        { label: "Step 1" },
        { label: "Step 2" },
        { label: "Step 3" },
        { label: "Step 4" },
      ]}
      activeStep={2}
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: "#A54729",
        activeColor: "#37474F",
        disabledColor: "#E19C5B",
        size: "1rem",
        style: "solid",
      }}
      styleConfig={{
        activeBgColor: "#A54729",
        completedBgColor: "#A54729",
        inactiveBgColor: "#E19C5B",
        activeTextColor: "#FFFFFF",
        completedTextColor: "#37474F",
        inactiveTextColor: "#A54729",
        size: "3rem",
        circleFontSize: "30rem",
        labelFontSize: "0.85rem",
        borderRadius: "50%",
        fontWeight: 500,
      }}
    />
  );
}
