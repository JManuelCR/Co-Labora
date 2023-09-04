import Navbar from "@/components/Navbar"
export default function Login () {
    return(
        <>
        <Navbar page="login"/>
        <section className="flex flex-col mx-5">
            <div className="my-[74px] gap-[13px]">
              <h1 className="font-acme text-titleMobil text-blue_800 text-center">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
              <p className="font-poppins text-center text-suTitles text-blue_700">Encuentra tu espacio perfecto</p>
            </div>
            <div className="mt-[17px]">
                <input type="email" name="email" placeholder="Correo Electronico" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[5px] placeholder:text-start"/>
                <input type="password" name="password" placeholder="Contraseña" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[5px] placeholder:text-start mt-5"/>
                <div className="flex mt-[50px] gap-[15px]">
                  <input type="radio" name="rememberPassword" id="rememberPassword" className="accent-primary" />
                  <p className="font-poppins text-[20px] text-blue_800 ">Recordar contraseña</p>
                </div>
            </div>
        </section>
        </>
    )
}