import React from 'react';
import styled, { css } from 'styled-components';

export default ({ direction, color }) => (
  <Chevron color={color} direction={direction} />
);

const Chevron = styled.span`
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border-color: ${(props) => props.color};
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  transform: rotate(-45deg);
  vertical-align: top;

  ${({ direction }) => direction === 'left' && css`
    transform: rotate(-135deg);
  `}

  ${({ direction }) => direction === 'right' && css`
    transform: rotate(45deg);
  `}

  ${({ direction }) => direction === 'bottom' && css`
    transform: rotate(135deg);
  `}
`;
