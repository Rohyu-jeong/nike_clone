import React, { useState } from "react";
import KakaoMap from "../map/Map";

interface Store {
  title: string;
  latlng: { lat: number; lng: number };
}

const FindStore = () => {
  const [search, setSearch] = useState("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const positions: Store[] = [
    {
      title: "나이키 롯데 인천점",
      latlng: { lat: 37.4563, lng: 126.7052 },
    },
    {
      title: "나이키 송도 트리플스트리트점",
      latlng: { lat: 37.3886, lng: 126.638 },
    },
    {
      title: "나이키 만수점",
      latlng: { lat: 37.4614226509063, lng: 126.73479343045 },
    },
    {
      title: "나이키 간석점",
      latlng: { lat: 37.4609623974853, lng: 126.708031818411 },
    },
    {
      title: "나이키 LF스퀘어 인천점",
      latlng: { lat: 37.4186617681142, lng: 126.668981063463 },
    },
    {
      title: "Nike Well Collective - 부평",
      latlng: { lat: 37.493892767552, lng: 126.723469935421 },
    },
    {
      title: "나이키 스퀘어 인천",
      latlng: { lat: 37.4059981630337, lng: 126.683622060373 },
    },
  ];

  const filteredPositions = positions.filter((position) =>
    position.title.includes(search)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
  };

  return (
    <div className="w-screen h-screen flex justify-center relative">
      <div className="w-1/3 p-4 overflow-y-auto mt-16">
        <input
          type="text"
          placeholder="매장 검색"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={search}
          onChange={handleSearch}
        />
        <ul className="space-y-2">
          {filteredPositions.map((position) => (
            <li
              key={position.title}
              onClick={() => handleStoreClick(position)}
              className="cursor-pointer p-2 border-b border-gray-300 hover:bg-gray-100"
            >
              {position.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[1200px]">
        <KakaoMap selectedStore={selectedStore} positions={positions} />
      </div>
    </div>
  );
};

export default FindStore;
