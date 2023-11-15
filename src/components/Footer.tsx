import Image from "next/image";
import ColaboraFooterLogo from "../../public/co-labora-logo.webp";
import twitterLogo from "../../public/icons/twitter-logo.svg";
import facebookLogo from "../../public/icons/facebook-logo.svg";
import googlePlusLogo from "../../public/icons/googleplus-logo.svg";
import linkedInLogo from "../../public/icons/linkedin-logo.svg";
import location from "../../public/icons/Map-footer.svg"
import phone from "../../public/icons/Phone-footer.svg"
import email from "../../public/icons/Email-footer.svg"
import FooterMobile from "./FooterMobile";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <footer className="w-full h-auto">
      <div className="md:hidden">
        <FooterMobile />
      </div>      
      <div className="hidden md:block h-[190px] w-full backgroundGradientFooter px-[128px] py-[20px]">
        <div className="flex justify-between">
          <ul className="flex flex-col gap-2 mt-[20px]">
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px] flex gap-[10px] justify-center">
              <Link href={"/"}><Image src={ColaboraFooterLogo} alt={""} className="rounded-lg" /></Link>
            </li>
            <li className="text-white text-[14px] text-center font-[300] font-poppins leading-[22px] tracking-[-0.28px] block max-w-[215px]">
              Lorem ipsum dolor sit amet consectetur adipisicing .
            </li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px] flex gap-[12px] justify-center">
              <Image                
                src={googlePlusLogo}
                alt={"Google Plus footer logo"}
                width={30}
                height={10}
              />
              <Image
                src={facebookLogo}
                alt={"Facebookfooter logo"}
                width={14}
                height={14}
              />
              <Image
                src={twitterLogo}
                alt={"Twitter footer logo"}
                width={15}
                height={12}
              />
              <Image
                src={linkedInLogo}
                alt={"LinkedIn footer logo"}
                width={13}
                height={13}
              />
            </li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">About Us</li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">AQ</li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">Our Brand</li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">Our Staff</li>
            <Link href={"/contacts"}><li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">Contact Us</li></Link>
          </ul>
          <ul className="flex flex-col gap-3">
           <Link href={"/contacts"}> <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px]">Contact Us</li></Link>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px] flex gap-[14px]">
              <Image src={location} alt="Location icon" />
              Trant Ave.25
            </li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px] flex gap-[14px]">
              <Image src={phone} alt="Phone icon" />
              +52 1 55 40 261 932
            </li>
            <li className="text-white text-[14px] font-[300] font-poppins leading-[22px] tracking-[-0.28px] flex gap-[14px]">
              <Image src={email} alt="Email icon" />
              info@gmail.co
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
