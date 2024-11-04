import React, { useEffect } from "react";

const KakaoMap2: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=5cced4e7c6ef38372d815551d2b8b64e&libraries=services&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          const map = new window.kakao.maps.Map(mapContainer!, mapOption);

          const geocoder = new window.kakao.maps.services.Geocoder();

          const address = "청능대로 210";
          geocoder.addressSearch(address, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              map.setCenter(coords);

              // Extract latitude and longitude
              const lat = coords.getLat();
              const lng = coords.getLng();

              // Log the coordinates in the desired format
              console.log(`좌표: { lat: ${lat}, lng: ${lng} }`);
            } else {
              console.error("Address search failed:", status);
            }
          });
        });
      }
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "800px" }} />;
};

export default KakaoMap2;
