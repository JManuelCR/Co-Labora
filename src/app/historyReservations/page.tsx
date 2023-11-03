"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";

type Property = {
  id: number;
  name: string;
  price: string;
  length: number;
  map: Function;
};

export default function HistoryReservations() {
  const [reservations, setReservations] = useState<Property[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Token = getCookie("token");
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
          setReservations(response.data.reservations);
          setLoading(false);
        });
    }
  }, []);

  return (
    <>
      <Navbar page="reservations" />
      <div className="p-4">
        <h1 className="font-acme text-primary text-suTitles text-center">
          Historial de Reservaciones:
        </h1>
      </div>
      <section className="bg-gray-100 flex flex-col min-h-screen items-center">
        {!loading && reservations && reservations.length > 0 ? (
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full border border-solid border-primary text-black font-semibold">
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
          </div>
        ) : (
          <h1 className="text-center text-primary mt-4">
            Vaya, parece que no tienes reservas hechas en este momento.
          </h1>
        )}
      </section>
      <footer className="hidden md:block">
        <Footer />
      </footer>
      <footer className="block md:hidden">
        <FooterMobile />
      </footer>
    </>
  );
}
