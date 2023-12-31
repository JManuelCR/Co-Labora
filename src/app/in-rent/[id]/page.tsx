"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React, { useState, useEffect, useMemo, use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import CalendarMobile from "@/components/Calendar";
import Image from "next/image";
import SliderRent from "@/components/SliderRentDetail";
import { sliderRentImages } from "@/data/sliderRentData";
import CalendarDesktop from "@/components/CalendarDesktop.";
import Link from "next/link";
import { dateData } from "@/types/dateData";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

interface DataShare {
  
acc: String;
addres: String; 

comments: Number;

endDate: String;

name: String;

price: String;

propertyImages: String; 

score: Number;

startDate: String;

userId: {

}
_id: String;
}
const stars = [0, 1, 2];
interface Property {
  name: string;
  comments: string;
  description: string;
  price: string;
  noAvailabilityDays: string[];
  location: {
    city: string;
    neighbor: string;
    number: string;
    street: string;
    zip: string;
    mapCoordinates: {
      lat: number;
      lng: number;
    };
  };
  amenities: {
    wifi: boolean;
    reception: boolean;
    petFriendly: boolean;
    parking: boolean;
    cleanService: boolean;
    airConditioner: boolean;
  };
  score: number;
  measurements: {
    long: string;
    broad: string;
  };
  workTime: {
    close: string;
    open: string;
  };
  propertyImages: [string];
  userId: {
    stripe_id: String;
  };
  _id: string;
}
export default function Detail({ params }: any) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [startDate, setStartDate] = useState<String>(" ");
  const [endDate, setEndDate] = useState<String>(" ");
  const [beginning, setBeginning] = useState(0);
  const [property, setProperty] = useState<Property>({
    name: "test",
    comments: "test",
    description: "test",
    noAvailabilityDays: ['08-12-2023'],
    price: "0",
    location: {
      city: "test",
      neighbor: "test",
      number: "test",
      street: "test",
      zip: "test",
      mapCoordinates: {
        lat: 19.420831779520512,
        lng: -99.13501950384934,
      },
    },
    amenities: {
      wifi: false,
      reception: false,
      petFriendly: false,
      parking: false,
      cleanService: false,
      airConditioner: false,
    },
    score: 5,
    measurements: {
      long: "1",
      broad: "1",
    },
    workTime: {
      close: "19:00",
      open: "8:00",
    },
    propertyImages: [""],
    userId: {
      stripe_id: "",
    },
    _id: "",
  });
  useEffect(() => {
    localStorage.removeItem("property");
    if (params.id) {
      fetch(`https://co-labora-backend.jmanuelc.dev/property/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log("response", response.data)
          setProperty(response.data);
        })
        .catch((error) => {
          console.error("Error fetching property:", error);
        });
    }
  }, [params.id]);

  useEffect(() => {
    setBeginning(beginning + 1)
  }, [endDate]);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  });

  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({
      lat: property.location.mapCoordinates.lat,
      lng: property.location.mapCoordinates.lng,
    }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
    libraries: libraries as any,
  });

  const images = sliderRentImages;
  ("selectDatesDesktop");

  const passData = (e: any) => {
    if (startDate && endDate) {
      const dataToPass = {
        name: property.name,
        addres:
          property.location.street +
          property.location.number +
          property.location.neighbor,
        comments: property.comments.length,
        score: property.score,
        propertyImages: property.propertyImages[0],
        startDate: startDate,
        endDate: endDate,
        userId: property.userId,
        _id: property._id,
        price: property.price,
        acc: property.userId.stripe_id,
      };
      setDataOfReservation(dataToPass);
      window.location.replace('/BookingSteps')
    } else {
      toast.error("Selecciona fechas disponibles", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const getDates = (data: dateData) => {
    setStartDate(moment(data.startDate).format("DD-MM-YYYY"));
    setEndDate(moment(data.endDate).format("DD-MM-YYYY"));
  };

  const setDataOfReservation  = (data: DataShare) => {
     try{
      localStorage.setItem("property", JSON.stringify(data));
     }catch(err){
      window.history.back();
     }
     return
  }

  return (
    <>
      <Navbar page={"in rent"} />

      {!property ? (
        <p>Cargando...</p>
      ) : (
        <main className="lg:flex flex-col items-center">
          <ToastContainer
            position="top-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <header>
            <div className="flex flex-row w-full justify-center items-center gap-[18px]">
              <div className="relative w-[358px] h-[245px] md:w-[460px] md:h-[280px] lg:w-[520px] lg:h-[380px] xl:w-[600px] xl:h-[420px]">
                <SliderRent image={property.propertyImages} />
              </div>
              <div className="hidden lg:block lg:w-[490px] lg:h-[400px] xl:w-[528px] xl:h-[420px]">
                {!isLoaded ? (
                  <p>Loading ...</p>
                ) : (
                  <GoogleMap
                    options={mapOptions}
                    zoom={18}
                    center={{
                      lat: property.location.mapCoordinates.lat,
                      lng: property.location.mapCoordinates.lng,
                    }}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: "550px", height: "420px" }}
                    onLoad={() => console.log("Map Component Loaded...")}
                  >
                    <MarkerF
                      position={{
                        lat: property.location.mapCoordinates.lat,
                        lng: property.location.mapCoordinates.lng,
                      }}
                      onLoad={() => console.log("Marker Loaded")}
                    />
                  </GoogleMap>
                )}
              </div>
            </div>
          </header>
          <section className="w-full max-md:w-full max-xl:w-[90%] mt-[26px] flex flex-col lg:flex-row gap-[12px]  xl:px-[182px] max-xl:ps-[24px]">
            <h1 className="font-acme text-blue_800 text-[32px] md:text-[40px] font-normal tracking-[-0.8px] leading-[36px]">
              {property.name || "Lorem Ipsum"}
            </h1>
            <div className="flex flex-col lg:flex-row-reverse">
              <h2 className="font-acme text-blue_800 text-[40px] font-normal tracking-[-0.8px] leading-[36px] lg:ps-[67px]">{`$${property.price} MXN / día`}</h2>
              <article className="flex gap-[6px] xl:ps-[100px] md:ps-[24px] max-lg:mt-3">
                <div className="flex ">
                  {Array.from({ length: property.score }, (_, index) => (
                    <Image
                      src="/icons/Star-Shape.svg"
                      alt="Star"
                      width={24}
                      height={24}
                      key={index}
                    />
                  ))}
                </div>
                <div className="flex text-blue_500 font-poppins gap-1 justify-center items-center tracking-[-0.2px] leading-[22px]">
                  <span>{property.comments.length}</span>
                  <p>evaluaciones</p>
                </div>
              </article>
            </div>
          </section>
          <section className="w-full max-md:w-full flex flex-col lg:flex-row max-xl:ps-[24px] max-xl:w-[90%] xl:ps-[182px] mt-3 lg:mt-[20px]">
            <div className="w-[327px] lg:w-[453px] xl:w-[553px] max-lg:w-full max-lg:pe-[24px]">
              <span className="text-[18px] text-blue_800 font-normal font-poppins leading-[26px]">
                {property.description || "Lorem Description"}
              </span>
            </div>
            <div className="w-[328px] h-[230px] mt-[24px] mb-[27px] lg:hidden">
              {!isLoaded ? (
                <p>Loading ...</p>
              ) : (
                <GoogleMap
                  options={mapOptions}
                  zoom={14}
                  center={{
                    lat: property.location.mapCoordinates.lat,
                    lng: property.location.mapCoordinates.lng,
                  }}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ width: "328px", height: "230px" }}
                  onLoad={() => console.log("Map Component Loaded...")}
                >
                  <MarkerF
                    position={{
                      lat: property.location.mapCoordinates.lat,
                      lng: property.location.mapCoordinates.lng,
                    }}
                    onLoad={() => console.log("Marker Loaded")}
                  />
                </GoogleMap>
              )}
            </div>
            <div className="ps-[20px] lg:ps-[130px] xl:ps-[90px]">
              <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px]">
                Lo que ofrecen
              </h3>
              <ul className="max-w-[450px] flex flex-col lg:flex-row lg:gap-[32px] max-lg:gap-3">
                <div className="flex flex-col gap-3">
                  {property.amenities.airConditioner === true ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/Ice.svg"}
                        alt={"Amenity Icon Climate"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Aire acondicionado
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                  {property.amenities.petFriendly ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/paw-outline.svg"}
                        alt={"Amenity Pet Friendly Icon"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Pet friendly
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                  {property.amenities.wifi === true ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/wifi.svg"}
                        alt={"Amenity Wifi-zone Icon"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Wi-fi
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {property.amenities.reception === true ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/Person.svg"}
                        alt={"Amenity Reception For Clients Icon"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Servicio de Recepción
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                  {property.amenities.cleanService === true ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/Award.svg"}
                        alt={"Amenity Clean Service Icon"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Limpieza incluida
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                  {property.amenities.parking === true ? (
                    <li className="flex gap-[5px] items-center">
                      <Image
                        src={"/icons/car-outline.svg"}
                        alt={"Amenity parking place Icon"}
                        width={24}
                        height={24}
                      />
                      <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                        Estacionamiento
                      </p>
                    </li>
                  ) : (
                    <></>
                  )}
                </div>
              </ul>
            </div>
          </section>
          <section className=" w-full flex flex-col lg:flex-row-reverse gap-[10%] xl:gap-[61px] max-xl:w-[90%] xl:ps-[182px] lg:justify-end max-xl:ps-[24px] mt-[30px] lg:mb-[100px]">
            <div className="max-lg:ps-[20px] ">
              <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px]">
                Detalles
              </h3>
              <ul className="flex flex-col lg:flex-row gap-[14px] lg:gap-[26px] mt-[14px] lg:mt-[10px]">
                <li className="flex gap-[4px]">
                  <Image
                    src={"/icons/location.svg"}
                    alt="Pin de Localización icon"
                    width={24}
                    height={24}
                  />
                  <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                    {`${property.location.street} ${property.location.number} , ${property.location.neighbor}`}
                  </p>
                </li>
                <li className="flex gap-[4px]">
                  <Image
                    src={"/icons/Ruler.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
                  <p className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                    {`${property.measurements.long} x ${property.measurements.broad} m2`}
                  </p>
                </li>
              </ul>
              <h3 className="text-blue_700 text text-[24px] font-poppins font-[500] mb-3 tracking-[-0.48px] leading-[36px] mt-[30px] lg:mt-[14px]">
                Horario
              </h3>
              <div className="flex gap-2">
                <Image
                  src={"/icons/time-outline.svg"}
                  alt="Reloj icon"
                  width={24}
                  height={24}
                />
                <span className="font-poppins text-[18px] font-normal leading-[27px] tracking-[-0.36px] text-blue_800">
                  {`${property.workTime.open} - ${property.workTime.close}`}
                </span>
              </div>
              <div id="selectDatesDesktop" className="mt-[30px] hidden lg:flex">
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Llegada
                  </p>
                  <span
                    id="startDate"
                    className="text-black text-md font-poppins font-semibold inline-block w-full"
                  >
                    {beginning < 3 ? '' : startDate}
                  </span>
                </div>
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Salida
                  </p>
                  <span
                    id="endDate"
                    className="text-black text-md font-poppins font-semibold inline-block w-full"
                  >
                    {beginning < 3 ? '' : endDate}
                  </span>
                </div>
              </div>
              <section className="hidden w-full justify-center items-center lg:flex flex-col gap-[10px] mb-[20px] mt-[24px]">
                  <button
                    className={`bg-primary rounded-lg px-[18px] py-1 w-[400px] h-[35px] buttonMobileShadow`}
                  >
                    <button
                      className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]"
                      onClick={passData}
                    >
                      Continuar con la reserva
                    </button>
                  </button>
                <div className="flex gap-[2px]">
                  <Image
                    src={"/icons/Flag.svg"}
                    alt="Flag levantar un reporte icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-poppins text-[10px] font-normal leading-[27px] tracking-[-0.36px] text-blue_500">
                    Reporta esta publicación
                  </p>
                </div>
              </section>
              <div className="lg:hidden">
                <div className="mt-[30px] flex flex-col gap-3">
                  <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                    <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                      Llegada
                    </p>
                    <span className="text-[18px] text-blue_700 font-poppins font-normal leading-[27px] tracking-[-0.36px]">
                      <CalendarMobile />
                    </span>
                  </div>
                </div>
                <div className="mt-[30px] flex flex-col gap-3">
                  <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                    <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                      Salida
                    </p>
                    <span className="text-[18px] text-blue_700 font-poppins font-normal leading-[27px] tracking-[-0.36px]">
                      <CalendarMobile />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-[470px] h-[260px] xl:w-[580px] xl:h-[295px]">
              <div id="selectDatesDesktop" className="mt-[30px] hidden lg:flex">
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Llegada
                  </p>
                  <CalendarDesktop show={isDesktop} values={getDates} datesArray={property.noAvailabilityDays} />
                </div>
                <div className="border-2 border-blue_300 rounded-[10px] w-[220px] h-[64px] flex flex-col ps-[14px] pt-2">
                  <p className="text-[14px] text-blue_700 font-poppins font-[700] leading-[22px] tracking-[-0.28px]">
                    Salida
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full justify-center items-center flex flex-col gap-[10px] lg:hidden mb-[20px] mt-[60px]">
            <button
              className={`bg-primary rounded-lg px-[18px] py-1 w-[224px] h-[35px] buttonMobileShadow`}
            >
              <button
                className="text-[14px] font-[600] leading-[27px] text-white tracking-[-0.28px]"
                onClick={passData}
              >
                Continuar con la reserva
              </button>
            </button>
            <div className="flex gap-[2px]">
              <Image
                src={"/icons/Flag.svg"}
                alt="Flag levantar un reporte icon"
                width={20}
                height={20}
              />
              <Link href={"/contacts"}>
                <p className="font-poppins text-[10px] font-normal leading-[27px] tracking-[-0.36px] text-blue_500">
                  Reporta esta publicación
                </p>
              </Link>
            </div>
          </section>
        </main>
      )}
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
