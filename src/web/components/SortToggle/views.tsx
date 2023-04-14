import styled from 'styled-components';

export const SortToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 80px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 40px;
`;

export const SortTab = styled.span<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  fill-opacity: ${(props) => (props.active ? 1 : 0.5)};
  background: ${(props) => (props.active ? '#523DF1' : 'none')};
  cursor: pointer;
`;
