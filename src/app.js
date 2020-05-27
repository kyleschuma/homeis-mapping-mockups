import { useState } from 'preact/hooks';
import {
  Aside,
  Map,
  ResortCard,
  ResortMaker,
  ResortSearch,
  Loading,
} from './components';
import resorts from './resorts';

const defaultMap = {
  center: [-120.380979, 42.877742],
  zoom: 4,
  flyTo: {
    center: [-120.380979, 42.877742],
    essential: true,
    pitch: 0,
    bearing: 0,
    zoom: 4,
  },
};

/* 
  TODO: 

  x Make sure the selected marker looks different than the rest 
  x Visually indicate when hovering over a maker 
  x Display a loading screen
  * Search, what is the best option for this need to do some research
    * Filters by state/province?
    * Filters by pass perks?
    * Filter by term, obvious
  * Display resort sections 
    * Partner resorts - directs to pre-filtered search box
      * Small subset of resorts or all?   
    * Accommodations and conveniences
  * Display resort Accommodations and conveniences on map as markers
    * May want to just display these markers and not all resorts also, or just partner resorts not sure.  

*/

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(undefined);
  const [hovering, setHovering] = useState(undefined);
  const [map, setMap] = useState(defaultMap);

  const handleSelect = resort => {
    const flyTo = resort
      ? {
          center: [resort.lng, resort.lat],
          essential: true,
          pitch: 90,
          bearing: 0,
          zoom: 8,
        }
      : defaultMap.flyTo;
    // HACK: Force the effect in the map
    // component using a the current time.
    // Fix this in the near future.
    const ts = Date.now();

    setMap({ ...map, flyTo, ts });
    setHovering(undefined);
    setSelected(resort);
  };
  const handleDeselect = () => {
    const flyTo = defaultMap.flyTo;
    // HACK: Force the effect in the map
    // component using a the current time.
    // Fix this in the near future.
    const ts = Date.now();

    setMap({ ...map, flyTo, ts });
    setSelected(undefined);
  };
  const handleHovering = resort => setHovering(resort);

  return (
    <>
      {loading && <Loading />}
      <Aside align="stretch">
        {!selected && (
          <ResortSearch
            hovering={hovering}
            resorts={resorts}
            onSelect={handleSelect}
            onHovering={handleHovering}
          />
        )}
        {selected && <ResortCard {...selected} onBack={handleDeselect} />}
      </Aside>
      <Map {...map} onLoaded={() => setLoading(false)}>
        {resorts.map(resort => (
          <ResortMaker
            hovering={hovering}
            selected={selected}
            resort={resort}
            onSelect={handleSelect}
            onHovering={handleHovering}
          />
        ))}
      </Map>
    </>
  );
}
