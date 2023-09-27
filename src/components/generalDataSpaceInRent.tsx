import {
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import GoogleMaps from "./GoogleMaps";
import Autcomplete from "./Autocomplete";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
export default function GeneralInfo({ props }: any) {
  const { register, handleSubmit } = useForm();
  const [autocomplete, setAutoComplete] = useState();
  const [checkboxes, setCheckboxes] = useState<{
    [key: string]: boolean;
  }>({
    WiFi: false,
    Estacionamiento: false,
    "Aire acondicionado": false,
    Recepción: false,
    "Pet friendly": false,
    "Limpieza Incluida": false,
  });

  const [toolsBox, setToolBox] = useState<{
    [key: string]: boolean;
  }>({
    desarmador: false,
    extension: false,
    flexometro: false,
    taladro: false,
    brochas: false,
    caladora: false,
  });

  const handleTools = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setToolBox({
      ...toolsBox,
      [name]: checked,
    });
  };
  // console.log(toolsBox);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };
  // console.log(checkboxes);

  function childCallback(childData: any) {
    setAutoComplete(childData);
  }

  const onSubmit = (data: any) => {
    const { broad, cost, description, long, name, tall } = data;
    const toFetch = {
      name: name,
      cost: cost,
      description: description,
      measure: {
        broad: broad,
        tall: tall,
        long: long,
      },
      addons: checkboxes,
      tools: toolsBox,
      address: autocomplete,
    };
    props(toFetch);
    console.log("esta es la data de la propiedad del lado del hijo", toFetch);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full px-[20px] lg:mt-[50px] flex flex-col justify-center items-center max-w-[1440px]">
        <div className="w-full flex gap-4 xl:gap-6 items-center lg:justify-center">
          <article className="bg-secondary rounded-[25px] w-full h-fit flex flex-col items-center lg:items-start px-[30px] lg:w-[700px] xl:w-[800px] lg:flex-row gap-5">
            <div className="flex flex-col items-center gap-5">
              <h1 className="pt-[30px] font-poppins font-[500] text-[1.25rem] leading-[25px] text-center">
                ¿Cómo te encontramos?
              </h1>
              <label
                htmlFor="location"
                className="text-center text-[16px] font-[300] leading-[22px] tracking-[-0.32px]">
                Por favor ingrese la ubicación del inmueble
              </label>
              <Autcomplete props={childCallback} />
            </div>
            <div className="w-full">
              <GoogleMaps />
            </div>
          </article>
          <div className=" hidden relative w-[358px] h-[245px] lg:block  lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
            <Image
              src={`/icons/Finding-draw.svg`}
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
              src={`/icons/Imagen-negocio.svg`}
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
              className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins">
              <h1>¿Cuál es el nombre del negocio?</h1>
            </label>
            <input
              {...register("name", { required: "Campo requerido" })}
              type="text"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px] px-3"
            />
          </section>
        </div>
        <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center">
          <section className="rounded-[25px] w-full h-[144px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center lg:w-[390px]">
            <label
              htmlFor=""
              className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins">
              <h1>¿Cuánto costaría por día?</h1>
            </label>
            <input
              {...register("cost", { required: "Campo requerido" })}
              type="number"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]  px-3"
            />
          </section>
          <div className=" hidden relative w-[330px] h-[320px] lg:block top-[-40px] ">
            <Image
              src={`/icons/Costo-por-dia.svg`}
              alt=""
              className=""
              objectFit="cover"
              fill={true}
              layout="fill"
            />
          </div>
        </div>
        <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center">
          <div className=" hidden relative w-[390px] h-[330px] lg:block top-[-40px] ">
            <Image
              src={`/icons/Tamaño.svg`}
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
                className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
              />
              <span className="text-blue_700 text-center text-[24px] font-[500] leading-[25px] font-poppins">
                X
              </span>
              <input
                {...register("long", { required: "Campo requerido" })}
                type="text"
                placeholder="Largo"
                className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
              />
            </div>
            <input
              {...register("tall", { required: "Campo requerido" })}
              type="text"
              placeholder="Alto"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px] mt-[18px]"
            />
          </section>
        </div>
        <div className="w-full flex gap-4 xl:gap-[90px] items-center lg:mt-[-25px] h-auto lg:justify-center">
          <div className=" hidden relative w-[330px] h-[320px] lg:block top-[10px] ">
            <Image
              src={`/icons/Description.svg`}
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
            <label htmlFor="">
              <p className="mt-[9px] font-poppins font-[300] text-[0.625rem] leading-[1rem] text-center">
                Esto con la finalidad de que el huesped pueda conocer un poco de
                ti y de como es el negocio
              </p>
            </label>
            <input
              {...register("description", { required: "Campo requerido" })}
              type="text"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px] mt-[6px]"
            />
          </section>
        </div>
        <div className="w-full flex gap-4 xl:gap-[155px] items-center lg:mt-[-25px] h-auto lg:justify-center">
          <section className="rounded-[25px] w-full h-[460px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] lg:w-[520px] lg:h-[420]">
            <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins mt-4">
              ¿Hay algunas amenidades que se incluyen al rentar tu espacio?
            </h1>
            <div>
              <button className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins mt-4 border-2 border-primary w-[240px] ps-[20px] flex justify-between pe-[10px] py-[10px] buttonMobileShadow">
                Amenidades
                <Image
                  src={"/icons/arrow-down.svg"}
                  alt=""
                  width={26}
                  height={26}
                />
              </button>
              <div>
                <FormGroup className="border-2 border-primary max-h-[280px] w-[220px] relative left-3 px-4">
                  {Object.keys(checkboxes).map((key: string) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={checkboxes[key]}
                          onChange={handleCheck}
                          name={key}
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
              src={`/icons/Dude-sit.svg`}
              alt=""
              className=""
              objectFit="cover"
              fill={true}
              layout="fill"
            />
          </div>
        </div>
        <div className="w-full flex gap-4 xl:gap-[155px] items-center lg:mt-[-25px] h-auto lg:justify-center">
          <div className=" hidden relative w-[520px] h-[480px] lg:block top-[10px] ">
            <Image
              src={`/icons/Herramientas.svg`}
              alt=""
              className=""
              objectFit="cover"
              fill={true}
              layout="fill"
            />
          </div>
          <section className="rounded-[25px] w-full h-[450px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] mb-[54px] lg:w-[606px] lg:mt-12">
            <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins mt-4">
              ¿Hay herramientas que quisieras poner en renta igual?
            </h1>
            <div>
              <button className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins mt-4 border-2 border-primary w-[240px] ps-[20px] flex justify-between pe-[10px] py-[10px] buttonMobileShadow">
                Herramientas
                <Image
                  src={"/icons/arrow-down.svg"}
                  alt=""
                  width={26}
                  height={26}
                />
              </button>
              <div>
                <FormGroup className="border-2 border-primary max-h-[280px] w-[220px] relative left-3 px-4">
                  {Object.keys(toolsBox).map((key: string) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={toolsBox[key]}
                          onChange={handleTools}
                          name={key}
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
        </div>
      </div>
      <button
        className="bg-[transparent] p-3 text-white"
        type="submit"
        id="submit-button-data-form">
        testear info
      </button>
    </form>
  );
}
