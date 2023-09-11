import { Stepper } from "react-form-stepper";

export default function CustomStepper(step: any) {
  return (
    <div className="flex">
      <Stepper
        steps={[
          { label: "Step 1" },
          { label: "Step 2" },
          { label: "Step 3" },
          { label: "Step 4" },
        ]}
        activeStep={step}
        // connectorStateColors={true}
        // connectorStyleConfig={{
        //   completedColor: "#A54729",
        //   activeColor: "#A54729",
        //   disabledColor: "#E19C5B",
        //   size: "0.5rem",
        //   style: "solid",
        // }}
        // styleConfig={{
        //   activeBgColor: "#A54729",
        //   completedBgColor: "#A54729",
        //   inactiveBgColor: "#E19C5B",
        //   activeTextColor: "#FFFFFF",
        //   completedTextColor: "#37474F",
        //   inactiveTextColor: "#37474F",
        //   size: "3rem",
        //   circleFontSize: "2rem",
        //   labelFontSize: "0.85rem",
        //   borderRadius: "50%",
        //   fontWeight: 200,
        // }}
      />
    </div>
  );
}
