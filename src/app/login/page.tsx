import Navbar from "@/components/Navbar"
export default function Login () {
    return(
        <>
        <Navbar page="login"/>
        <section className="flex flex-col mx-5">
            <div className="my-[74px] gap-[13px]">
              <h1 className="font-acme text-titleMobil text-blue_800">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
              <p className="font-poppins text-center text-suTitles text-blue_700">Encuentra tu espacio perfecto</p>
            </div>
            <div className="mt-[17px]">
                <input type="text" placeholder="Correo Electronico" className="flex rounded-[15px] border-2 border-primary w-full h-[65px] font-poppins text-[16px] text-blue_500 placeholder:p-[5px] placeholder:text-start"/>
            </div>
        </section>
        </>
    )
}