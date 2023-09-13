import {
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Image from "next/image";

export default function GeneralInfo() {
  return (
    <div className="w-full px-[20px]">
<div className="w-full flex gap-4 xl-gap-6">
<article className="bg-secondary rounded-[25px] w-full h-[280px] flex flex-col items-center px-[30px] lg:w-[600px] xl:w-[800px]">
        <h1 className="pt-[30px] font-poppins font-[500] text-[1.25rem] leading-[25px] text-center">
          ¿Cómo te encontramos?
        </h1>
        <label
          htmlFor="location"
          className="text-center text-[16px] font-[300] leading-[22px] tracking-[-0.32px]"
        >
          Por favor ingrese la ubicación del inmueble
        </label>
        <input
          id="location"
          type="text"
          className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 mt-[4px] boxShadow-details"
        />
        <div></div>
      </article>

</div>
      <section className="rounded-[25px] w-full h-[144px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center">
        <label
          htmlFor=""
          className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins"
        >
          <h1>¿Cuál es el nombre del negocio?</h1>
        </label>
        <input
          type="text"
          className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]"
        />
      </section>
      <section className="rounded-[25px] w-full h-[144px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center">
        <label
          htmlFor=""
          className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins"
        >
          <h1>¿Cuánto costaría por día?</h1>
        </label>
        <input
          type="number"
          className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details mt-[15px]"
        />
      </section>
      <section className="rounded-[25px] w-full h-[173px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] justify-center">
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
      <section className="bg-secondary rounded-[25px] w-full h-[144px] flex flex-col items-center px-[14px] mt-[42px]">
        <h1 className="mt-[16px] font-poppins font-[500] text-[1rem] leading-[1rem] text-center">
          Ayúdanos dando una descripción de ti y de tu negocio
        </h1>
        <label htmlFor="">
          <p className="mt-[9px] font-poppins font-[300] text-[0.625rem] leading-[1rem] text-center">
            Esto con la finalidad de que el huesped pueda conocer un poco de ti
            y de como es el negocio
          </p>
        </label>
        <input
          type="text"
          className="bg-white rounded-[15px] border-[2px] border-primary w-[280px] h-[30px] text-blue_700 boxShadow-details text-center font-[400] font-poppins leading-[25px] mt-[6px]"
        />
      </section>
      <section className="rounded-[25px] w-full h-[460px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px]">
        <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins mt-4">
          Hay algunas amenidades que se incluyen al rentar tu espacio?
        </h1>
        <div>
          <button className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins mt-4 border-2 border-primary w-[240px] ps-[20px] flex justify-between pe-[10px] py-[10px] buttonMobileShadow">
            Amenidades
            <Image src={"/icons/arrow-down.svg"} alt="" width={26} height={26}/>
          </button>
          <div>
          <FormGroup className="border-2 border-primary max-h-[280px] w-[220px] relative left-3 px-4">
              <FormControlLabel
                control={<Checkbox/>}
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
      <section className="rounded-[25px] w-full h-[450px] flex flex-col items-center px-[8px] border-2 border-secondary mt-[40px] mb-[54px]">
        <h1 className="text-blue_700 text-center text-[20px] font-[500] leading-[25px] font-poppins mt-4">
          Hay herramientas que quisieras poner en renta igual?
        </h1>
        <div>
          <button className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins mt-4 border-2 border-primary w-[240px] ps-[20px] flex justify-between pe-[10px] py-[10px] buttonMobileShadow">
          Herramientas
            <Image src={"/icons/arrow-down.svg"} alt="" width={26} height={26}/>
          </button>
          <div>
          <FormGroup className="border-2 border-primary max-h-[280px] w-[220px] relative left-3 px-4">
              <FormControlLabel
                control={<Checkbox/>}
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
  );
}
