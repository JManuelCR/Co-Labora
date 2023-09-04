import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"

export default function Login(){
    return(
        <>
            <Navbar page="login" />
            <section className=" w-100% h-100% md:w-full md:h-100% flex items-center justify-center lg:mt-[212px] ">
                <section className="flex flex-col mx-5 md:w-[440px] md:h-[510px] windowXl">
                <div className="my-[67px] lg:my-0 gap-[13px]">
                        <h1 className="font-acme text-titleMobil text-blue_800 text-center">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
                        <p className="font-poppins text-center text-suTitles text-blue_700">Encuentra tu espacio perfecto</p>
                    </div>
                </section>
            </section>
        </>       
    )
}