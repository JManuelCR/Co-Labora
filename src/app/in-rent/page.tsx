import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import FiltersBar from "@/components/FiltersBar";
import { dataBD } from "@/data/card-data";
import CardsAvailable from "@/components/CardsAvailable";
export default function Rent() {
  return (
    <>
      <Navbar page="in rent" />
      <section className="flex flex-col max-md:flex-wrap-reverse">
        <FiltersBar />
        <h1 className="font-acme text-titles text-blue_800 text-center">
          Espacios disponibles
        </h1>
      </section>
      <section className="flex flex-wrap gap-20 h-screen px-10 py-5 justify-center">
        {dataBD.map((card, index) => (
          <div key={index}>
            <CardsAvailable
              name={card.name}
              address={card.address}
              rating={card.rating}
              price={card.price}
              opinions={card.opinions}
            />
          </div>
        ))}
      </section>
      <div className="footers">
        <footer className="hidden md:block">
          <Footer />
        </footer>
        <footer className="block md:hidden">
          <FooterMobile />
        </footer>
      </div>
    </>
  );
}
