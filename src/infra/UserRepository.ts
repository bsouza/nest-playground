import { v4 as uuidv4 } from 'uuid';

import { Repository } from '../domain/Repository';
import { User } from '../domain/users/User';

export class UserRepository implements Repository<User> {
  private users: User[] = [];

  add(t: User): User {
    const uuid = uuidv4();
    const newUser = User.create(t.name, t.age, uuid);
    this.users.push(newUser);
    return newUser;
  }

  remove(t: User): boolean {
    if (this.users.some(this.compare(t))) {
      this.users = this.users.filter(this.compare(t));
      return true;
    }

    return false;
  }

  first(): User {
    const all = this.all();
    if (all.length > 0) {
      return all[0];
    }

    return null;
  }

  all(): readonly User[] {
    return Object.freeze(this.users);
  }

  private compare = (user: User) => (u: User) => Object.is(u, user);
}
