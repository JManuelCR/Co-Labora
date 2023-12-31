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

  return (
    <div className="w-auto h-auto">
      <LoadScript
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
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
