"use client";
import Navbar from "@/components/Navbar";
import OwnStepper from "@/components/OwnStepper";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import PhotoEvidence from "../photoEvidence/page";
import GeneralInfo from "@/components/generalDataSpaceInRent";
import SaveNewPlace from "../SaveNewPlace/page";

export default function ReservationSteps() {
  const [showComponent, setShowComponent] = useState(false);
  const [actualStep, setStep] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  function getSelectionComponent() {
    switch (actualStep) {
      case 0:
        return <PhotoEvidence />;
      case 1:
        return <GeneralInfo />;
      case 2:
        return <SaveNewPlace />;
    }
  }
  function bookingConfirm() {
    console.log("Reserva confirmada");
  }

  if (showComponent) {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col justify-center items-center max-w-[1440px]">
          <Navbar page="in rent" />
          <OwnStepper
            actualStep={actualStep}
            stepOne="Agregar extras"
            stepTwo="Tu referencia"
            stepThree="Confirma"
          />
          {getSelectionComponent()}
          <div className="w-full flex justify-center pb-[37px]">
            <div className="flex flex-col-reverse md:flex-row gap-[18px] md:gap-[100px] justify-center items-center">
              {actualStep !== 0 && actualStep <= 3 && (
                <button
                  className="bg-white rounded-lg px-[18px] py-1 w-[134px] h-[35px] border border-primary buttonMobileShadow"
                  onClick={() => setStep(actualStep - 1)}>
                  <span className="text-[14px] font-[600] leading-[27px] text-primary tracking-[-0.28px]">
                    Ir atrás
                  </span>
                </button>
              )}
              {actualStep <= 1 && (
                <button
                  className={`bg-primary rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow`}
                  onClick={() => setStep(actualStep + 1)}>
                  <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
                    Siguiente
                  </span>
                </button>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
