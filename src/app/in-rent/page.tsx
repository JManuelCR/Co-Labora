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

        </div>
      </div>
    </>
  );
}
