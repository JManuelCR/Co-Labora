import ButtonAmenities from "./ButtonAmenities";
import { amenities } from "@/data/amenities";
import Slider from "rc-slider";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
export default function Filters() {
  return (
    <article className="flex flex-col bg-white text-blue_800">
      <section className="flex justify-between px-3 border border-solid border-b-blue_800 ">
        <p className="font-semibold">Filters</p>
        <div className=" flex gap-3 ">
          <button className="hover:font-bold">Reset</button>
          <button className="font-bold">X</button>
        </div>
      </section>
      <section className="border border-solid border-b-blue_800">
        <h4 className="text-center font-bold text-blue_800">
          Rango de precios
        </h4>
        <Range min={10} max={250000} step={1} dots={true} />
        <div className="flex justify-between p-2">
          <input
            type="number"
            placeholder="Minimo $0.00"
            className="text-start border-none focus:outline-none"
          />
          <input
            type="number"
            placeholder="Maximo $0.00"
            className="text-start border-none focus:outline-none"
          />
        </div>
      </section>
      <section></section>
      <section>
        <h4 className="text-center font-bold text-blue_800">Por amenidades</h4>
        {amenities.map((am, index) => (
          <ButtonAmenities name={am.name} src={am.src} key={index} />
        ))}
      </section>
    </article>
  );
}
