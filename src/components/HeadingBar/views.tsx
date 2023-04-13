import styled from 'styled-components';

export const HeadingBarParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 115px;
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-top: 48px;

  padding-left: 64px;
`;

export const HeadingBarImageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 115px;
  width: 598px;
  justify-content: flex-start;
  align-items: center;
`;

export const HeadingBarImage = styled.img`
  height: 115px;
  width: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 2px;
`;

export const HeadingTitleContainer = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 36px;
`;

export const HeadingBarStatTileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-family: 'Alliance No 1. Bold';
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: -0.03em;
  margin-block-end: 0px;
  margin-block-start: 0px;
`;

export const Text = styled.p`
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.5);
  max-width: 75%;
`;
