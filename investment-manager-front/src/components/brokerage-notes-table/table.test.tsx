import BrokerageNotesTable from './index.tsx';
import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

jest.mock('../../service/useSummariesService', () => {
  return {
    useSummariesService: () => ({
      getAll: () => ({
        items: [
          {
            id: 1,
            date: '2022-06-20',
            exchange: 'Corretora Padrão',
            purchases: 1850,
            sales: 0,
            costs: 5.61,
            net: 500,
            debitOrCredit: 'DEBIT',
          },
        ],
      }),
    }),
  };
});
test('Hello world', async () => {
  render(<BrokerageNotesTable />);

  const column = await screen.findAllByText('Corretora');

  expect(column).toBeDefined();
});

describe('edit modal', () => {
  test('edit modal should not be in screen', () => {
    const { queryByTestId } = render(<BrokerageNotesTable />);
    const component = queryByTestId('brokerage-note-modal');
    expect(component).toBeNull();
  });

  test.only('should be in screen', async () => {
    const { queryByTestId } = await act(async () => render(<BrokerageNotesTable />));

    const button = screen.getByLabelText('open brokerage note modal');
    await user.click(button);
    const brokerageNoteModal = queryByTestId('brokerage-note-modal');

    expect(brokerageNoteModal).toBeDefined();
  });
});
