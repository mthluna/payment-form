import styled from 'styled-components';

import { largeTablet } from '../../utils';
import colors from '../../utils/colors';

const Button = styled.button`
    display: block;
    padding: 17px 10px;
    width: 100%;
    background: ${colors.main};
    color: #fff;
    border-radius: 10px;
    border: 0;
    text-align: center;
    font-family: 'SF Pro Text';
    text-transform: uppercase;

    @media (min-width: ${largeTablet}px) {
        width: 246px;
    }
`;

export default Button;
