import styled from 'styled-components';

export const MinimalNavParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 104px;
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  background: inherit;
`;

export const MinimalNavChildContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 240px;
  height: 48px;
  background: inherit;
`;

export const MinimalNavButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
`;
