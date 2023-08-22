import Image from "next/image";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navigator";


export default function Home() {
  return (
    <>
    <Navbar page="home" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>This is hero</h1>
        <div className="flex flex-row flex-wrap">
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
        </div>
      </main>
    </>
  );
}
