import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Bob',
      username: 'bobbbbb',
      password: 'bobpw',
    },
    {
      id: 2,
      name: 'Alicia',
      username: 'alixxxia',
      password: 'aliciapw',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
