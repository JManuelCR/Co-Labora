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
    <article>
      <section>
        <img
          src="../assets/images/holder-carpenter-webp"
          alt="imagen de la carpinteria momentanea"
        />
      </section>
      <section>
        <article>
          <h3>{name}</h3>
          <h4>{`${size} m2`}</h4>
          <p>{`${address}`}</p>
        </article>
        <article>
          <img src="../assets/icons/wifi-icon.webp" alt="wifi logo" />
          <img
            src="../assets/icons/videocam-icon.webp"
            alt="videocamara icono"
          />
          <img src="../assets/icons/sunny-icon.webp" alt="sol icono" />
        </article>
        <article>
          <img src="../assets/icons/star-icon.webp" alt="sol icono" />
          <strong>{rating}</strong>
          <strong>{`(${opinions}valoraciones)`}</strong>
        </article>
        <article>
          <button>+ Detalles</button>
          <strong>{`$${price}x dia`}</strong>
        </article>
      </section>
    </article>
  );
}
