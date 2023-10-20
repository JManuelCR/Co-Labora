import Navbar from "@/components/Navbar";
import FooterMobile from "@/components/FooterMobile";
import Footer from "@/components/Footer";
import CardItems from "@/components/CardItems";
import CardReservationDetail from "@/components/CardReservationDetail";
import { useState } from "react";


export default function AddItems() {
  const [checkboxes, setCheckboxes] = useState<{
    [key: string]: boolean;
  }>({
    wifi: false,
    parking: false,
    airConditioner: false,
    reception: false,
    petFriendly: false,
    cleanService: false,
  });
  return (
    <>
      <section className="mx-[27px] md: my-10 lg:flex lg:mx-40 items-center 2xl:mx-[400px] 2xl:mb-20 lg:my-[6rem] gap-8 ">
        <article className="my-[30px] flex-wrap flex gap-x-12 gap-y-[30px] spc600:gap-x-[70px] sm:gap-x-20 md:mx-[76px]  lg:gap-x-6 lg:mx-0 basis-1/2 lg:gap-y-12 justify-center">
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
        <div className="basis-1/2 flex items-center">
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
