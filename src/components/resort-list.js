import styled from 'styled-components';
import is from 'styled-is';

const List = styled.ul`
  flex: 1;
  overflow: auto;
`;

const Item = styled.li`
  margin-top: 0.5em;
`;

const Button = styled.button`
  ${is('hovering')`  
    text-decoration: underline;
  `}
`;

export function ResortList({ hovering, resorts, onHovering, onSelect }) {
  const handleSelect = resort => () => onSelect(resort);
  const handleOver = resort => () => onHovering(resort);
  const handleOut = () => onHovering();

  return (
    <List>
      {resorts.map(resort => (
        <Item>
          <Button
            hovering={hovering && hovering.name === resort.name}
            onClick={handleSelect(resort)}
            onMouseOver={handleOver(resort)}
            onMouseOut={handleOut}>
            {resort.name}
          </Button>
        </Item>
      ))}
    </List>
  );
}
