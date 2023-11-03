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
    length: number;
    map(
      arg0: (property: any) => import("react").JSX.Element
    ): import("react").ReactNode;
    name: string;
    description: string;
    price: string;
    workTime: any;
    open: string;
    amenities: any;
    measurements: any;
    broad: string;
    location: any;
    reservations: any;
  } | null>(null);
  const [Token, setToken] = useState("");
  const [Id, setId] = useState();

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setId(decodedPayload.id);
    }
  }, []);

  // https://co-labora-backend.jmanuelc.dev
  useEffect(() => {
    const tok = getCookie("token");
    if (params.id) {
      fetch(
        `https://co-labora-backend.jmanuelc.dev/reservation/pr/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tok}`,
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          setProperty(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching property:", error);
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
  }, [Token, params.id]);

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
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-y-auto">
              <table className="w-full border border-solid border-primary text-black font-semibold ">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-2 text-center">Nombre de la propiedad</th>
                    <th className="p-2 text-center">Nombre del arrendador</th>
                    <th className="p-2 text-center">Correo del arrendador</th>
                    <th className="p-2 text-center">Subtotal</th>
                    <th className="p-2 text-center">Fecha de inicio</th>
                    <th className="p-2 text-center">Fecha de finalización</th>
                  </tr>
                </thead>
                <tbody>
                  {property && property.length > 0 ? (
                    property.map((reservation: any) => (
                      <tr
                        key={reservation._id}
                        className="border-t border-primary"
                      >
                        <td className="p-2 text-center">
                          {reservation.property
                            ? reservation.property.propertyName
                            : ""}
                        </td>
                        <td className="p-2 text-center">
                          {reservation.tenantId
                            ? reservation.tenantId.name
                            : ""}
                        </td>
                        <td className="p-2 text-center">
                          {reservation.tenantId
                            ? reservation.tenantId.email
                            : ""}
                        </td>
                        <td className="p-2 text-center">
                          ${reservation.subtotal}
                        </td>
                        <td className="p-2 text-center w-[150px]">
                          {reservation.startDate}
                        </td>
                        <td className="p-2 text-center">
                          {reservation.endDate}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="p-2 text-center" colSpan={6}>
                        Vaya, aún no hay reservaciones
                      </td>
                    </tr>
                  )}
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
