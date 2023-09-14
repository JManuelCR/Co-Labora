"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import { useState } from "react";



export default function ConfirmedReservations() {
  const [term, setTerm] = useState("");
  

  return (
    <>
      <Navbar page="reservations" />
      <article className="w-100% h-100% md:w-full md:h-100%">
        <article className="flex flex-col justify-center items-center gap-5 lg:mx-20 lg:mt-40">
          <h1 className="text-titles font-acme text-blue_800 text-center">
            Tus reservas confirmadas
          </h1>
          <table className="border border-solid border-gray-300 text-blue_800 w-[900px] max-lg:w-[600px] max-md:w-[400px] max-sm:w-[250px] m-4 sm:mx-5 md:mb-20  lg:mt-40">
            <thead className="font-bold">
              <tr>
                <th className="border border-solid border-secondary p-3">
                <input type="search" placeholder="Titulo" value={term} onChange={(e) => setTerm(e.target.value)} className="flex w-full focus:outline-0 placeholder:text-blue_500 text-center" />
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
              {reservations?.filter((reservations) => reservations.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
              .map((reservation, index) => (
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
        <article className="flex text-blue_800 font-semibold font-poppins justify-center items-center my-14 pb-[120px] lg:pb-40">
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
