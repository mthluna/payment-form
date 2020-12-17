import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputField from './Input';
import Select from './Select';
import Button from './Button';

import {
  formatPrice, largeTablet, testDate, post,
} from '../../utils';
import { getCard } from '../../utils/creditCard';

export default ({
  creditCard,
  setCreditCard,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      card_number: '',
      name_on_card: '',
      expiration_date: '',
      cvv: '',
      installments: '',
    },
    validationSchema: Yup.object().shape({
      card_number: Yup.string()
        .required('Número de cartão inválido')
        .test('test-card', 'Número de cartão inválido', (value) => value && !!getCard(value)),
      name_on_card: Yup.string()
        .required('Insira seu nome completo')
        .test('validate-name', 'Insira seu nome completo', (value) => value && value.split(' ').length >= 2),
      expiration_date: Yup.string('Data inválida')
        .required('Data inválida')
        .test('test-date', 'Data inválida', (value) => value && testDate(value)),
      cvv: Yup.string()
        .min(3, 'Código Inválido')
        .max(3, 'Código Inválido')
        .required('Código Inválido'),
      installments: Yup.string().required('Insira o número de parcelas'),
    }),
    onSubmit: (values) => {
      setIsLoading(true);

      post('/pagar', values)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response);
          setIsLoading(false);
        });
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
    <Form data-testid="payment-form" onSubmit={formik.handleSubmit}>
      <Form.Row>
        <InputField
          placeholder="Número do cartão"
          onBlur={handleBlurCardNumber}
          type="text"
          id="card_number"
          name="card_number"
          onChange={updateCreditCard}
          value={formik.values.card_number}
          error={formik.errors.card_number}
        />
      </Form.Row>
      <Form.Row>
        <InputField
          placeholder="Nome (igual ao cartão)"
          type="text"
          id="name_on_card"
          name="name_on_card"
          onChange={updateCreditCard}
          value={formik.values.name_on_card}
          error={formik.errors.name_on_card}
        />
      </Form.Row>
      <Form.Row>
        <InputField
          placeholder="Validade"
          type="text"
          id="expiration_date"
          name="expiration_date"
          onChange={updateCreditCard}
          value={formik.values.expiration_date}
          error={formik.errors.expiration_date}
        />
        <InputField
          placeholder="CVV"
          type="number"
          id="cvv"
          name="cvv"
          onChange={updateCreditCard}
          value={formik.values.cvv}
          error={formik.errors.cvv}
        />
      </Form.Row>
      <Form.Row>
        <Select
          id="installments"
          name="installments"
          onChange={formik.handleChange}
          value={formik.values.installments}
          error={formik.errors.installments}
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
        <Button type="submit">{isLoading ? 'ENVIANDO...' : 'CONTINUAR'}</Button>
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
