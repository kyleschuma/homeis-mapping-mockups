export const boxed = p => `
  align-items: ${p.align || 'start'};
  display: flex;
  flex-direction: ${p.direction === 'horizontal' ? 'row' : 'column'};
  justify-content: ${p.distribute || 'start'};
`;
