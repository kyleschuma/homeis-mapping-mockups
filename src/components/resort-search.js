import { Aside } from './aside';
import { Box } from './box';
import { TextInput } from './text-input';
import { ResortCard } from './resort-card';
import styled from 'styled-components';
import { ResortList } from './resort-list';

const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

export const ResortSearch = ({ hovering, resorts, onHovering, onSelect }) => (
  <>
    <Box as="header" align="stretch">
      <TextInput placeholder="Search..." />
    </Box>
    <ResortList
      hovering={hovering}
      resorts={resorts}
      onHovering={onHovering}
      onSelect={onSelect}
    />
  </>
);
