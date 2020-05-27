import mapboxgl from 'mapbox-gl';
import { createContext } from 'preact';
import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import styled from 'styled-components';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const MapContext = createContext(undefined);

export function Map(props) {
  const containerRef = useRef();
  const [map, setMap] = useState(undefined);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/homeis/ckamyca8m59pj1ipj264331gv?optimize=true',
      center: props.center,
      zoom: props.zoom,
      interactive: false,
      logoPosition: 'bottom-right',
    });
    setMap(map);

    map.on('load', () => {
      console.log('loaded');
      props.onLoaded();
    });

    return () => map.remove();
  }, []);

  // HACK: Forcing the effect using a ts variable.
  // Fix this in the near future.
  useEffect(() => map && map.flyTo(props.flyTo), [props.ts]);

  return (
    <MapContext.Provider value={map}>
      <Container ref={containerRef}>{map && props.children}</Container>
    </MapContext.Provider>
  );
}

export function Marker({ children, lat, lng, onOver, onOut, onSelect }) {
  const map = useContext(MapContext);
  const el = useRef();

  useEffect(() => {
    const marker = new mapboxgl.Marker(el.current)
      .setLngLat([lng, lat])
      .addTo(map);

    return () => marker.remove();
  }, []);

  const handleSelect = () => onSelect && onSelect();
  const handleOver = () => onOver && onOver();
  const handleOut = () => onOut && onOut();

  if (map === undefined) throw 'Maker must be a child of a Map.';
  return (
    <div
      ref={el}
      onClick={handleSelect}
      onMouseOver={handleOver}
      onMouseOut={handleOut}>
      {children}
    </div>
  );
}
