import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"
import CardItems from "@/components/CardItems"

export default function addItems() {
    return (
        <>
        <Navbar page="addItems" />
        <div className="mx-[76px] my-[30px] bg-secondary h-12 ">
            steper
        </div>
        <section>
        <CardItems 
        name="Desarmador"
        price={50}
        iconItem="icons/Screwdriver.svg"
        />
        </section>
        <section className="md:hidden mt-[25px] ">
            <FooterMobile />
        </section>
        <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
            <Footer />
        </section>
        </>
    )
}