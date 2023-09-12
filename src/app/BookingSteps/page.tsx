"use client";
import CustomStepper from "@/components/Stepper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Payment from "../payment/page";
import Rent from "../in-rent/page";
import React, { useState } from "react";

export default function BookingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  function gatSelectionStep() {
    switch (activeStep) {
      case 0:
        return <Payment />;
      case 1:
        return <Rent />;
      case 2:
        return <Payment />;
      case 3:
        return <Rent />;
    }
  }

  return (
    <>
      <Navbar page="payment" />
      <div className="flex flex-row justify-center">
        <CustomStepper step={activeStep} />
      </div>

      <div className="mt-6">{gatSelectionStep()}</div>
      <div className="flex  justify-center h-fit gap-60 py-5 max-md:flex-col max-md:items-center max-md:gap-5">
        {activeStep !== 0 && activeStep <= 3 && (
          <button
            className="rounded-lg border-solid border-primary border-2 text-primary w-28 p-1"
            onClick={() => setActiveStep(activeStep - 1)}>
            Ir atras
          </button>
        )}
        {activeStep < 3 && (
          <button
            className="bg-primary text-white rounded-lg w-28 p-1"
            onClick={() => setActiveStep(activeStep + 1)}>
            Siguiente
          </button>
        )}
      </div>
      <footer className="hidden md:flex items-end ">
        <Footer />
      </footer>
      <footer className="block md:hidden">
        <FooterMobile />
      </footer>
    </>
  );
}
