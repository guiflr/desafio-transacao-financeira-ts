// eslint-disable-next-line import/newline-after-import
import Transaction from '../models/Transaction';
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

// eslint-disable-next-line prettier/prettier
interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Group {
  income: TransactionDTO[];
  outcome: TransactionDTO[];
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  // eslint-disable-next-line class-methods-use-this
  private groupBy(list: TransactionDTO[], group: string): Group {
    const data = list?.reduce((old, current) => {
      if (!old[current[group]]) {
        old[current[group]] = [current];
      } else {
        old[current[group]].push(current);
      }
      return old;
    }, {});

    return data || [];
  }

  public getBalance(): Balance {
    const { income, outcome } = this.groupBy(this.transactions, 'type');
    const inc = income.reduce((acc, value) => acc + value.value, 0);
    const out = outcome.reduce((acc, value) => acc + value.value, 0);

    return {
      income: inc,
      outcome: out,
      total: inc - out,
    };
  }

  public getByType(type: string): Transaction[] {
    const transactions = this.transactions.filter(
      transaction => transaction.type === type,
    );

    return transactions;
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
