import styled from 'styled-components';
import { Box } from './box';

export const Aside = styled(Box).attrs({ as: 'aside' })`
  background: rgba(31, 32, 33, 0.25);
  border-radius: 0.25em;
  bottom: 0.5em;
  box-shadow: 1px 1px 1px #85aed8;
  color: #fff;
  display: flex;
  left: 0.5em;
  padding: 0.5em;
  position: absolute;
  text-shadow: 1px 1px 1px #85aed8;
  top: 0.5em;
  width: 24em;
  z-index: 1;
`;
