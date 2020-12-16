import React from 'react';
import styled, { css } from 'styled-components';
import { largeTablet } from '../../utils';

import eloLogo from '../../assets/images/elo.png';
import mastercardLogo from '../../assets/images/mastercard.png';
import visaLogo from '../../assets/images/visa.png';
import amexLogo from '../../assets/images/amex.png';

export default ({
  card,
  number = '**** **** **** ****',
  nameOnCard = 'NOME DO TITULAR',
  expirationDate = '00/00',
  active,
}) => {
  const getLogo = () => {
    if (card === 'elo') return eloLogo;
    if (card === 'visa') return visaLogo;
    if (card === 'amex') return amexLogo;
    if (card === 'mastercard') return mastercardLogo;

    return false;
  };

  return (
    <CreditCard active={active}>
      {active && <CreditCard.Img src={getLogo(card)} />}
      <CreditCard.Info>
        <CreditCard.Item type="number">
          {number.split(' ').map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
            <span key={index}>{value}</span>
          ))}
        </CreditCard.Item>
        <CreditCard.Item type="name">{nameOnCard}</CreditCard.Item>
        <CreditCard.Item>{expirationDate}</CreditCard.Item>
      </CreditCard.Info>
    </CreditCard>
  );
};

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

    @media (min-width: ${largeTablet}px) {
        width: 365px;
        height: 224px;
        padding: 0 25px 39px;
        position: relative;
        bottom: initial;
        left: initial;
        transform: none;
    }

    ${({ active }) => active && css`
      background-image: url('/svg/credit-card-active.svg');
    `}
`;

CreditCard.Img = styled.img`
  position: absolute;
  top: 27px;
  left: 14px;
  max-height: 25px;
  width: auto;

  @media (min-width: ${largeTablet}px) {
    top: 35px;
    left: 26px;
    max-height: 30px;
  }
`;

CreditCard.Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    row-gap: 33px;
    width: 100%;

    @media (min-width: ${largeTablet}px) {
        row-gap: 25px;
    }
`;

CreditCard.Item = styled.p`
    font-family: 'SF Pro Text';
    text-shadow: 0 1px 2px #000000B3;
    font-size: 12px;

    @media (min-width: ${largeTablet}px) {
        font-size: 16px;
    }

    ${({ type }) => type === 'number' && css`
        width: 100%;
        grid-column: 1 / 3;
        margin-left: 0;
        margin-right: auto;
        font-size: 19px;
        letter-spacing: 3px;

        @media (min-width: ${largeTablet}px) {
            font-size: 22px;
            letter-spacing: 5px;
        }

        > span {
          &:not(:first-child) {
            margin-left: 15px;

            @media (min-width: ${largeTablet}px) {
              margin-left: 10px;
            }
          }
        }
    `}

    ${({ type }) => type === 'name' && css`
        margin-left:0;
        margin-right: auto;
    `}
`;
