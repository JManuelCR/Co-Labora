/* eslint-disable react/no-find-dom-node */
"use client";
import GoogleMaps from "@/components/GoogleMaps";
import { Autocomplete } from "@react-google-maps/api";
import { useState, useEffect } from "react";

export default function Payment() {
  const [autoComplete, setAutoComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAutoComplete(true);
    }, 1000);
  });

  return (
    <>
      {autoComplete ? (
        <>
          <Autocomplete>
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
      <GoogleMaps />
    </>
  );
}
