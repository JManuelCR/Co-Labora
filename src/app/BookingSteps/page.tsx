"use client";
import CustomStepper from "@/components/Stepper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Payment from "../payment/page";
import React, { useState, useEffect } from "react";
import Extras from "../addItems/page";
import Description from "../userInput/page";
import Confirm from "../ConfirmReservation/page";
import OwnStepper from "@/components/OwnStepper";

export default function BookingSteps() {
  const [actualStep, setStep] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  function gatSelectionStep() {
    switch (actualStep) {
      case 0:
        return <Extras />;
      case 1:
        return <Description />;
      case 2:
        return <Confirm />;
    }
  }

  return (
    <>
      {
      showComponent?
      (
        <>
      <Navbar page="payment" />
      <div className="flex flex-row justify-center">
      <OwnStepper 
      actualStep={actualStep} 
      stepOne="Agregar extras"
      stepTwo="Tu referencia"
      stepThree="Confirma"
      />
      </div>

      <div className="mt-6">{gatSelectionStep()}</div>
      <div className="w-full flex justify-center pb-[37px]">
            <div className="flex flex-col-reverse md:flex-row gap-[18px] md:gap-[100px] justify-center items-center">
              {actualStep !== 0 && actualStep <= 3 && (
                <button
                  className="bg-white rounded-lg px-[18px] py-1 w-[134px] h-[35px] border border-primary buttonMobileShadow"
                  onClick={() => setStep(actualStep - 1)}
                >
                  <span className="text-[14px] font-[600] leading-[27px] text-primary tracking-[-0.28px]">
                    Ir atrás
                  </span>
                </button>
              )}
              {actualStep <= 1 && (
                <button
                  className={`bg-primary rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow`}
                  onClick={() => setStep(actualStep + 1)}
                >
                  <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
                    Siguiente
                  </span>
                </button>
              )}
              {actualStep === 2 ? (
                <button
                  className={`bg-primary rounded-lg px-[18px] py-1 w-[224px] h-[35px] buttonMobileShadow hidden`}
                >
                  <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
                    Confirmar reserva
                  </span>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <Footer />
    </>
      ) :
      (
        <></>
      )     
    }
    </>
  );
}
