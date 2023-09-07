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
            <section className="mx-[27px] ">
                <article className="my-[30px] flex-wrap flex gap-x-12 gap-y-[30px] spc600:gap-x-[70px] sm:gap-x-20 md:mx-[76px] ">
                    <CardItems
                        name="Desarmador"
                        price={50}
                        iconItem="icons/Screwdriver.svg"
                    />
                    <CardItems
                        name="Extensión electrica"
                        price={20}
                        iconItem="icons/electricalServices.svg"
                    />
                     <CardItems
                        name="Flexometro"
                        price={20}
                        iconItem="icons/Flexmeter.svg"
                    />
                     <CardItems
                        name="Taladro"
                        price={200}
                        iconItem="icons/drillMachine.svg"
                    />
                    <CardItems
                        name="Cepillo para madera"
                        price={80}
                        iconItem="icons/woodPlaner.svg"
                    />
                    <CardItems
                        name="Sierra para madera"
                        price={300}
                        iconItem="icons/Jigsaw.svg"
                    />
                </article>
                <section className=" bg-gray">

                </section>
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