import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

// eslint-disable-next-line prettier/prettier
interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    // TODO
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    const test = this.transactionsRepository.getBalance();

    console.log('sdlksldsld', test);

    return transaction;
  }
}

export default CreateTransactionService;
