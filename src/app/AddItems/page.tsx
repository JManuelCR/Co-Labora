'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Star from "../../../public/icons/star-icon.webp";

interface Property {
  name: string;
  location: any;
  ratings: string;
  price: number;
  comments: string;
  score: Number;
  onClicked: Function;
  _id: String;
  propertyImages: string;
}

export default function AddItems() {
  const [property, setProperty] = useState<Property>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const propertyInfo = localStorage.getItem("property");
    const parsedInfo = JSON.parse(propertyInfo!);
    setProperty(parsedInfo);
    setIsLoading(false);
  }, []);
  // console.log(property);
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({
    screwdrivers: false,
    powerExtension: false,
    flexometer: false,
    drill: false,
    carpenterBrush: false,
    woodJigSaw: false,
  });
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };
  // console.log("toolbox", checkboxes);
  return (
    <>
      {isLoading ? (
        <p>Cargando</p>
      ) : (
        <section className="mx-[27px] md: my-10 lg:flex lg:mx-40 items-center 2xl:mx-[400px] 2xl:mb-20 lg:my-[6rem] gap-8 ">
          <article className="my-[30px] flex-wrap flex gap-x-12 gap-y-[30px] spc600:gap-x-[70px] sm:gap-x-20 md:mx-[76px]  lg:gap-x-6 lg:mx-0 basis-1/2 lg:gap-y-12 justify-center">
            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/Screwdriver.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Desarmador
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $30
              </p>
              <input
                type="checkbox"
                onChange={handleCheck}
                name="screwdrivers"
              />
            </section>
            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/electricalServices.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Extension
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $20
              </p>
              <input
                type="checkbox"
                onChange={handleCheck}
                name="powerExtension"
              />
            </section>
            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/Flexmeter.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Flexometro
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $50
              </p>
              <input type="checkbox" onChange={handleCheck} name="flexometer" />
            </section>

            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/drillMachine.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Taladro
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $200
              </p>
              <input type="checkbox" onChange={handleCheck} name="drill" />
            </section>
            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/woodPlaner.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Taladro
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $80
              </p>
              <input
                type="checkbox"
                onChange={handleCheck}
                name="carpenterBrush"
              />
            </section>
            <section className=" rounded-[10px] flex flex-col gap-2 h-[200px] justify-center text-center items-center border-2 border-primary p-4  w-32">
              <div className="w-15 h-15">
                <Image
                  src={"icons/Jigsaw.svg"}
                  width={80}
                  height={30}
                  alt="desarmador"
                />
              </div>
              <p className="font-poppins text-small text-blue_700 font-semibold leading-3">
                Sierra de madera
              </p>
              <p className="font-poppins text-small text-blue_700 font-semibold">
                $80
              </p>
              <input type="checkbox" onChange={handleCheck} name="woodJigSaw" />
            </section>
          </article>
          <div className="basis-1/2 flex items-center">
            <section>
              <section className="rounded-se-xl rounded-ss-xl p-2 bg-secondary gap-3 text-white spc600:p-8">
                <div className="flex mb-3">
                  <div className=" py-3 basis-1/2">
                    <h1 className="font-acme text-[20px]">
                      {"Lorem" || property!.name}
                    </h1>
                    <p className="font-poppins text-small">
                      {"Lorem" || property!.location}
                    </p>
                    <div className="hidden lg:flex font-poppins text-small  gap-3 ">
                      <Image
                        src={Star}
                        width={20}
                        height={20}
                        alt="sol icono"
                      />
                      <p>{"0" || property!.score}</p>
                      <p>{"0" || `(${property!.comments}valoraciones)`}</p>
                    </div>
                  </div>
                  <div className="basis-1/2 ">
                    {/* <Image
                    src={property.propertyImages}
                    width={20}
                    height={20}
                    alt="imagen de la carpinteria momentanea"
                  /> */}
                  </div>
                </div>
                <div className="h-1 w-full bg-primary mb-3"></div>
                <h2 className="font-poppins text-[16px] ">
                  Detalle de la reservación
                </h2>
                <div className="flex justify-between">
                  <p>{`${property?.price || "Precio no disponible"} MXN`}</p>
                </div>
                <h2 className="font-poppins text-[16px]  py-5">
                  Items Adicionales
                </h2>
                {/* <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="icons/Boton-Eliminar.svg"
                    alt="Boton de eliminar"
                  />
                  <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="icons/Boton-Eliminar.svg"
                    alt="Boton de eliminar"
                  />
                  <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src="icons/Boton-Eliminar.svg"
                    alt="Boton de eliminar"
                  />
                  <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
              </div> */}
                <div className="flex justify-between my-5">
                  <p>Comisión Co-Labora</p>
                  <p>$ 425.00 MXN </p>
                </div>
              </section>
              <div className="bg-white flex justify-between text-primary border-x-2 border-b-2 border-gray font-poppins text-[20px] rounded-ee-xl rounded-es-xl p-2 spc600:p-8 ">
                <p>Total (MXN) </p>
                <p>$4170.00 MXN</p>
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  );
}

// {Object.keys(checkboxes).map((key: string) => (
//   <FormControlLabel
//     key={key}
//     control={
//       <Checkbox
//         checked={checkboxes[key]}
//         onChange={handleCheck}
//         name={key}
//       />
//     }
//     label={key}
//     className="text-blue_700 text-start text-[18px] font-[500] leading-[25px] font-poppins"
//   />
// ))}
