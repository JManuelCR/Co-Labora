/* eslint-disable @next/next/no-img-element */
import Button from "@/types/button.types";
import Image from "next/image";

export default function ButtonAmenities(props: Button) {
  const { name, src } = props;
  return (
    <button  className="border border-solid border-blue_800 rounded-xl p-2 flex justify-between"> 
      <Image src={src} alt="" width={16} height={16} className="mt-1 mx-1" />
      {/* <img src={src} alt="amenity-icon" /> */}
      <p>{name}</p>
    </button>
  );
}
