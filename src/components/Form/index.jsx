import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Input from './Input';
import Select from './Select';
import Button from './Button';

import { formatPrice, largeTablet } from '../../utils';
import { getCard } from '../../utils/creditCard';

export default ({
  creditCard,
  setCreditCard,
}) => {
  const formik = useFormik({
    initialValues: {
      card_number: '',
      name_on_card: '',
      expiration_date: '',
      cvv: '',
      installments: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleBlurCardNumber = (e) => {
    const card = getCard(e.target.value);

    setCreditCard({ ...creditCard, card, is_valid: !!card });
  };

  const updateCreditCard = (e) => {
    const obj = { ...creditCard };
    obj[e.target.name] = e.target.value;

    setCreditCard(obj);
    formik.handleChange(e);
  };

  const price = 12000;
  const installments = [...Array(12)].map((value, index) => index + 1);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Row>
        <Input
          placeholder="Número do cartão"
          onBlur={handleBlurCardNumber}
          type="text"
          id="card_number"
          name="card_number"
          onChange={updateCreditCard}
          value={formik.values.card_number}
        />
      </Form.Row>
      <Form.Row>
        <Input
          placeholder="Nome (igual ao cartão)"
          type="text"
          id="name_on_card"
          name="name_on_card"
          onChange={updateCreditCard}
          value={formik.values.name_on_card}
        />
      </Form.Row>
      <Form.Row>
        <Input
          placeholder="Validade"
          type="text"
          id="expiration_date"
          name="expiration_date"
          onChange={updateCreditCard}
          value={formik.values.expiration_date}
        />
        <Input
          placeholder="CVV"
          type="number"
          id="cvv"
          name="cvv"
          onChange={updateCreditCard}
          value={formik.values.cvv}
        />
      </Form.Row>
      <Form.Row>
        <Select
          id="installments"
          name="installments"
          onChange={formik.handleChange}
          value={formik.values.installments}
        >
          <option value="">Número de parcelas</option>
          {installments.map((value) => (
            <option key={value} value={value}>
              {`${value}x R$ ${formatPrice(price / value)} sem juros`}
            </option>
          ))}
        </Select>
      </Form.Row>
      <Form.Submit right>
        <Button type="submit">Continuar</Button>
      </Form.Submit>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  justify-content: flex-end;
`;

Form.Row = styled.div`
    display: flex;
    margin-bottom: 44px;

    > *:not(:first-child) {
        margin-left: 10px;
    }
`;

Form.Submit = styled.div`
  display: flex;
  justify-content: flex-end;
  
  @media (min-width: ${largeTablet}px) {
    margin-top: 65px;
  }
`;
