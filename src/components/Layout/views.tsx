import styled from 'styled-components';
import { palette } from '../../theme';

export const LayoutView = styled.div`
  /* Modern Css Layout Reset */
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;

  min-height: 100vh;
  min-width: 100%;
  max-width: 1024px;

  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & * {
    box-sizing: border-box;
  }
`;
