import Image from "next/image";
import ColaboraFooterLogo from "../../public/co-labora-logo.webp";
import twitterLogo from "../../public/icons/twitter-logo.svg";
import facebookLogo from "../../public/icons/facebook-logo.svg";
import googlePlusLogo from "../../public/icons/googleplus-logo.svg";
import linkedInLogo from "../../public/icons/linkedin-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="h-[190px] w-full backgroundGradienFooter px-[128px] py-[20px] max-sm:py-0 ">
        <div className="flex justify-between">
          <ul className="flex flex-col gap-2">
            <li className="text-light flex gap-[10px]">
              <Image src={ColaboraFooterLogo} alt={""} className="rounded-lg" />
            </li>
            <li className="text-light block max-w-[215px]">
              Lorem ipsum dolor sit amet consectetur adipisicing .
            </li>
            <li className="text-light flex gap-[12px]">
              <Image
                className="w-3 h-3"
                src={googlePlusLogo}
                alt={"Google Plus footer logo"}
              />
              <Image
                className="w-3 h-3"
                src={facebookLogo}
                alt={"Facebookfooter logo"}
              />
              <Image
                className="w-3 h-3"
                src={twitterLogo}
                alt={"Twitter footer logo"}
              />
              <Image
                className="w-3 h-3"
                src={linkedInLogo}
                alt={"LinkedIn footer logo"}
              />
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
    </>
  );
}
