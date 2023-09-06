import Button from "@/types/button.types";
import Image from "next/image";
export default function ButtonAmenities(props: Button) {
  const { name, src } = props;
  return (
    <button className="border border-solid border-blue_800 rounded-xl p-2 flex justify-between">
      <Image src={src} alt="amenity-icon" width={16} height={16} />
      <p>{name}</p>
    </button>
  );
}
