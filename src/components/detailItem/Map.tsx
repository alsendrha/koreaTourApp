import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type MapProps = {
  itemX: string;
  itemY: string;
};

const Map = ({ itemX, itemY }: MapProps) => {
  console.log(itemX);
  console.log(itemY);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const lat = Number(itemX);
  const lng = Number(itemY);

  const center = { lat: lat, lng: lng };
  return (
    <div>
      {itemX && (
        <div className="w-[500px] h-[600px]">
          {isLoaded && (
            <GoogleMap
              center={center}
              zoom={17}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                scrollwheel: true,
              }}
            >
              {/* <Marker
                  icon={{
                    url: "/images/logo1.png",
                    scaledSize: new window.google.maps.Size(40, 55),
                  }}
                  position={{ lat: Number(item.mapx), lng: Number(item.mapy) }}
                /> */}
            </GoogleMap>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
