import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const GoogleMaps: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100rem",
  };

  const defaultCenter: google.maps.LatLngLiteral = {
    lat: 19.427492928383778,
    lng: -99.16762632411611,
  };

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onPlacesChanged = () => {
    if (map) {
      const places = searchBox?.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        if (place.geometry && place.geometry.location) {
          const newPosition: google.maps.LatLngLiteral = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          };
          setMarkerPosition(newPosition);
          map.panTo(newPosition);
        }
      }
    }
  };

  let searchBox: google.maps.places.SearchBox | undefined;

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
          <StandaloneSearchBox
            onLoad={(ref) => (searchBox = ref)}
            onPlacesChanged={onPlacesChanged}>
            <input type="text" placeholder="Ingresa una ubicación" />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMaps;
