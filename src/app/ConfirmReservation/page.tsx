import Image from "next/image";
import star from "../../../public/icons/star-shape-1-svgrepo-com.svg";
import Confirm from "../../../public/illustrations/image 42.svg";
import Navbar from "@/components/Navbar";
import Carpenter from "../../../public/temporal-images/holder-carpenter.webp";
import { dataConfirm } from "@/data/data-confirm";
export default function ConfirmReservation() {
  const { name, address, addons, price, rating, opinions } = dataConfirm;
  const total = price * 4;
  const commision = total * 0.3;
  const tax = total * 0.16;
  return (
    <>
      <Navbar page="Confirm" />
      <div>Aqui va el stepper</div>
      <section className="flex justify-center items-center max-md:flex-wrap">
        <section className="flex flex-col font-poppins text-blue_800 border border-solid border-blue_800 p-5 rounded-lg max-md:border-none">
          <article className="flex justify-evenly gap-5">
            <div className="flex flex-col gap-3 w-1/2">
              <h3 className="font-acme text-suTitles">{name}</h3>
              <p>{address}</p>
              <div className="flex gap-2">
                <Image src={star} alt="star-rating" width={20} height={20} />
                <p>{`${rating} ( ${opinions} calificaciones )`}</p>
              </div>
            </div>
            <div className=" w-fit">
              <Image
                src={Carpenter}
                alt="carpenter-temporal"
                width={260}
                height={140}
                className="rounded-lg"
              />
            </div>
          </article>
          <article className="my-8">
            <h3 className="font-acme text-blue_800 text-suTitles">
              Detalle de la reservacion
            </h3>
            <div className="flex justify-between mb-5">
              <p>{`$${price} x dia`}</p>
              <p>{`${total} MXN`}</p>
            </div>
            <h3 className="font-acme text-blue_800 text-suTitles">Items</h3>
            <div className="flex flex-col gap-3">
              <span className="flex justify-between">
                <p>{`${addons.hammer.name} x 4 dias`}</p>
                <p>{`${addons.hammer.price} MXN`}</p>
              </span>
              <span className="flex justify-between">
                <p>{`${addons.jigsaw.name} x 4 dias`}</p>
                <p>{`${addons.jigsaw.price} MXN`}</p>
              </span>
              <span className="flex justify-between">
                <p>{`${addons.markers.name} x 4 dias`}</p>
                <p>{`${addons.markers.price} MXN`}</p>
              </span>
              <span className="flex justify-between">
                <p>Comision Co-labora</p>
                <p>{`$${commision} MXN`}</p>
              </span>
              <span className="flex justify-between">
                <p>Impuestos</p>
                <p>{`$${tax} MXN`}</p>
              </span>
            </div>
          </article>
          <h3 className="font-acme text-blue_800 text-suTitles my-2">
            Metodo de pago
          </h3>
          <article className="flex justify-between items-center my-3">
            <div className="flex flex-col gap-2">
              <p>Tarjeta de debito</p>
              <p>XXXX-XXXX-XXXX-5129</p>
              <p>04/05</p>
            </div>
            <div>Mastercard</div>
          </article>
          <article className="flex gap-3 my-3">
            <button className="rounded-full border border-solid border-blue_800 p-3"></button>
            <p className="underline">Acepto terminos y Condiciones</p>
          </article>
          <article className="flex justify-between">
            <h3 className="font-acme text-blue_800 text-suTitles">Total MXN</h3>
            <strong className="font-bold text-suTitles">$4,170.62</strong>
          </article>
        </section>
        <section className="flex flex-col p-5 font-poppins text-blue_800 items-stretch gap-10">
          <article className="max-md:hidden">
            <h1 className="font-acme text-titles font">
              Estas a un solo paso de completar tu reserva
            </h1>
          </article>
          <article className="max-md:hidden">
            <h5 className="text-center">
              Revisa los datos de tu reserva y pulsa Confirmar reserva
            </h5>
          </article>
          <article className="flex justify-center max-md:hidden">
            <Image
              src={Confirm}
              alt="illustration-confirm-reservation"
              width={320}
              height={230}
            />
          </article>
          <article className="flex justify-center">
            <button className="bg-primary text-white px-4 py-2 rounded-xl">
              Confirmar Reserva
            </button>
          </article>
        </section>
      </section>
    </>
  );
}
