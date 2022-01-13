import { Repository } from '../Repository';
import { UseCase } from '../UseCase';
import { AddUserInput } from './AddUserInput';
import { User } from './User';

export class AddUser implements UseCase<AddUserInput, User> {
  constructor(private repo: Repository<User>) {}

  execute(input: AddUserInput): User {
    const user = input.toUser();
    const newUser = this.repo.add(user);
    return newUser;
  }
}
