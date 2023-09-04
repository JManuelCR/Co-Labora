import Navbar from "@/components/Navbar"
export default function Login () {
    return(
        <>
        <Navbar page="login"/>
        <section className="mx-5 my-[74px] flex flex-col gap-[13px]">
            <h1 className="font-acme text-titleMobil">Bienvenido a <span className="text-primary">Co-Labora</span></h1>
            <p className="font-poppins   text-center text-suTitles">Encuentra tu espacio perfecto</p>
        </section>
        </>
    )
}