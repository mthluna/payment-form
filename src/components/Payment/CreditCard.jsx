import React from 'react';
import styled, { css } from 'styled-components';
import { tabletBig } from '../../utils';

export default ({
  number = '**** **** **** ****',
  name = 'NOME DO TITULAR',
  date = '00/00',
}) => (
  <CreditCard>
    <CreditCard.Info>

      <CreditCard.Item type="number">
        {number.split(' ').map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{value}</span>
        ))}
      </CreditCard.Item>
      <CreditCard.Item type="name">{name}</CreditCard.Item>
      <CreditCard.Item>{date }</CreditCard.Item>
    </CreditCard.Info>
  </CreditCard>
);

const CreditCard = styled.div`
    display: flex;
    align-items: flex-end;
    width: 280px;
    height: 172px;
    padding: 0 14px 30px;
    background-image: url('/svg/credit-card.svg');
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    bottom: -75px;
    left: 50%;
    transform: translateX(-50%);

    @media (min-width: ${tabletBig}px) {
        width: 365px;
        height: 224px;
        padding: 0 25px 39px;
        position: relative;
        bottom: initial;
        left: initial;
        transform: none;
    }
`;

CreditCard.Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    row-gap: 33px;
    width: 100%;

    @media (min-width: ${tabletBig}px) {
        row-gap: 25px;
    }
`;

CreditCard.Item = styled.p`
    font-family: 'SF Pro Text';
    text-shadow: 0 1px 2px #000000B3;
    font-size: 12px;

    @media (min-width: ${tabletBig}px) {
        font-size: 16px;
    }

    ${({ type }) => type === 'number' && css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        grid-column: 1 / 3;
        margin-left: 0;
        margin-right: auto;
        font-size: 19px;
        letter-spacing: 3px;

        @media (min-width: ${tabletBig}px) {
            font-size: 24px;
            letter-spacing: 5px;
        }
    `}

    ${({ type }) => type === 'name' && css`
        margin-left:0;
        margin-right: auto;
    `}
`;
