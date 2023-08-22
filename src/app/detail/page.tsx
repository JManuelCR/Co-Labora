import Link from "next/link";
export default function Detail() {
  return (
    <>
      <h1 className="font-Acme">It works</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/Rent"}>
        <div className="bg-primary w-10 h-10">hola</div>
        <div className="bg-secondary w-10 h-10 mt-3">hola</div>
      </Link>
    </>
  );
}
