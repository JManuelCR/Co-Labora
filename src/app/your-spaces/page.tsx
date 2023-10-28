"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import Image from "next/image";
import Spaceless from "../../../public/illustrations/No-spaces.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

type Property = {
  id: number;
  name: string;
  price: string;
  length: number;
  map: Function;
};

export default function Detail() {
  const [Id, setId] = useState();
  const [properties, setProperties] = useState<Property>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = getCookie("token");
    if (getToken) {
      const [header, payload, signature] = getToken.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const userId = decodedPayload.id;

      fetch(`https://co-labora-backend.jmanuelc.dev/property/user/${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setProperties(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <Navbar page="your spaces" />
      <article className="flex h-[100%] my-10 justify-evenly  max-md:flex-col max-md:items-center max-md:gap-44">
        <section className="flex flex-col justify-between items-center border border-solid border-secondary rounded-xl w-96">
          <div>
            <h5 className="font-poppins text-suTitles text-blue_800 text-center">
              {loading ? (
                "Cargando propiedades..."
              ) : (properties ?? []).length > 0 ? (
                <p>
                  Tienes {(properties ?? []).length} propiedades dadas de alta
                  con tu cuenta
                </p>
              ) : (
                "Ninguna propiedad aún..."
              )}
            </h5>
          </div>
          <div className="p-5">
            <Link href={"/new-property"}>
              <button className="bg-primary rounded-2xl px-3 py-1 text-white font-bold">
                + Agregar
              </button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-around w-[50rem] items-center max-md:w-fit mb-28 gap-11 lg:flex-row">
          {!loading && properties && properties.length > 0 ? (
            properties.map((property: any, index: any) => (
              <article
                className="bg-white border border-primary text-black font-poppins shadow-md rounded-lg w-64 h-96"
                key={index}>
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={property.propertyImages[0]}
                    alt="imagen de propiedad"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h6 className="font-poppins text-lg font-semibold mb-2">
                    {property.name}
                  </h6>
                  <p className="text-sm">
                    {property.location.street}, {property.location.number}{" "}
                    {property.location.neighbor}
                  </p>
                  <p className="text-lg font-semibold mt-2">
                    ${property.price} costo por día
                  </p>
                  <p>Tienes {property.reservations.length} reservaciones </p>
                </div>
              </article>
            ))
          ) : !loading ? (
            <>
              <Image
                src={Spaceless}
                alt="no space image"
                width={850}
                height={680}
                className="max-md:hidden"
              />
              <h2 className="font-acme text-titles text-blue_800 max-md:text-titleMobil ">
                No has dado de alta ninguna propiedad aún. Haz clic en “Agregar
                +” para iniciar el registro de propiedad
              </h2>
            </>
          ) : null}
        </section>
      </article>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
