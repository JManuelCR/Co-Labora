import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Detail() {
  return (
    <>
    <Navbar page="contacts"/>
      <h1 className="font-Acme">It works</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/Rent"}>
        <div className="bg-primary w-10 h-10">hola</div>
        <div className="bg-secondary w-10 h-10 mt-3">hola</div>
      </Link>
      <div>
        <h2 className="decoration-solid text-primary underline">esto es un texto de prueba</h2>
      </div>
    </>
  );
}
