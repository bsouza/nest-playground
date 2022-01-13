import { User } from './User';

export class AddUserInput {
  constructor(readonly name: string, readonly age: number) {}

  public toUser(): User {
    return User.create(this.name, this.age);
  }
}
