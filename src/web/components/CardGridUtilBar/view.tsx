import styled from 'styled-components';

export const CardGridUtilBarWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-top: 64px;
  margin-bottom: 36px;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
    max-width: 860px;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    max-width: 305px;
  }
`;

export const Grouping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
    max-width: 860px;
    margin-top: 12px;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    max-width: 305px;
    margin-top: 12px;
  }
`;

export const CardGridRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px;
  margin: 0px;
  margin-top: 16px;

  @media screen and (min-width: 596px) and (max-width: 900px) {
    width: 100%;
    max-width: 860px;
    flex-direction: column;
    margin-top: 12px;
  }

  @media screen and (max-width: 595px) {
    width: 100%;
    max-width: 305px;
    flex-direction: column;
    margin-top: 12px;
    min-height: 115px;
  }
`;

export const CollectionTitle = styled.h1`
  margin-block-end: 0.25rem;
  margin-block-start: 0.25rem;
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
