import { useEffect, useState } from "react";

type Store = {
  title: string;
  latlng: { lat: number; lng: number };
};

type KakaoMapProps = {
  selectedStore: Store | null;
  positions: Store[];
};

const KakaoMap: React.FC<KakaoMapProps> = ({ selectedStore, positions }) => {
  const [map, setMap] = useState<any>(null);
  const [infowindows, setInfowindows] = useState<any[]>([]);

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
            center: new window.kakao.maps.LatLng(37.4563, 126.7052),
            level: 7,
          };

          const mapInstance = new window.kakao.maps.Map(
            mapContainer!,
            mapOption
          );
          setMap(mapInstance);

          const newInfowindows: any[] = [];

          positions.forEach((position) => {
            const marker = new window.kakao.maps.Marker({
              map: mapInstance,
              position: new window.kakao.maps.LatLng(
                position.latlng.lat,
                position.latlng.lng
              ),
              title: position.title,
            });

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div class="p-3 mb-6 max-w-xs break-words overflow-hidden flex justify-center items-center text-center">
                  ${position.title}
                </div>`,
            });
            newInfowindows.push(infowindow);

            window.kakao.maps.event.addListener(marker, "click", () => {
              // 모든 infowindow 닫기
              newInfowindows.forEach((iw) => iw.close());
              // 클릭된 마커의 infowindow 열기
              infowindow.open(mapInstance, marker);
            });
          });

          setInfowindows(newInfowindows);

          // 지도의 click 이벤트를 등록하여 지도를 클릭할 때 모든 infowindow를 닫기
          window.kakao.maps.event.addListener(mapInstance, "click", () => {
            newInfowindows.forEach((iw) => iw.close());
          });
        });
      } else {
        console.error("카카오 지도 API를 불러오지 못했습니다");
      }
    };

    script.onerror = () => {
      console.error("카카오 지도 API 스크립트를 불러오지 못했습니다");
    };
  }, [positions]);

  useEffect(() => {
    if (map && selectedStore) {
      const moveLatLon = new window.kakao.maps.LatLng(
        selectedStore.latlng.lat,
        selectedStore.latlng.lng
      );

      (map as any).panTo(moveLatLon);
    }
  }, [map, selectedStore]);

  return <div id="map" className="w-full h-[920px]" />;
};

export default KakaoMap;
