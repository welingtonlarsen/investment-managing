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

const renderBrokerageNotesTable = async () => {
  return act(async () => {
    return render(<BrokerageNotesTable />);
  });
};

test('Hello world', async () => {
  await renderBrokerageNotesTable();

  const column = await screen.findAllByText('Corretora');

  expect(column).toBeDefined();
});

describe('details modal', () => {
  test('should not be in screen', async () => {
    const { queryByTestId } = await renderBrokerageNotesTable();

    const component = queryByTestId('brokerage-note-modal');

    expect(component).toBeNull();
  });

  test('should be in screen when click open button', async () => {
    const { queryByTestId } = await renderBrokerageNotesTable();

    const button = screen.getByLabelText('open brokerage note modal button');
    await user.click(button);
    const brokerageNoteModal = queryByTestId('brokerage-note-modal');

    expect(brokerageNoteModal).toBeDefined();
  });
});

describe('alert modal', () => {
  test('should not be in screen', async () => {
    const { queryByTestId } = await renderBrokerageNotesTable();

    const alertModal = queryByTestId('queryByTestId');

    expect(alertModal).toBeNull();
  });

  test('should be in screen when click delete button', async () => {
    const { queryByTestId } = await renderBrokerageNotesTable();

    const button = screen.getByLabelText('delete brokerage note button');
    await user.click(button);
    const alertModal = queryByTestId('queryByTestId');

    expect(alertModal).toBeDefined();
  });
});

describe('table elements', () => {
  beforeEach(async () => {
    await renderBrokerageNotesTable();
  });

  it.each(['Data', 'Corretora', 'Compras', 'Vendas', 'Custos', 'Líquido', 'D/C'])(
    'render all headers',
    async (header) => {
      const headerElement = screen.getByText(header);
      expect(headerElement).toBeDefined();
    },
  );

  it('render data', () => {
    const dataElement = screen.getByText('20/06/2022');
    expect(dataElement).toBeDefined();
  });

  it('render exchange', () => {
    const exchangeElement = screen.getByText('Corretora Padrão');
    expect(exchangeElement).toBeDefined();
  });

  it('render purchases', () => {
    const purchasesElement = screen.getByText('R$1,850.00');
    expect(purchasesElement).toBeDefined();
  });

  it('render sales', () => {
    const salesElement = screen.getByText('R$0.00');
    expect(salesElement).toBeDefined();
  });

  it('render costs', () => {
    const costsElement = screen.getByText('R$5.61');
    expect(costsElement).toBeDefined();
  });

  it('render net', () => {
    const netElement = screen.getByText('R$500.00');
    expect(netElement).toBeDefined();
  });

  it('render debitOrCredit', () => {
    const netElement = screen.getByText('DEBIT');
    expect(netElement).toBeDefined();
  });

  it('render open button', () => {
    const button = screen.getByLabelText('open brokerage note modal button');
    expect(button).toBeDefined();
  });

  it('render delete button', () => {
    const button = screen.getByLabelText('delete brokerage note button');
    expect(button).toBeDefined();
  });
});
