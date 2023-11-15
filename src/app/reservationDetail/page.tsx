import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import carpenter from "../../../public/temporal-images/holder-carpenter.webp";
import star from "../../../public/icons/Single-Star-icon.svg";
import rateStar from "../../../public/icons/Star-Shape.svg";
import Image from "next/image";
import Link from "next/link";

export default function ReservationDetail() {
  const {
    name,
    address,
    rating,
    opinions,
    start_date,
    end_date,
    description,
    addons,
    price,
  } = reservations[0];
  const total = price * 4;
  const commision = total * 0.3;
  const tax = total * 0.16;
  return (
    <>
      <Navbar page="reservation" />
      <h1 className="font-acme text-titles text-center text-blue_800">
        Detalle de la reservacion
      </h1>
      <section className="flex justify-center items-center max-md:flex-wrap w-full my-10 gap-10">
        <section className="flex flex-col border border-solid border-secondary rounded-xl w-[550px] h-[650px] p-5">
          <article className="flex flex-col text-blue_800">
            <section className="flex gap-6 my-5">
              <div>
                <strong className="font-acme text-titleMobil">{name}</strong>
                <p className="font-acme py-3">{address}</p>
                <span className="flex gap-2">
                  <Image src={star} alt="star icon" width={12} height={12} />
                  <p>{rating}</p>
                  <p>{`(${opinions} opiniones)`}</p>
                </span>
              </div>
              <div>
                <Image
                  src={carpenter}
                  alt="carpenter temporal"
                  width={400}
                  height={200}
                  className="rounded-md"
                />
              </div>
            </section>
            <span className="border border-solid border-b-secondary px-10" />
            <section className="flex flex-col gap-5">
              <div>
                <h4 className="font-poppins font-bold">Fechas Reservadas</h4>
                <p>{`${start_date} - ${end_date}`}</p>
              </div>
              <div>
                <h4 className="font-poppins font-bold">
                  Inicio y Termino de reservacion por dia
                </h4>
                <p className="font-semibold">De 11:00 am a 20:00 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-poppins font-bold">
                  Descripcion del lugar
                </h4>
                <p className="font-poppins font-normal">{description}</p>
              </div>
            </section>
          </article>
        </section>
        <section className="flex flex-col border border-solid border-secondary rounded-xl w-[550px] h-[650px] p-5 text-blue_800 ">
          <article className="my-4 font-normal">
            <h3 className="font-poppins text-blue_800 text-suTitles text-center font-normal">
              Desglose de pagos
            </h3>

            <h3 className="font-poppins text-blue_800 text-suTitles text-start pt-5">
              Detalle de la reservacion
            </h3>
            <div className="flex justify-between mb-5 ">
              <p className="font-semibold">{`$${price} x dia`}</p>
              <p className="font-semibold">{`${total} MXN`}</p>
            </div>
            <h3 className="font-acme text-blue_800 text-suTitles">Items</h3>
            <div className="flex flex-col gap-3 font-semibold">
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
          <article className="flex justify-between items-center my-3 font-semibold">
            <div className="flex flex-col gap-2">
              <p>Tarjeta de debito</p>
              <p>XXXX-XXXX-XXXX-5129</p>
              <p>04/05</p>
            </div>
            <div>Mastercard</div>
          </article>
          <article className="flex justify-between">
            <h3 className="font-acme text-blue_800 text-suTitles">Total MXN</h3>
            <strong className="font-bold text-suTitles border-2 border-solid border-primary px-10 ">
              $4,170.62
            </strong>
          </article>
        </section>
      </section>
      <section className="flex flex-col items-center justify-center gap-3 pb-[137px]">
        <h3 className="font-acme text-titleMobil text-blue_800">
          Califica tu estancia
        </h3>
        <div className="flex gap-2">
          <button>
            <Image src={rateStar} alt="starrate" width={20} height={20} />
          </button>
          <button>
            <Image src={rateStar} alt="starrate" width={20} height={20} />
          </button>
          <button>
            <Image src={rateStar} alt="starrate" width={20} height={20} />
          </button>
          <button>
            <Image src={rateStar} alt="starrate" width={20} height={20} />
          </button>
          <button>
            <Image src={rateStar} alt="starrate" width={20} height={20} />
          </button>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Anexa un comentario"
            className="text-blue_800 py-2 px-6 border-solid border-blue_700 focus:outline-none font-semibold border rounded-lg"
          />
         <Link href={"/"}> <button className="text-white font-poppins bg-primary rounded-lg px-3 py-2">
            Calificar
          </button></Link>
        </div>
      </section>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
