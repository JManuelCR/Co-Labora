"use client";
import Navbar from "@/components/Navbar";
import OwnStepper from "@/components/OwnStepper";
export default function Rent() {
  return (
    <>
      <Navbar page="in rent" />
      <OwnStepper actualStep={2} />
      <div className="w-full flex justify-center h-auto">
        <div className="flex flex-col md:flex-row gap-[18px] md:gap-[100px]">
          <button className="bg-primary rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow">
            <span className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]">
              Siguiente
            </span>
          </button>
          <button className="bg-white rounded-lg px-[18px] py-1 w-[134px] h-[35px] border border-primary buttonMobileShadow">
            <span className="text-[14px] font-[600] leading-[27px] text-primary tracking-[-0.28px]">
              Ir atrás
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
