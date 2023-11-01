"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { getCookie } from "cookies-next";
export default function EditProperty({ params }: any) {
  const { control, handleSubmit, reset, formState } = useForm();
  const [property, setProperty] = useState<{
    name: string;
    description: string;
    price: string;
    workTime: any;
    open: string;
    amenities: any;
    measurements: any;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const { isDirty } = formState;
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
    }
  }, [params.id]);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setToken(token);
    }
  }, []);
  console.log("esto es property", property);
  const onSubmit = (data: any) => {
    console.log("esta es la data del update", data);
    if (isDirty) {
      fetch(`https://co-labora-backend.jmanuelc.dev/property/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Propiedad editada con éxito:", response);
        })
        .catch((error) => {
          console.error("Error al editar propiedad:", error);
        });
    } else {
      console.log("No se realizaron cambios en la propiedad.");
    }
  };
  return (
    <>
      <Navbar page="EditProperty" />
      <div className="text-black font-poppins">
        <h2>Editar Propiedad</h2>
        {loading ? ( // Muestra la pantalla de carga mientras loading es verdadero
          <p>Cargando...</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Nombre de la propiedad:</label>
              <Controller
                name="name"
                control={control}
                defaultValue={property?.name || ""} // Establecer un valor predeterminado seguro
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label>Descripción:</label>
              <Controller
                name="description"
                control={control}
                defaultValue={property?.description || ""}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label>Precio:</label>
              <Controller
                name="price"
                control={control}
                defaultValue={property?.price || ""}
                render={({ field }) => <input {...field} />}
              />
            </div>
            <div>
              <label>Hora de apertura:</label>
              <Controller
                name="workTime.open"
                control={control}
                defaultValue={property?.workTime.open || ""}
                render={({ field }) => <input type="time" {...field} />}
              />
            </div>
            <div>
              <label>Hora de cierre:</label>
              <Controller
                name="workTime.close"
                control={control}
                defaultValue={property?.workTime.close || ""}
                render={({ field }) => <input type="time" {...field} />}
              />
            </div>

            <div>
              <label>Aire Acondicionado:</label>
              <Controller
                name="amenities.airConditioner"
                control={control}
                defaultValue={property?.amenities.airConditioner || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Servicio de Limpieza:</label>
              <Controller
                name="amenities.cleanService"
                control={control}
                defaultValue={property?.amenities.cleanService || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Estacionamiento:</label>
              <Controller
                name="amenities.parking"
                control={control}
                defaultValue={property?.amenities.parking || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Pet Friendly:</label>
              <Controller
                name="amenities.petFriendly"
                control={control}
                defaultValue={property?.amenities.petFriendly || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Recepción:</label>
              <Controller
                name="amenities.reception"
                control={control}
                defaultValue={property?.amenities.reception || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Wifi:</label>
              <Controller
                name="amenities.wifi"
                control={control}
                defaultValue={property?.amenities.reception || false}
                render={({ field }) => <input type="checkbox" {...field} />}
              />
            </div>
            <div>
              <label>Área (m²):</label>
              <Controller
                name="measurements.area"
                control={control}
                defaultValue={property?.measurements.area || ""}
                render={({ field }) => <input type="text" {...field} />}
              />
            </div>
            <div>
              <label>Ancho (m):</label>
              <Controller
                name="measurements.broad"
                control={control}
                defaultValue={property?.measurements.broad || ""}
                render={({ field }) => <input type="text" {...field} />}
              />
            </div>
            <div>
              <label>Largo (m):</label>
              <Controller
                name="measurements.long"
                control={control}
                defaultValue={property?.measurements.long || ""}
                render={({ field }) => <input type="text" {...field} />}
              />
            </div>

            <button type="submit">Guardar</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
