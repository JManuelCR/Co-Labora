import Image from "next/image";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
<<<<<<< HEAD
import Advantages from "@/pages/Advantages/Advantages";
import CommentsUsers from "@/components/CommentsUser";

=======
import Navbar from "@/components/Navigator";
import Hero from "@/components/Hero";
>>>>>>> b49eda80fdbd66c5e06a8a3f8c73140b8f67e70c
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
<<<<<<< HEAD
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
      <Advantages 
      pictureProfile="https://res.cloudinary.com/practicaldev/image/fetch/s--l1HNuEDK--/c_imagga_scale,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/53570/2cb42370-2fcf-4f63-90fb-8b5a41aae9ee.jpg"
      name="Leandro Molina"
      subtitleProfession="Medico especialista en nutricion"
      profession="Doctor"
      />  
    <CommentsUsers />  
=======
>>>>>>> b49eda80fdbd66c5e06a8a3f8c73140b8f67e70c
    </>
  );
}
