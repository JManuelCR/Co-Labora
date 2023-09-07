import Image from "next/image";
import error from "../../public/illustrations/Error.svg";
export default function NotFoundPage() {
  return (
    <article className="p-10 flex flex-col justify-center">
      <section className="bg-primary flex justify-center p-10">
        <Image src={error} alt="error image" width={600} height={400} />
      </section>
      <section>
        <h1 className="font-acme text-titles text-blue_800 text-center">404</h1>
        <h2 className="font-acme text-suTitles text-blue_800 text-center">
          Ops! algo va mal
        </h2>
      </section>
    </article>
  );
}
