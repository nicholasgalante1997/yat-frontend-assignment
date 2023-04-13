import styled from 'styled-components';

export const StatTileShell = styled.div`
  height: 91px;
  width: 110px;
  background: radial-gradient(
      113.75% 307.5% at 36.25% 32.5%,
      rgba(29, 27, 43, 0.4) 0%,
      rgba(9, 7, 25, 0.4) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 0px 10.8px 52.8px rgba(82, 61, 241, 0.05);
  border-radius: 16px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const StatTileHeading = styled.h6`
  font-family: 'Tusker Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: flex-end;
  text-transform: uppercase;
  color: #ffffff;
  margin-block-start: 0px;
  margin-block-end: 0.25rem;
`;

export const StatTileValue = styled.span`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 44px;
  letter-spacing: -1.5px;
  color: #ffffff;
  text-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
  align-self: flex-end;
`;
