import Navbar from "@/components/Navbar";
import FooterMobile from "@/components/FooterMobile";
import Footer from "@/components/Footer";
import CardItems from "@/components/CardItems";
import CardReservationDetail from "@/components/CardReservationDetail";
import { dataBD } from "@/data/card-data";

export default function addItems() {
  return (
    <>
      <section className="mx-[27px] md: mt-36 lg:flex lg:mx-[30px] items-center 2xl:mx-96 ">
        <article className="my-[30px] flex-wrap flex gap-x-12 gap-y-[30px] spc600:gap-x-[70px] sm:gap-x-20 md:mx-[76px]  lg:gap-x-6 lg:mx-0 basis-1/2 lg:gap-y-12 lg:mt-52">
          <CardItems
            name="Desarmador"
            price={50}
            iconItem="icons/Screwdriver.svg"
          />
          <CardItems
            name="Extensión electrica"
            price={20}
            iconItem="icons/electricalServices.svg"
          />
          <CardItems
            name="Flexometro"
            price={20}
            iconItem="icons/Flexmeter.svg"
          />
          <CardItems
            name="Taladro"
            price={200}
            iconItem="icons/drillMachine.svg"
          />
          <CardItems
            name="Cepillo para madera"
            price={80}
            iconItem="icons/woodPlaner.svg"
          />
          <CardItems
            name="Sierra para madera"
            price={300}
            iconItem="icons/Jigsaw.svg"
          />
        </article>
        <div className="basis-1/2">
          <CardReservationDetail
            name={"Taller de Tapicería"}
            address={"calle Margarita Masa Miguel Hidalgo"}
            rating={4.5}
            opinions={60}
            price={650}
            days={4}
            nameItem="Taladro"
            priceItem={200}
          />
        </div>
      </section>
    </>
  );
}
