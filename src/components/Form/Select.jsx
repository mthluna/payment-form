import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

import Chevron from '../Chevron';
import { Input } from './Input';

export default ({
  children,
  id,
  name,
  value,
  onChange,
  error,
}) => (
  <Input.Group>
    <Select.Wrapper htmlFor={id}>
      <Select empty={!value} id={id} name={name} value={value} onChange={onChange}>
        {children}
      </Select>
      <Select.Arrow>
        <Chevron sm color="#DE4B4B" direction="bottom" />
      </Select.Arrow>
    </Select.Wrapper>
    {error && <Input.Error>{error}</Input.Error>}
  </Input.Group>
);

const Select = styled.select`
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
    border: 0;
    border-bottom: 1px solid ${colors.input};
    color: ${colors.input_text};
    font-size: 17px;
    appearance:none;

    ${({ empty }) => empty && css`
        color: ${colors.input};
    `}

    > option {
        color: ${colors.input_text};
    }
`;

Select.Wrapper = styled.label`
    width: 100%;
    position: relative;
`;

Select.Arrow = styled.div`
    position: absolute;
    right: 0;
    top:0;
    pointer-events: none;
`;
