import { AddUser } from '../users/AddUser';
import { Repository } from '../Repository';
import { User } from '../users/User';
import { AddUserInput } from './AddUserInput';

describe('AddUser', () => {
  let repoMock: jest.Mocked<Repository<User>>;

  beforeEach(async () => {
    repoMock = {
      add: jest.fn(),
      remove: jest.fn(),
      first: jest.fn(),
      all: jest.fn(),
    };
  });

  it('should invoke repo when a new user is created', () => {
    const name = 'bruno';
    const input = new AddUserInput(name, 35);

    repoMock.add.mockImplementation(() => User.create(name, 35));

    const useCase = new AddUser(repoMock);
    const result = useCase.execute(input);
    expect(result.name).toBe(name);
  });
});
