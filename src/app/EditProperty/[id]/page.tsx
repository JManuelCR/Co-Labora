"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { getCookie } from "cookies-next";
import SliderRent from "@/components/SliderRentDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
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
  const [Images, setImages] = useState([""]);
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
          setImages(response.data.propertyImages);
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
  console.log("esto es images", Images);
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
      <section className="flex justify-center items-center text-black font-poppins border border-solid border-primary rounded-xl p-5">
        {loading ? ( // Muestra la pantalla de carga mientras loading es verdadero
          <p>Cargando...</p>
        ) : (
          <>
            <section className="flex gap-5 flex-wrap-reverse ">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-acme text-suTitles text-slate-800">
                  Editar Propiedad
                </h2>
                <div className="flex items-center gap-5">
                  <label className="block">Nombre de la propiedad:</label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue={property?.name || ""}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="border-2 border-gray_ligth p-1 rounded-lg"
                      />
                    )}
                  />
                </div>

                <div className="flex items-center gap-5">
                  <label className="block">Descripción:</label>
                  <Controller
                    name="description"
                    control={control}
                    defaultValue={property?.description || ""}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="w-full border-2 border-gray_ligth p-2 rounded-lg"
                      />
                    )}
                  />
                </div>
                <div className="flex items-center gap-5">
                  <label className="block">Precio:</label>
                  <div className="flex">
                    <span className="text-xl self-center">$</span>
                    <Controller
                      name="price"
                      control={control}
                      defaultValue={property?.price || ""}
                      render={({ field }) => (
                        <input
                          {...field}
                          className=" text-xl border-2 border-gray_ligth p-2 rounded-lg"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex items-center space-x-4">
                    <label>Horario:</label>
                    <div className="flex space-x-4">
                      <div>
                        <label className="block">Apertura:</label>
                        <Controller
                          name="workTime.open"
                          control={control}
                          defaultValue={property?.workTime.open || ""}
                          render={({ field }) => (
                            <input
                              type="time"
                              {...field}
                              className=" border-2 border-gray-300 p-2 rounded-lg"
                            />
                          )}
                        />
                      </div>
                      <div>
                        <label className="block">Cierre:</label>
                        <Controller
                          name="workTime.close"
                          control={control}
                          defaultValue={property?.workTime.close || ""}
                          render={({ field }) => (
                            <input
                              type="time"
                              {...field}
                              className=" border-2 border-gray-300 p-2 rounded-lg"
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
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
                    defaultValue={property?.amenities.wifi || false}
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
              <article className="w-[600px]">
                <h2 className="font-acme text-suTitles text-slate-800">
                  Imagenes de tu propiedad
                </h2>
                {loading ? ( // Muestra la pantalla de carga mientras loading es verdadero
                  <p>Cargando...</p>
                ) : (
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper">
                    {Images
                      ? Images.map((act: string, index: number) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="relative w-full h-[245px] md:w-full md:h-[280px] lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
                                <Image
                                  src={act}
                                  alt="Property image"
                                  className=""
                                  objectFit="cover"
                                  fill={true}
                                  layout="fill"
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })
                      : null}
                  </Swiper>
                )}
              </article>
            </section>
          </>
        )}
      </section>

      <Footer />
    </>
  );
}
