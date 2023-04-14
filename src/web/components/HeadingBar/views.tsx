import styled from 'styled-components';

export const HeadingBarParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 115px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 48px;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 315px;
    align-items: center;
    justify-content: space-between;
    padding-left: 0px;
    width: 100%;
  }

  @media screen and (max-width: 595px) {
    display: flex;
    flex-direction: column;
    height: 315px;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 0px;
    width: 100%;
  }
`;

export const HeadingBarImageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 115px;
  width: 50%;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
  }
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

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
  }
`;

export const HeadingBarStatTileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    flex-wrap: wrap;
    max-width: 305px;
    margin-top: 64px;
    align-self: center;
    float: center;
  }
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

  @media screen and (min-width: 596px) and (max-width: 900px) {
    max-width: 95%;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
  }
`;
