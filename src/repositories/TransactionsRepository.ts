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

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, value) => acc + value.value, 0);
    const outcome = this.transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((acc, value) => acc + value.value, 0);

    return {
      income,
      outcome,
      total: income - outcome,
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
