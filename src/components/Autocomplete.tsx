"use client";
import { Autocomplete } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function Payment() {
  const [autoComplete, setAutoComplete] = useState(false);
  const [place, setPlace] = useState("");

  const handleChange = () => {
    console.log("test de input");
  };

  useEffect(() => {
    setTimeout(() => {
      setAutoComplete(true);
    }, 1000);
  });

  return (
    <>
      {autoComplete ? (
        <>
          <Autocomplete onPlaceChanged={handleChange}>
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
