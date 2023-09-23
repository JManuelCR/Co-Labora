import {
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Image from "next/image";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
export default function GeneralInfo() {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 19.422956105841028, lng: -99.12572032496509 }),
    []
  );
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAD3TKhl38D75fORoK1ueJ3tr6KZ2MtbrE",
    libraries: libraries as any,
  });
  if (loadError) {
    return <div>Error al cargar el mapa</div>;
  }
  return (
    <div className="w-full px-[20px] lg:mt-[50px] flex flex-col justify-center items-center max-w-[1440px]">
      <div className="w-full flex gap-4 xl:gap-6 items-center lg:justify-center">
        <article className="bg-secondary rounded-[25px] w-full h-[280px] flex flex-col items-center lg:items-start px-[30px] lg:w-[700px] xl:w-[800px] lg:flex-row ">
          <div className="flex flex-col items-center gap-5">
            <h1 className="pt-[30px] font-poppins font-[500] text-[1.25rem] leading-[25px] text-center">
              ¿Cómo te encontramos?
            </h1>
            <label
              htmlFor="location"
              className="text-center text-[16px] font-[300] leading-[22px] tracking-[-0.32px]">
              Por favor ingrese la ubicación del inmueble
            </label>

            <input type="text" />
          </div>
          <div className="flex flex-wrap rounded-lg">
            {isLoaded ? (
              <GoogleMap
                options={mapOptions}
                zoom={18}
                center={mapCenter}
                mapContainerStyle={{
                  width: "480px",
                  height: "280px",
                }}>
                <Marker position={mapCenter} />
              </GoogleMap>
            ) : (
              <strong className="text-blue_800 font-acme">
                Loading map...
              </strong>
            )}
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
            type="text"
            className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]"
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
            type="number"
            className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]"
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
              type="text"
              placeholder="Ancho"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
            />
            <span className="text-blue_700 text-center text-[24px] font-[500] leading-[25px] font-poppins">
              X
            </span>
            <input
              type="text"
              placeholder="Largo"
              className="bg-white rounded-[15px] border-[2px] border-primary w-[102px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px]"
            />
          </div>
          <input
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
                <FormControlLabel
                  control={<Checkbox />}
                  label="WiFi"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Estacionamiento"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Aire acondicionado"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Recepción"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pet friendly"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Limpieza Incluida"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
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
                <FormControlLabel
                  control={<Checkbox />}
                  label="Desarmador"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Caladora"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Llaves Inglesas"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Pinzas"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cinta métrica"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Linterna"
                  className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins "
                />
              </FormGroup>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
