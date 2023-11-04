"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
import Autcomplete from "../../../components/Autocomplete";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleMaps from "@/components/GoogleMaps";
import Link from "next/link";
import {
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
export default function EditProperty({ params }: any) {
  const [autocomplete, setAutoComplete] = useState();
  const { register, handleSubmit, formState } = useForm();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [Id, setId] = useState();
  const [checkboxes, setCheckboxes] = useState<{
    [key: string]: boolean;
  }>({
    Wifi: false,
    Estacionamiento: false,
    Clima: false,
    Recepcion: false,
    Pet_Friendly: false,
    Limpieza: false,
  });

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
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      setId(decodedPayload.id);
    }
  }, []);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };

  function childCallback(childData: any) {
    setAutoComplete(childData);
  }
  console.log("esto es property", property);

  const onSubmit = (data: any) => {
    const isDataChanged =
      data.name !== property?.name ||
      data.cost !== property?.price ||
      data.broad !== property?.measurements.broad ||
      data.long !== property?.measurements.long ||
      data.tall !== property?.measurements.area ||
      data.AM !== property?.workTime.open ||
      data.PM !== property?.workTime.close ||
      data.description !== property?.description;

    if (isDataChanged) {
      const { broad, cost, description, long, name, tall, AM, PM } = data;
      const toFetch = {
        userId: Id,
        name: name,
        location: autocomplete,
        price: cost,
        description: description,
        measurements: {
          width: broad,
          area: tall,
          long: long,
        },
        amenities: {
          wifi: checkboxes.Wifi,
          parking: checkboxes.Estacionamiento,
          airConditioner: checkboxes.Clima,
          reception: checkboxes.Recepcion,
          petFriendly: checkboxes.Pet_Friendly,
          cleanService: checkboxes.Limpieza,
        },
        // addOns: toolsBox,
        workTime: {
          open: AM,
          close: PM,
        },
      };
      fetch(`https://co-labora-backend.jmanuelc.dev/property/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(toFetch),
      })
        .then((response) => response.json())
        .then((response) => {
          toast.success("🦄 Propiedad actualizada!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .then(() => {
          setTimeout(() => {
            window.location.replace("/your-spaces");
          }, 2000);
        })
        .catch((error) => {
          toast.error("Vaya, parece que dejaste campos vacios", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
    } else {
      toast.warn("No realizaste ningun cambio", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Navbar page="your-spaces" />
      <section className="flex justify-center items-center text-black font-poppins border border-solid border-primary rounded-xl p-5">
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
        {loading ? ( // Muestra la pantalla de carga mientras loading es verdadero
          <p>Cargando...</p>
        ) : (
          <article className="flex flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="text-white">
              <div className="w-full px-[20px] lg:mt-[50px] flex flex-col justify-center items-center max-w-[1440px]">
                <div className="w-full flex gap-4 xl:gap-6 items-center lg:justify-center">
                  <article className="bg-secondary rounded-[25px] w-full h-fit flex flex-col items-center lg:items-start px-[30px] lg:w-[700px] xl:w-[800px] lg:flex-row gap-5">
                    <div className="flex flex-col items-center gap-5">
                      <h1 className="pt-[30px] font-poppins font-[500] text-[1.25rem] leading-[25px] text-center">
                        ¿Cómo te encontramos?
                      </h1>
                      <label
                        htmlFor="location"
                        className="text-center text-[16px] font-[300] leading-[22px] tracking-[-0.32px]"
                      >
                        Por favor ingrese la direccion con calle numero y
                        colonia
                      </label>
                      <Autcomplete props={childCallback} />
                      <p>Direccion proporcionada previamente:</p>
                      <p>
                        {property!.location.street},
                        {property!.location.neighbor}{" "}
                        {property!.location.number}
                      </p>
                    </div>
                    <div className="w-full">
                      <GoogleMaps />
                    </div>
                  </article>
                  <div className=" hidden relative w-[358px] h-[245px] lg:block  lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={"/icons/Finding-draw.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[40px] h-auto lg:justify-center">
                  <div className=" hidden relative w-[334px] h-[354px] lg:block top-[-20px] ">
                    <Image
                      src={"/icons/Imagen-negocio.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                  <section className="rounded-[25px] w-full h-[144px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center lg:w-[600px] xl:w-[800px]">
                    <label
                      htmlFor=""
                      className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins"
                    >
                      <h1>¿Cuál es el nombre del negocio?</h1>
                    </label>
                    <input
                      {...register("name", { required: "Campo requerido" })}
                      type="text"
                      defaultValue={property!.name}
                      className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px] px-3"
                    />
                  </section>
                </div>
                <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center">
                  <section className="rounded-[25px] w-full h-[144px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center lg:w-[390px]">
                    <label
                      htmlFor=""
                      className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins"
                    >
                      <h1>¿Cuánto costaría por día?</h1>
                    </label>
                    <input
                      {...register("cost", { required: "Campo requerido" })}
                      type="number"
                      defaultValue={property!.price}
                      className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]  px-3"
                    />
                  </section>
                  <div className=" hidden relative w-[330px] h-[320px] lg:block top-[-40px] ">
                    <Image
                      src={"/icons/Costo-por-dia.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center flex-wrap">
                  <div className=" hidden relative w-[390px] h-[330px] lg:block top-[-40px] ">
                    <Image
                      src={"/icons/Tamaño.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                  <section className="rounded-[25px] w-full h-[173px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center lg:w-[390px]">
                    <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins">
                      ¿Cuáles son las medidas de tu espacio?
                    </h1>
                    <p className="text-blue_700 text-center text-[14px] font-[400] leading-[25px] font-poppins">
                      en m<sup>2</sup>
                    </p>
                    <div className="flex gap-[34px] items-center">
                      <input
                        {...register("broad", { required: "Campo requerido" })}
                        type="text"
                        placeholder="Ancho"
                        defaultValue={property!.measurements.broad}
                        className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
                      />
                      <span className="text-blue_700 text-center text-[24px] font-[500] leading-[25px] font-poppins">
                        X
                      </span>
                      <input
                        {...register("long", { required: "Campo requerido" })}
                        type="text"
                        placeholder="Largo"
                        defaultValue={property!.measurements.long}
                        className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
                      />
                    </div>
                    <input
                      {...register("tall", { required: "Campo requerido" })}
                      type="text"
                      placeholder="Alto"
                      defaultValue={property!.measurements.area}
                      className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px] mt-[18px]"
                    />
                  </section>
                  <section className="gap-8 text-blue_800 font-semibold rounded-[25px] w-full h-[173px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center lg:w-[390px]">
                    <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins">
                      Cual es el horario de tu negocio?
                    </h1>
                    <div className="flex gap-5">
                      <input
                        type="time"
                        placeholder="AM"
                        defaultValue={property!.workTime.open}
                        className="border border-solid border-primary p-2 rounded-lg"
                        {...register("AM", { required: "Campo requerido" })}
                      />
                      <input
                        type="time"
                        placeholder="PM"
                        defaultValue={property!.workTime.close}
                        className="border border-solid border-primary p-2 rounded-lg"
                        {...register("PM", { required: "Campo requerido" })}
                      />
                    </div>
                  </section>
                </div>
                <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center">
                  <div className=" hidden relative w-[330px] h-[320px] lg:block top-[10px] ">
                    <Image
                      src={"/icons/Description.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                  <section className="bg-secondary rounded-[25px] w-full h-[144px] flex flex-col items-center px-[14px] mt-[42px] lg:w-[800px]">
                    <h1 className="mt-[16px] font-poppins font-[500] text-[1rem] leading-[1rem] text-center">
                      Ayúdanos dando una descripción de ti y de tu negocio
                    </h1>
                    <label htmlFor="description">
                      <p className="mt-[9px] font-poppins font-[300] text-[0.625rem] leading-[1rem] text-center">
                        Esto con la finalidad de que el huésped pueda conocer un
                        poco de ti y de cómo es el negocio
                      </p>
                    </label>
                    <textarea
                      {...register("description", {
                        required: "Campo requerido",
                      })}
                      name="description"
                      defaultValue={property!.description}
                      className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[100px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px] mt-[6px]" // Ajusta el valor 'h' para el nuevo tamaño
                    />
                  </section>
                </div>
                <div className="w-full flex gap-4 xl:gap-[155px] items-center lg:mt-[-25px] h-auto lg:justify-center">
                  <section className="rounded-[25px] w-full h-[460px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] lg:w-[520px] lg:h-[420]">
                    <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins mt-4">
                      ¿Hay algunas amenidades que se incluyen al rentar tu
                      espacio?
                    </h1>
                    <div>
                      <button className="text-blue_700 text-[18px] font-[500] leading-[25px] font-poppins mt-4 border-2 border-primary w-[240px] ps-[20px] flex justify-between pe-[10px] py-[10px] buttonMobileShadow text-center">
                        Amenidades
                      </button>
                      <div>
                        <FormGroup className="border-2 border-primary max-h-[280px] w-[220px] relative left-3 px-4">
                          {Object.keys(checkboxes).map((key: string) => (
                            <FormControlLabel
                              key={key}
                              control={
                                <Checkbox
                                  onChange={handleCheck}
                                  name={key}
                                  checked={checkboxes[key]}
                                />
                              }
                              label={key}
                              className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins"
                            />
                          ))}
                        </FormGroup>
                      </div>
                    </div>
                  </section>
                  <div className=" hidden relative w-[520px] h-[480px] lg:block top-[10px] ">
                    <Image
                      src={"/icons/Dude-sit.svg"}
                      alt=""
                      className=""
                      objectFit="cover"
                      fill={true}
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-5 my-2">
                <Link href={"/your-spaces"}>
                  <button className="rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow text-primary border-primary ">
                    Regresar
                  </button>
                </Link>
                <button
                  className="rounded-lg px-[18px] py-1 w-[134px] h-[35px] buttonMobileShadow bg-primary "
                  type="submit"
                >
                  Siguiente
                </button>
              </div>
            </form>
          </article>
        )}
      </section>
      <Footer />
          
    </>
  );
}
