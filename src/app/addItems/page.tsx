import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"
import CardItems from "@/components/CardItems"
import CardReservationDetail from "@/components/CardReservationDetail"
import { dataBD } from "@/data/card-data";


export default function addItems() {
    return (
        <>
            <Navbar page="addItems" />
            <div className="mx-[76px] my-[30px] bg-secondary h-12 ">
                steper
            </div>
            <section className="mx-[27px] md: mt-36 lg:flex lg:mx-[30px] items-center 2xl:mx-96 ">
                <article className="my-[30px] flex-wrap flex gap-x-12 gap-y-[30px] spc600:gap-x-[70px] sm:gap-x-20 md:mx-[76px]  lg:gap-x-6 lg:mx-0 basis-1/2 lg:gap-y-12 lg:mt-52">
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
                <div className="basis-1/2">
                    <CardReservationDetail name={"Taller de Tapicería"} address={"calle Margarita Masa Miguel Hidalgo"} rating={4.5} opinions={60} price={650} days={4} nameItem="Taladro" priceItem={200} />

                </div>
            </section>
            <div className="mt-16 mb-5 md:mt-40 lg:flex lg:px-60 justify-between 2xl:mx-96">
                <div className="m-3 flex justify-center ">
                    <button className="bg-primary rounded-lg w-[140px] h-[45px]">
                        <p className="font-poppins text-small text-white">Siguiente</p>
                    </button>
                </div>
                <div className="m-3 flex justify-center ">
                    <button className="border-2 border-primary rounded-lg w-[140px] h-[45px]">
                        <p className="font-poppins text-small text-primary">Regresar</p>
                    </button>
                </div>
            </div>
            <section className="md:hidden mt-[25px] ">
                <FooterMobile />
            </section>
            <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
                <Footer />
            </section>
        </>
    )
}