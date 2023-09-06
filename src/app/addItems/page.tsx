import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"

export default function addItems() {
    return (
        <>
        <Navbar page="addItems" />
        <section className="md:hidden mt-[25px] ">
            <FooterMobile />
        </section>
        <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
            <Footer />
        </section>
        </>
    )
}