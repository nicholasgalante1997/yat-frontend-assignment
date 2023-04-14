import styled, { css } from 'styled-components';
import { Icon } from '../Icons';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;

  width: 354px;
  height: 37px;

  /* White/5% */
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50px;
  position: relative;
  &:hover {
    cursor: pointer;
    border: 1px solid #523df1;
    box-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
    background: inherit;
    border: none;
  }

  &:active {
    border: 1px solid #523df1;
    background: inherit;
    border: none;
  }
`;

export const SearchIcon = styled(Icon)``;

export const StyledInput = styled.input<{ padForIcon?: boolean }>`
  all: unset;
  background: none;
  border: none;
  font-family: 'Alliance No 1.';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: -0.03em;

  /* White/30% */
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    background: none;
    border: none;
  }

  &:focus {
    background: none;
    border: none;
  }

  &:focus-visible {
    background: none;
    border: none;
  }

  &:focus-within {
    background: none;
    border: none;
  }

  &:active {
    background: none;
    border: none;
  }
`;
