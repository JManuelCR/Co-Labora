"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerifySteps from "@/components/VerifySteps";
import React, { useState, useEffect } from "react";
import Register from "../createAccount/page";
import Verify from "../doubleAuth/page";
export default function VerifyAccount() {
  const [actualStep, setStep] = useState(0);
  const [showComponent, setShowComponent] = useState(false);
  const [data, setData] = useState();

  const getUserData = (toPass: any) => {
    setData(toPass);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowComponent(true);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  function VerifyAccount() {
    switch (actualStep) {
      case 0:
        return <Register props={getUserData} />;
      case 1:
        return <Verify props={data} />;
    }
  }

  return (
    <>
      {showComponent ? (
        <>
          <Navbar page="Register" />
          <div className="flex flex-row justify-center">
            <VerifySteps
              actualStep={actualStep}
              stepOne="Registrate"
              stepTwo="Verifica tu cuenta"
            />
          </div>

          <div className="mt-6">{VerifyAccount()}</div>
          <div className="w-full flex justify-center pb-[37px]">
            <div className="flex flex-col-reverse md:flex-row gap-[18px] md:gap-[100px] justify-center items-center">
              {actualStep !== 0 && actualStep <= 1 && (
                <button
                  className="bg-white rounded-lg px-[18px] py-1 w-[134px] h-[35px] border border-primary buttonMobileShadow"
                  onClick={() => setStep(actualStep - 1)}>
                  <span className="text-[14px] font-[600] leading-[27px] text-primary tracking-[-0.28px]">
                    Ir atrás
                  </span>
                  1
                </button>
              )}
              {actualStep < 1 && (
                <button
                  onClick={() => {
                    setStep(actualStep + 1);
                  }}
                  id="step-register">
                  <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]"></span>
                </button>
              )}
              {/* {actualStep === 3 ? (
                <button
                  className={`bg-primary rounded-lg px-[18px] py-1 w-[224px] h-[35px] buttonMobileShadow hidden`}>
                  <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
                    Iniciar sesion
                  </span>
                </button>
              ) : (
                <></>
              )} */}
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
