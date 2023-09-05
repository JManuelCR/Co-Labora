import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"

export default function Login() {
    return (
        <>
            <Navbar page="login" />
            <section className=" w-100% h-100% md:w-full md:h-100% flex items-center justify-center lg:mt-[212px] ">
                <section className="flex flex-col mx-5 md:w-[440px] md:h-[510px] windowXl">
                    <div className="my-[74px] lg:my-0 gap-[15px]">
                        <h1 className="font-acme text-titleMobil text-blue_800 text-center">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
                        <p className="font-poppins text-center text-suTitles text-blue_700">Encuentra tu espacio perfecto</p>
                    </div>
                    <div className="mt-[17px]">
                        <input type="email" name="email" placeholder="Correo Electronico" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary required my-5" />
                        <input type="password" name="password" placeholder="Contraseña" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start mt-5 focus:outline-0 focus:border-primary required my-5" />
                        <div className="flex my-[50px] gap-[15px]">
                            <input type="radio" name="rememberPassword" id="rememberPassword" className="inputStyle accent-primary  w-5 h-5 required" />
                            <p className="font-poppins text-[20px] text-blue_800 ">Recordar contraseña</p>
                        </div>
                        <div className="m-16 flex justify-center">
                            <button className="bg-primary rounded-lg w-[200px] h-[60px]">
                                <p className="font-poppins text-suTitles text-white">Ingresa</p>
                            </button>
                        </div>
                    </div>
                </section>
            </section>
            <section className="md:hidden" >
              <FooterMobile/>
            </section>
            <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
              <Footer/>
            </section>
        </>
    )
}