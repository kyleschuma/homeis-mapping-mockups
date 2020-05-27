import { useState } from 'preact/hooks';
import { Marker } from './map';
import styled from 'styled-components';

const Point = styled.button`
  background-color: #3e7fc1;
  width: ${p => (p.focus ? 1 : 0.75)}em;
  height: ${p => (p.focus ? 1 : 0.75)}em;
  border-radius: ${p => (p.focus ? 1 : 0.75)}em;
  box-shadow: 1px 1px 1px #85aed8;
`;
const Label = styled.span`
  color: #3e7fc1;
  display: block;
  font-size: 0.75em;
  margin-left: 1.5em;
  margin-top: -1.75em;
  position: absolute;
  width: 24em;
`;

export function ResortMaker({
  hovering,
  selected,
  resort,
  onHovering,
  onSelect,
}) {
  const handleSelect = () => onSelect(resort);
  const handleOver = () => onHovering(resort);
  const handleOut = () => onHovering(undefined);

  const focus = selected && selected.name == resort.name;
  const showLabel = hovering && hovering.name == resort.name;

  return (
    <Marker
      lat={resort.lat}
      lng={resort.lng}
      onOver={handleOver}
      onOut={handleOut}
      onSelect={handleSelect}>
      <Point focus={focus} />
      {showLabel && <Label>{resort.name}</Label>}
    </Marker>
  );
}
