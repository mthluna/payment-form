import React from 'react';
import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

export default ({
  placeholder,
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
}) => (
  <Input.Group>
    <Input.Label htmlFor={id} staticLabel={!!value}>{placeholder}</Input.Label>
    <Input
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      name={name}
      value={value}
    />
  </Input.Group>
);

const Input = styled.input`
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
    border: 0;
    border-bottom: 1px solid ${colors.input};
    color: ${colors.input_text};
    font-size: 17px;

    &::placeholder {
        color: ${colors.input};
        font-family: Verdana;
    }
`;

Input.Group = styled.div`
    width: 100%;
    position: relative;
`;

Input.Label = styled.label`
    position: absolute;
    bottom: 3px;
    left: 2px;
    color: ${colors.input};
    background: #fff;
    font-size: 17px;
    font-family: Verdana;
    transition: transform 300ms ease;

    ${({ staticLabel }) => staticLabel && css`
        height: 16px;
        font-size: 13px;
        transform: translateY(-26px);
    `}

`;
