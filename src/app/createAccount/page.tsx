import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"


export default function createAccount() {
    return (
        <>
            <Navbar page="createAccount" />
            <section className=" w-100% h-100% md:w-full md:h-100% flex items-center justify-center lg:mt-[212px] ">
                <section className="flex flex-col mx-5 md:w-[440px] md:h-[510px] windowXl">
                    <div className="mt-[67px] lg:my-0 gap-[13px]">
                        <h1 className="font-acme text-titleMobil text-blue_800 text-center">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
                        <p className="font-poppins text-center text-suTitles text-blue_700">Encuentra tu espacio perfecto</p>
                    </div >
                    <div className="flex justify-between text-center mt-6">
                        <div className="font-poppins text-suTitles hover:text-primary hover:underline text-blue_800">
                            <a href="">Soy Usuario</a>
                        </div>
                        <div className="font-poppins text-suTitles hover:text-primary text-blue_800 hover:underline">
                            <a href="">Soy Negocio</a>
                        </div>
                    </div>
                    <form className="mt-[30px]">
                        <input type="email" name="email" placeholder="Correo Electronico" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary required" />
                        <div className="h-[65px] relative flex items-center justify-end mt-4 ">
                           {/* <img src="icons/eye.svg" alt="Eye" className="w-8 h-8 absolute mr-3" />*/ } 
                            <img src="icons/Eye-Off.svg" alt="Eye block" className="w-8 h-8 absolute mr-3" />
                            <input type="password" name="password" placeholder="Contraseña" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary required " />
                        </div>
                        <p className="font-poppins text-small text-blue_500">Debe contener al menos un carácter especial ( @ , # , ! ) un numero y una mayúscula</p>
                        <div className="h-[65px] relative flex items-center justify-end mt-4 ">
                            {/* <img src="icons/eye.svg" alt="Eye" className="w-8 h-8 absolute mr-3" />*/ } 
                            <img src="icons/Eye-Off.svg" alt="Eye block" className="w-8 h-8 absolute mr-3" />
                            <input type="password" name="password" placeholder="Confirmar contraseña" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[10px] p-[15px] placeholder:text-start focus:outline-0 focus:border-primary required " />
                        </div>
                        <div className="flex my-3 gap-[15px]">
                            <input type="radio" name="rememberPassword" id="rememberPassword" className="accent-primary w-5 h-5 required" />
                            <p className="font-poppins text-[20px] text-blue_800 ">Recordar contraseña</p>
                        </div>
                        <div className="m-3 flex justify-center ">
                            <button className="bg-primary rounded-lg w-[200px] h-[60px]">
                                <p className="font-poppins text-suTitles text-white">Ingresa</p>
                            </button>
                        </div>
                        <div className="h-1 w-full bg-primary mb-[11px] "></div>
                        <p className="font-poppins text-[16px] text-blue_700 text-center">Al crear tu cuenta en <span className="text-primary">Co-Labora</span> aceptas los <span className="text-black">Términos y Condiciones</span> y el <span className="text-black">Aviso de privacidad</span> del servicio</p>
                    </form>
                </section>
            </section>
            <section className="md:hidden mt-[25px] " >
                <FooterMobile />
            </section>
            <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
                <Footer />
            </section>
        </>
    )
}