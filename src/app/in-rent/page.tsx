"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import FiltersBar from "@/components/FiltersBar";
import CardsAvailable from "@/components/CardsAvailable";
import { useState, useEffect } from "react";
export default function Rent() {
  interface Property {
    name: string;
    location: any;
    ratings: number;
    price: number;
    comments: string;
    score: Number;
    onClicked: Function;
    _id: String;
    propertyImages: string;
  }
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/property", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProperties(response.data);
        return;
      });
  }, []);
  console.log("ahora estas son las propiedades en el useState", properties);
  function handleCardClick(_id: any) {
    localStorage.setItem("selectedPropertyId", _id);
  }
  return (
    <>
      <Navbar page="in rent" />
      <section className="flex flex-col max-md:flex-wrap-reverse">
        <FiltersBar />
        <h1 className="font-acme text-titles text-blue_800 text-center">
          Espacios disponibles
        </h1>
      </section>
      <section className="flex flex-wrap gap-20 h-[100%] px-10 py-5 justify-center max-md:gap-5 ">
        {properties.map((card, index) => (
          <div key={index}>
            <CardsAvailable
              name={card.name}
              location={card.location}
              score={card.score}
              price={card.price}
              comments={card.comments}
              ratings={card.ratings}
              onClicked={() => handleCardClick(card._id)}
              image={card.propertyImages[0]}
              _id={card._id}
            />
          </div>
        ))}
      </section>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
