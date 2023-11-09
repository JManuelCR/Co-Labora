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

        let params = new URLSearchParams({
          address: addressInput,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        });
        const apiUrl = `${baseUrl}?${params.toString()}`;

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

              // const direction = data.results[0].formatted_address.split(",");

              const direction = {
                number: data.results[0].address_components[0].long_name,
                street: data.results[0].address_components[1].long_name,
                neighbor: data.results[0].address_components[2].long_name,
                zip: data.results[0].address_components[6].long_name,
                city: data.results[0].address_components[3].long_name,
                mapCoordinates: {
                  lat: latitud,
                  lng: longitud,
                },
              };

              props(direction); // * aqui esta lo que vamos a mandar al back
            } else {
            }
          })
          .catch((error) => {});
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
