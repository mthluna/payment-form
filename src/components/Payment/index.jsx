import React, { useState } from 'react';

import Payment from './Payment';
import Chevron from '../Chevron';

import IconCreditCard from '../../assets/svg/icon-credit-card.svg';

import CreditCard from './CreditCard';
import Form from '../Form';
import colors from '../../utils/colors';

export default () => {
  const [creditCard, setCreditCard] = useState({});

  return (
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

        <CreditCard
          card={creditCard.card}
          active={creditCard.is_valid}
          number={creditCard.card_number}
          nameOnCard={creditCard.name_on_card}
          expirationDate={creditCard.expiration_date}
          cvv={creditCard.cvv}
        />
      </Payment.Header>

      <Payment.Content>
        <Payment.Steps desktop>
          <Payment.StepsItem passed>Carrinho</Payment.StepsItem>
          <Chevron color={colors.main} direction="right" />
          <Payment.StepsItem>Pagamento</Payment.StepsItem>
          <Chevron color={colors.main} direction="right" />
          <Payment.StepsItem>Confirmação</Payment.StepsItem>
        </Payment.Steps>

        <Form
          creditCard={creditCard}
          setCreditCard={setCreditCard}
        />

      </Payment.Content>
    </Payment>
  );
};
