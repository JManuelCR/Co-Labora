import { Acme, Poppins } from "next/font/google";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
import Advantages from "@/pages/Advantages/Advantages";
import CommentsUsers from "@/components/CommentsUser";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SliderLandinDesktop from "@/components/SliderLandigDesktop";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="2xl:max-w-[1440px] w-full h-full flex flex-col  relative over">
        <Navbar page="home" />
        <main className="flex flex-col items-center justify-between h-auto">
          <Hero />
          {/* <h1 className="text-blue_800">This is hero</h1> */}
          <section className="flex flex-col items-center justify-center px-[156  px] pt-[56px]">
            <div className="w-[520px] border-secondary border-solid border-b-[4px] mb-[60px]">
              <h2 className=" text-[40px] text-center font-acme text-blue_800">
                ¡Los mejor calificados!
              </h2>
            </div>
            <div className="flex flex-wrap gap-x-[84px] mb-[42px] gap-y-[80px] h-auto px-[150px]">
              {dataBD.map((card, index) => (
                <div key={index} className="flex flex-ro gap-1">
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
              <div className="flex w-[100%] justify-center">
                <button className="w-[280px] px-[18px] py-[4px]   rounded-lg bg-primary font-[600] font-poppins text-[20px] text-white">
                ¡Explora más lugares!
                </button>
              </div>
          </section>
          <Advantages
            pictureProfile="https://res.cloudinary.com/practicaldev/image/fetch/s--l1HNuEDK--/c_imagga_scale,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/53570/2cb42370-2fcf-4f63-90fb-8b5a41aae9ee.jpg"
            name="Leandro Molina"
            subtitleProfession="Medico especialista en nutricion"
            profession="Doctor"
          />
          <CommentsUsers />
        </main>
        <Footer />
      </div>
    </div>
  );
}
