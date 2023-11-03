import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Request() {
  return (
    <>
      <Navbar page="your-spaces" />
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
      <Footer />
    </>
  );
}
