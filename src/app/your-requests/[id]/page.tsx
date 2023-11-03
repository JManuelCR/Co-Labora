"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function Request({ params }: any) {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState<{
    name: string;
    description: string;
    price: string;
    workTime: any;
    open: string;
    amenities: any;
    measurements: any;
    broad: string;
    location: any;
  } | null>(null);
  const [Token, setToken] = useState("");
  const [Id, setId] = useState();

  useEffect(() => {
    if (params.id) {
      fetch(`https://co-labora-backend.jmanuelc.dev/property/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setProperty(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching property:", error);
        });
    } else {
      toast.error(
        "Vaya, ocurrio un error al traer tus reservaciones, recargue la pagina",
        {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  }, [params.id]);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setId(decodedPayload.id);
    }
  }, []);
  console.log("esto es property", property);
  return (
    <>
      <Navbar page="your-spaces" />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section className="h-screen">
          <div className="p-4">
            <h1 className="font-acme text-primary text-suTitles text-center">
              Reservaciones hechas en tu espacio:
            </h1>
          </div>
          <section className="bg-gray-100 flex flex-col min-h-screen items-center">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full border border-solid border-primary text-black font-semibold">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-2">Nombre de la propiedad</th>
                    <th className="p-2">Nombre del arrendador</th>
                    <th className="p-2">Total</th>
                    <th className="p-2">Fecha de inicio</th>
                    <th className="p-2">Fecha de finalización</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-primary">
                    <td className="p-2">Propedad name</td>
                    <td className="p-2">$pago total</td>
                    <td className="p-2">Fecha de llegada</td>
                    <td className="p-2">Fecha de salida</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>
      )}
      <Footer />
    </>
  );
}
