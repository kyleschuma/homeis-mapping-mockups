import styled from 'styled-components';

import { IoIosArrowBack } from 'react-icons/io';

const BaseButton = styled.button`
  color: inherit;
  font-size: 1.5em;
  height: 2em;
  width: 2em;

  transition: 150ms;

  :active {
    transform: scale(0.8);
    opacity: 0.8;
  }

  > svg {
    vertical-align: middle;
  }
`;

const whichIcon = icon =>
  ({
    back: <IoIosArrowBack />,
  }[icon]);

export const IconButton = ({ icon, ...props }) => (
  <BaseButton {...props}>{whichIcon(icon)}</BaseButton>
);
