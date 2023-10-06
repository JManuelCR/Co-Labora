"use client";
import { Autocomplete } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function Payment({ props }: any) {
  const [autoComplete, setAutoComplete] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  useEffect(() => {
    setTimeout(() => {
      setAutoComplete(true);
    }, 1000);
  });

  const handlePlaceSelect = () => {
    if (autoComplete) {
      const input = document.getElementById("auto") as HTMLInputElement;
      if (input) {
        const addressInput = input.value;
        setSelectedPlace(addressInput);
        // console.log(address); // ! Usar directamente 'address' ya que aqui esta almacenada la direccion seleccionada
        let params = new URLSearchParams({
          address: addressInput,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        });
        const apiUrl = `${baseUrl}?${params.toString()}`;
        // console.log(apiUrl);
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error de solicitud: ${response.status} ${response.statusText}`
              );
            }
            return response.json();
          })
          .then((data) => {
            if (data.status === "OK") {
              const latitud = data.results[0].geometry.location.lat;
              const longitud = data.results[0].geometry.location.lng;
              console.log(`Latitud: ${latitud}, Longitud: ${longitud}`);
              const direction = data.results[0].formatted_address.split(",");
              console.log(direction);
              props(direction);
            } else {
              console.log(
                `No se pudo geocodificar la dirección. Estado: ${data.status} , ${data.error_message}`
              );
            }
          })
          .catch((error) => {
            console.log(`Error en la solicitud: ${error.message}`);
          });
      }
    }
  };

  return (
    <>
      {autoComplete ? (
        <>
          <Autocomplete onLoad={() => {}} onPlaceChanged={handlePlaceSelect}>
            <input
              type="text"
              className="text-blue_800 rounded-lg px-5 w-full border border-primary"
              id="auto"
            />
          </Autocomplete>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
