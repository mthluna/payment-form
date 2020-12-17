import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Payment from '../components/Payment';

describe('Formulário de pagamento', () => {
  it('Deve exibir 5 erros quando enviar o formulário vazio', async () => {
    render(<Payment />);

    const form = screen.getByTestId('payment-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Número de cartão inválido')).toBeInTheDocument();
      expect(screen.getByText('Insira seu nome completo')).toBeInTheDocument();
      expect(screen.getByText('Data inválida')).toBeInTheDocument();
      expect(screen.getByText('Código Inválido')).toBeInTheDocument();
      expect(screen.getByText('Insira o número de parcelas')).toBeInTheDocument();
    });
  });

  it('Deve exibir erro quando enviar um CVV inválido', async () => {
    render(<Payment />);

    const input = screen.getByLabelText('CVV');
    userEvent.type(input, '55');

    const form = screen.getByTestId('payment-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Código Inválido')).toBeInTheDocument();
    });
  });

  it('Deve exibir erro quando não enviar o nome completo', async () => {
    render(<Payment />);

    const nameInput = screen.getByRole('textbox', { name: 'Nome (igual ao cartão)' });
    userEvent.type(nameInput, 'Matheus');

    const form = screen.getByTestId('payment-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Insira seu nome completo')).toBeInTheDocument();
    });
  });

  it('Deve exibir erro quando enviar um cartão inválido', async () => {
    render(<Payment />);

    const input = screen.getByRole('textbox', { name: 'Número do cartão' });
    userEvent.type(input, '7777 7777 7777 7777');

    const form = screen.getByTestId('payment-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Número de cartão inválido')).toBeInTheDocument();
    });
  });

  it('Deve exibir erro quando enviar uma data inválida', async () => {
    render(<Payment />);

    const input = screen.getByRole('textbox', { name: 'Validade' });
    userEvent.type(input, '06/26');

    const form = screen.getByTestId('payment-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText('Data inválida')).toBeInTheDocument();
    });
  });
});
