export interface UserProps {
  id?: string;
  name: string;
  age: number;
}

export class User {
  readonly id?: string;
  readonly name: string;
  readonly age: number;

  private constructor({ id, name, age }: UserProps) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  static create(name: string, age: number, id?: string): User {
    const props = { id, name, age };
    return new User(props);
  }
}
