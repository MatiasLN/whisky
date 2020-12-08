import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0aWFzbG4iLCJhIjoiY2pkazU3Y3hwMWdzdzJ4cGl2eHgzazBnYyJ9.6vua8ZFbqIRxc4g37nyChQ";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-4.376);
  const [lat, setLat] = useState(57.127);
  const [zoom, setZoom] = useState(5.69);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/matiasln/ckigb991s5eqn19s2bao2fbur",
      center: [lng, lat],
      zoom: zoom,
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
