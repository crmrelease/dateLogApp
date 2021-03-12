import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import produce from "immer";

require("dotenv").config();

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 37.577991,
  lng: 127.03727,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1200px;
  justify-content: space-between;
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 200px;
`;

const rows = [
  {
    id: 1,
    date: "2021.03.04",
    site: "카레집",
    description: "카레가 맛있는 집",
  },
  {
    id: 2,
    date: "2021.03.04",
    site: "우동집",
    description: "카레가 맛있는 집",
  },
  {
    id: 3,
    date: "2021.03.04",
    site: "우동집",
    description: "카레가 맛있는 집",
  },
  {
    id: 4,
    date: "2021.03.04",
    site: "우동집",
    description: "카레가 맛있는 집",
  },
  {
    id: 5,
    date: "2021.03.04",
    site: "우동집",
    description: "카레가 맛있는 집",
  },
];

const columns = [
  { field: "id", headerName: "순서", width: 100 },
  { field: "date", headerName: "날짜", width: 130 },
  { field: "site", headerName: "장소", width: 130 },
  {
    field: "description",
    headerName: "한줄평",
    sortable: false,
    width: 500,
  },
];

const DateMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    libraries,
  });

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  if (loadError) return "구글지도 로딩 에러";
  if (!isLoaded) return "구글지도 로딩중";

  return (
    <Wrapper>
      <GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.43, lng: -75.33 }} />
      <MapWrapper>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {markers.map((elem) => (
            <Marker
              key={elem.time.toISOString()}
              position={{ lat: elem.lat, lng: elem.lng }}
              icon={{
                url: "/duck.jpg",
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                console.log("elem", elem);
                elem.dasd = "asds";
                setSelected(elem);
              }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>우동집!</h2>
                <p>{formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </MapWrapper>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </Wrapper>
  );
};

export default DateMap;
