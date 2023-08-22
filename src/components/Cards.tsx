import { dataBD } from "@/data/card-data";
interface Props {
  name: string;
  address: string;
  size: number;
  amenities: {
    wifi: boolean;
    pet: boolean;
    parking: boolean;
    aircondition: boolean;
    cleaning: boolean;
    reception: boolean;
  };
  rating: number;
  opinions: number;
  price: number;
  description: string;
}
export default function Cards(props: Props) {
  const {
    name,
    address,
    size,
    amenities,
    rating,
    opinions,
    price,
    description,
  } = props;
  return (
    <article className="bg-white w-80  rounded-2xl border-solid border border-primary flex flex-col justify-evenly">
      <section>
        <img
          src="../holder-carpenter.webp"
          alt="imagen de la carpinteria momentanea"
          className="bg-cover rounded-t-2xl w-80 h-52"
        />
      </section>
      <section className="m-5">
        <article className="flex flex-col ">
          <h3 className="text-blue_800 font-bold text-2xl ">{name}</h3>
          <h4 className="text-blue_500 font-semibold">{`${size} m2`}</h4>
          <p className="text-blue_500 font-light flex flex-wrap h-20 text">{`${address}`}</p>
        </article>
        <article className="flex justify-around pt-2">
          <img src="icons/wifi-icon.webp" alt="wifi logo" className="w-7" />
          <img
            src="icons/videocam-icon.webp"
            alt="videocamara icono"
            className="w-7"
          />
          <img src="icons/sunny-icon.webp" alt="sol icono" className="w-7" />
        </article>
        <article className="mt-2 flex gap-1 items-center">
          <img src="icons/star-icon.webp" alt="sol icono" className="w-6" />
          <strong className="text-blue_800 text-xs pt-1">{rating}</strong>
          <strong className="text-blue_800 text-xs pt-1">{`(${opinions}valoraciones)`}</strong>
        </article>
      </section>
      <article className="flex justify-between p-3">
        <button className="bg-primary rounded-full px-4 p-2">+ Detalles</button>
        <strong className="font-bold text-blue_800 text-xl mt-1">{`$${price} x dia`}</strong>
      </article>
    </article>
  );
}
