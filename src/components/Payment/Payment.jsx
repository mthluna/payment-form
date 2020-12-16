import styled, { css } from 'styled-components';

import { largeTablet } from '../../utils';
import colors from '../../utils/colors';

const contentPadding = '40px';

const Payment = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: ${contentPadding};
    background-color: #fff;

    @media (min-width: ${largeTablet}px) {
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
    background-color: ${colors.main};
    color: #fff;

    @media (min-width: ${largeTablet}px) {
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

    @media (min-width: ${largeTablet}px) {
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

    @media (min-width: ${largeTablet}px) {
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
    counter-reset: steps-counter;

    @media (min-width: ${largeTablet}px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 70px;
        color: ${colors.main};
    }

    ${({ mobile }) => mobile && css`
        @media (min-width: ${largeTablet}px) {
            display: none;
        }
    `}

    ${({ desktop }) => desktop && css`
        @media (max-width: ${largeTablet - 1}px) {
            display: none;
        }
    `}
`;

Payment.StepsItem = styled.span`
    counter-increment: steps-counter;

    &:before {
        display: inline-block;
        content: counter(steps-counter);
        margin-right: 8px;
        padding: 2px 5.6px;
        border-radius: 50%;
        border: 1px solid ${colors.main};
        font-weight: bold;
    }

    ${({ passed }) => passed && css`
        &:before {
            content: "\\2713";
            background: ${colors.main};
            color: #fff;
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

    @media (min-width: ${largeTablet}px) {
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

Payment.Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 114px;
    width: 100%;

    @media (min-width: ${largeTablet}px) {
        padding: 50px 64px 50px 168px;
    }
`;

export default Payment;
