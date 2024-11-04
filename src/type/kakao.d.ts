declare namespace kakao.maps {
  class Map {
    constructor(container: HTMLElement, options: MapOptions);
    setCenter(latlng: LatLng): void;
  }

  interface MapOptions {
    center: LatLng;
    level: number;
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Marker {
    constructor(options: MarkerOptions);
    setMap(map: Map | null): void;
  }

  interface MarkerOptions {
    position: LatLng;
    map?: Map;
  }
}

interface Window {
  kakao: any;
}

// KakaoMap.tsx
type Store = {
  title: string;
  latlng: { lat: number; lng: number };
};

type KakaoMapProps = {
  selectedStore: Store | null;
};