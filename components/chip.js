import styled from 'styled-components';

// colours used for the positive change in the image are #c2f7e1 and #006b57

export const Chip = styled.div`
  // font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.typography.l.fontSize};
  background-color: #c2f7e1;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.l}`};
  border-radius: 25px;
  min-width: 175px;
  text-align: center;
`;
