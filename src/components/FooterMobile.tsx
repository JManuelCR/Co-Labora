import Image from "next/image";
import Logo from "../../public/co-labora-logo.webp";
import Email from "../../public/icons/Email.svg";
import Phone from "../../public/icons/Phone.svg";
import Link from "next/link";

export default function FooterMobile() {
  return (
    <section className="bg-primary flex justify-between p-3 ">
      <article className="flex items-center">
       <Link href={"/"}> <Image src={Logo} width={150} height={20} alt="Co-Labora logo" className="rounded-md" /></Link>
      </article>
      <article className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Image src={Phone} width={32} height={20} alt="Phone-icon" />
          <p className="text-white font-poppins font-semibold pt-1">
            +52 554730 9874
          </p>
        </div>
        <div className="flex gap-2">
          <Image src={Email} width={32} height={20} alt="Phone-icon" />
          <p className="text-white font-poppins font-semibold pt-1 ">
            info@gmail.com
          </p>
        </div>
      </article>
    </section>
  );
}
