"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import { useState } from "react";
import Link from "next/link";



export default function HistoryReservations() {
  const [term, setTerm] = useState("");
  let pageNumbers =[];
  let currentPage = 1;
  const totaldata = reservations.length;
  const dataPerPage = 8;
  let totalPages = Math.ceil(totaldata / dataPerPage);
  
 {
  //if(Number(searchParams.page) >=1 ){
    //currentPage = Number(searchParams.page)
  //}
 }

  let offset= (currentPage -1) * dataPerPage;

  for(let i = currentPage; i <= currentPage; i++){
    if(i < 1) continue;
    if(i > dataPerPage) break;
    pageNumbers.push(i);
  }

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
                <tr key={index} >
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
          <div className="justify-center flex gap-4">
            {currentPage -1 >= 1 && (
              <Link href="/confirmedReservations">{"<<"} </Link>
            )}
            {
              pageNumbers.map((page) => <Link key={page} href={`/confirmedReservations?page=${page}`}
              className={`page === currentPage ? text-secondary font-bold : ""`}
              >{page}</Link>)
            }
            {currentPage +1 <= totalPages && (
              <Link href="/confirmedReservations">{">>"} </Link>
            )}
          </div>
          
          
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
