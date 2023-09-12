import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import { data } from "autoprefixer";
export default function ConfirmedReservations() {
  return (
    <>
      <Navbar page="reservations" />
      <article className="w-100% h-100% md:w-full md:h-100%">
        <article className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-titles font-acme text-blue_800 text-center">
            Tus reservas confirmadas
          </h1>
          <table className="border border-solid border-gray-300 text-blue_800 w-[1100px] max-lg:w-[800px] max-md:w-[500px] max-sm:w-[300px]">
            <thead className="font-bold">
              <tr>
                <th className="border border-solid border-secondary p-3">
                  Titulo
                </th>
                <th className="border border-solid border-secondary p-3">
                  Fecha
                </th>
                <th className="border border-solid border-secondary p-3 max-md:hidden">
                  Costo
                </th>
              </tr>
            </thead>
            <tbody className="font-semibold text-start">
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td className="border border-solid border-secondary p-3">
                    {reservation.name}
                  </td>
                  <td className="border border-solid border-secondary p-3">
                    {reservation.start_date}
                  </td>
                  <td className="border border-solid border-secondary p-3 max-md:hidden">
                    {`$ ${reservation.price}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="flex text-blue_800 font-semibold font-poppins justify-center items-center my-14 pb-[137px]">
          <button className="border border-solid border-secondary px-5 py-3">
            Anterior
          </button>
          <button className="border border-solid border-secondary px-5 py-3">
            1
          </button>
          <button className="border border-solid border-secondary px-5 py-3  max-sm:hidden">
            2
          </button>
          <button className="border border-solid border-secondary px-5 py-3 max-sm:hidden">
            3
          </button>
          <button className="border border-solid border-secondary px-5 py-3 max-sm:hidden">
            4
          </button>
          <button className="border border-solid border-secondary px-5 py-3">
            Siguiente
          </button>
        </article>
      </article>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
