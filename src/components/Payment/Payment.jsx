import styled, { css } from 'styled-components';

import { tabletBig } from '../../utils';

const contentPadding = '40px';

const Payment = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: ${contentPadding};
    background-color: #fff;

    @media (min-width: ${tabletBig}px) {
        flex-direction: row;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 0;
    }
`;

Payment.Header = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: -${contentPadding};
    margin-bottom: 0;
    padding: ${contentPadding};
    padding-bottom: 114px;
    background-color: #DE4B4B;
    color: #fff;

    @media (min-width: ${tabletBig}px) {
        width: 352px;
        margin: 0;
        padding: 50px 15px 50px 64px;
    }
`;

Payment.Back = styled.button`
    position: absolute;
    top: 38px;
    left: 15px;
    background: none;
    border: 0;

    @media (min-width: ${tabletBig}px) {
        display: flex;
        align-items: center;
        position: static;
        align-self: flex-start;
        margin-bottom: 55px;
    }
`;

Payment.BackText = styled.span`
    display: none;
    margin-left: 10px;
    font-size: 13px;
    font-family: Verdana;
    color: #fff;

    @media (min-width: ${tabletBig}px) {
        display: inline;
    }
`;

Payment.Steps = styled.p`
    display: block;
    margin-bottom: 30px;
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-family: Verdana;
    letter-spacing: -0.01px;
    color: #fff;

    ${({ mobile }) => mobile && css`
        @media (min-width: ${tabletBig}px) {
            display: none;
        }
    `}
`;

Payment.StepTitle = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-family: Verdana;
    letter-spacing: -0.01px;
    color: #fff;

    > span {
        display: inline-block;
        width: 165px;
        margin-left: 15px;
    }

    > img {
            width: 40px;
            height: 40px;
        }

    @media (min-width: ${tabletBig}px) {
        margin-bottom: 30px;
        font-size: 20px;

        > span {
            width: 207px;
        }

        > img {
            width: 50px;
            height: 50px;
        }
    }
`;

export default Payment;
