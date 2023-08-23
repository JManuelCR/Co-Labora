import Image from "next/image";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navigator";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <Navbar page="home" />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        {/* <h1 className="text-blue_800">This is hero</h1> */}
        <section className="flex flex-row flex-wrap pt-10">
          {dataBD.map((card, index) => (
            <div key={index} className="flex flex-row px-11 pb-5">
              <Cards
                name={card.name}
                address={card.address}
                size={card.size}
                amenities={card.amenities}
                rating={card.rating}
                opinions={card.opinions}
                price={card.price}
                description={card.description}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
