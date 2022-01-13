import { Controller, Post } from '@nestjs/common';
import { AddUser } from '../domain/users/AddUser';
import { AddUserInput } from '../domain/users/AddUserInput';
import { User } from '../domain/users/User';

export class UserData {
  constructor(readonly name: string) {}

  static from(user: User): UserData {
    return new UserData(user.name);
  }
}

@Controller()
export class AppController {
  constructor(private readonly addUser: AddUser) {}

  @Post()
  createUser(): UserData {
    const input = new AddUserInput('bruno', 35);
    const output = this.addUser.execute(input);
    return UserData.from(output);
  }
}
