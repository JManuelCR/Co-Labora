"use client";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMaps() {
  const [map, setMap] = useState(null);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const mapContainerStyle = {
    width: "100%",
    height: "350px",
    rounded: "50px",
  };

  const defaultCenter = {
    lat: 19.427492928383778,
    lng: -99.16762632411611,
  };

  const onLoad = (map: any) => {
    setMap(map);
  };
  const inputAddress = document.getElementById("auto");
  console.log(inputAddress);

  return (
    <div className="w-auto h-auto">
      <LoadScript
        googleMapsApiKey="AIzaSyAD3TKhl38D75fORoK1ueJ3tr6KZ2MtbrE"
        libraries={["places"]}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={defaultCenter}
          zoom={15}
          onLoad={onLoad}>
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
