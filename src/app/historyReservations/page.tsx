"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import { useEffect, useState } from "react";
import Link from "next/link";

type Property = {
  id: number;
  name: string;
  price: string;
  length: number;
  map: Function;
};

export default function HistoryReservations() {
  const [reservations, setReservations] = useState<Property>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Token = localStorage.getItem("token");
    if (Token) {
      const [header, payload, signature] = Token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const id = decodedPayload.id;
      fetch(`https://co-labora-backend.jmanuelc.dev/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(
            "esta es la respuesta del get user by id ",
            response.data.reservations
          );
          setReservations(response.data.reservations);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      <Navbar page="reservations" />
      <section className="flex flex-col h-screen w-auto ">
        {!loading && reservations && reservations.length > 0 ? (
          <table className="m-auto w-full max-w-3xl border border-solid border-primary text-black font-semibold">
            <thead className="bg-primary text-white">
              <tr>
                <th className="p-2">Nombre de la propiedad</th>
                <th className="p-2">Total</th>
                <th className="p-2">Fecha de inicio</th>
                <th className="p-2">Fecha de finalización</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation: any, index: any) => (
                <tr key={index} className="border-t border-primary">
                  <td className="p-2">{reservation.property.propertyName}</td>
                  <td className="p-2">${reservation.total}</td>
                  <td className="p-2">{reservation.startDate}</td>
                  <td className="p-2">{reservation.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>Vaya parece que no tienes reservas hechas al momento</h1>
        )}
      </section>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
