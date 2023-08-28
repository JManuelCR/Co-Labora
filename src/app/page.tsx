import Image from "next/image";
import { dataBD } from "@/data/card-data";
import Cards from "@/components/Cards";
import Advantages from "@/pages/Advantages/Advantages";
import CommentsUsers from "@/components/CommentsUser";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ColaboraFooterLogo from "../../public/icons/logo-colabora-footer.svg"
import twitterLogo from "../../public/icons/twitter-logo.svg"
import facebookLogo from "../../public/icons/facebook-logo.svg"
import googlePlusLogo from "../../public/icons/googleplus-logo.svg"
import linkedInLogo from "../../public/icons/linkedin-logo.svg"

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="2xl:max-w-[1440px] w-full h-full flex flex-col  relative over">
      <Navbar page="home" />
        <main className="flex flex-col items-center justify-between h-auto">
          <Hero />
          {/* <h1 className="text-blue_800">This is hero</h1> */}
          <section className="flex flex-col items-center px-[156px] pt-[56px]">
            <div className="w-[520px] border-secondary border-solid border-b-[4px] mb-[60px]">
            <h2 className="text-sections text-center text-blue_800">¡Los mejor calificados!</h2>
            </div>
           <div className="flex flex-wrap gap-x-[84px] gap-y-[80px] h-auto">
           {dataBD.map((card, index) => (
              <div key={index} className="flex flex-row pb-5 gap-1">
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
          </section>
        <Advantages
          pictureProfile="https://res.cloudinary.com/practicaldev/image/fetch/s--l1HNuEDK--/c_imagga_scale,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/53570/2cb42370-2fcf-4f63-90fb-8b5a41aae9ee.jpg"
          name="Leandro Molina"
          subtitleProfession="Medico especialista en nutricion"
          profession="Doctor"
        />
        <CommentsUsers />
        </main>
        <footer className="h-[190px] w-full backgroundGradienFooter px-[128px] py-[20px]">
          <div className="flex justify-around">
            <ul className="flex flex-col gap-2">
              <li className="text-light flex gap-[10px]">
                <Image src={ColaboraFooterLogo} alt={""}/>
                <p className="text-light text-bold">Co-Labora</p>
              </li>
              <li className="text-light block max-w-[215px]">
                Lorem ipsum dolor sit amet consectetur adipisicing .
              </li>
              <li className="text-light flex gap-[12px]">
                <Image className="w-3 h-3" src={googlePlusLogo} alt={"Google Plus footer logo"} />
                <Image className="w-3 h-3" src={facebookLogo} alt={"Facebookfooter logo"} />
                <Image className="w-3 h-3" src={twitterLogo} alt={"Twitter footer logo"} />
                <Image className="w-3 h-3" src={linkedInLogo} alt={"LinkedIn footer logo"} />
              </li>
            </ul>
            <ul>
              <li className="text-light">About Us</li>
              <li className="text-light">AQ</li>
              <li className="text-light">Our Brand</li>
              <li className="text-light">Our Staff</li>
              <li className="text-light">Contact Us</li>
            </ul>
            <ul>
              <li className="text-light">Contact Us</li>
              <li className="text-light">
                <Image src={""} alt="" />
                Trant Ave.25
              </li>
              <li className="text-light">
                <Image src={""} alt="" />
                +52 1 55 40 261 932
              </li>
              <li className="text-light">
                <Image src={""} alt="" />
              </li>
            </ul>
          </div>
        </footer>
      </div>
      </div>
  );
}
