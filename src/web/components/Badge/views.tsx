import styled from 'styled-components';

export const Badge = styled.span<{ active?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px 20px;
  gap: 6px;
  min-width: 75px;
  height: 40px;
  background: ${(props) =>
    props.active ? '#523DF1' : 'rgba(255, 255, 255, 0.05)'};
  border-radius: 100px;
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.2px;
  color: ${(props) => (props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
`;
