import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type MapProps = {
  itemX: string;
  itemY: string;
};

const Map = ({ itemX, itemY }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  return (
    <div>
      {itemX && (
        <div className="w-[1000px] h-[500px]">
          {isLoaded && (
            <GoogleMap
              center={{ lat: Number(itemY), lng: Number(itemX) }}
              zoom={17}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                scrollwheel: true,
              }}
            >
              <Marker
                icon={{
                  url: "/images/markerIcon.png",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
                position={{ lat: Number(itemY), lng: Number(itemX) }}
              />
            </GoogleMap>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
