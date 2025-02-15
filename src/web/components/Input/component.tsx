import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import { SearchIcon, StyledInput, StyledInputContainer } from './views';

export type InputProps = {
  placeholder?: string;
  value?: string;
  suppliedOnChange?: React.ChangeEventHandler<HTMLInputElement>;
  withSearchIcon?: boolean;
};

export const Input = memo(function (props: InputProps) {
  const [inputState, setInputState] = useState(props.value);
  const onChange =
    props.suppliedOnChange ??
    function (e: ChangeEvent<HTMLInputElement>) {
      setInputState(e.target.value);
    };

  useEffect(() => {
    setInputState(props.value);
  }, [props.value]);
  return (
    <StyledInputContainer tabIndex={1}>
      {props.withSearchIcon && <SearchIcon type="search" />}
      <StyledInput
        aria-label="search"
        tabIndex={1}
        value={inputState}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </StyledInputContainer>
  );
});
