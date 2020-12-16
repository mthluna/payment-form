import React from 'react';

import Payment from './Payment';
import Chevron from '../Chevron';

import IconCreditCard from '../../assets/svg/icon-credit-card.svg';

import CreditCard from './CreditCard';

export default () => (
  <Payment>
    <Payment.Header>
      <Payment.Back>
        <Chevron color="#fff" direction="left" />
        <Payment.BackText>
          Alterar forma de pagamento
        </Payment.BackText>
      </Payment.Back>

      <Payment.Steps mobile>
        <strong>Etapa 2</strong>
        {' '}
        de 3
      </Payment.Steps>

      <Payment.StepTitle>
        <img alt="Credit card icon" src={IconCreditCard} />
        <span>
          Adicione um novo cartão de crédito
        </span>
      </Payment.StepTitle>

      <CreditCard />
    </Payment.Header>

    <Payment.Content>
      <Payment.Steps desktop>
        <Payment.StepsItem passed>Carrinho</Payment.StepsItem>
        <Chevron color="#DE4B4B" direction="right" />
        <Payment.StepsItem>Pagamento</Payment.StepsItem>
        <Chevron color="#DE4B4B" direction="right" />
        <Payment.StepsItem>Confirmação</Payment.StepsItem>
      </Payment.Steps>
    </Payment.Content>
  </Payment>
);
