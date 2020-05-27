import { IconButton } from './icon-button';
import { Box } from './box';

export function ResortCard({ name, onBack }) {
  return (
    <Box as="header" direction="horizontal" align="center" distribute="start">
      <IconButton icon="back" onClick={onBack} />
      <h2>{name}</h2>
    </Box>
  );
}
