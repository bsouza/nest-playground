import { Test, TestingModule } from '@nestjs/testing';
import { AddUser } from '../domain/users/AddUser';
import { AppController } from './app.controller';
import { Repository } from '../domain/Repository';
import { User } from '../domain/users/User';

describe('AppController', () => {
  let appController: AppController;
  let repoMock: jest.Mocked<Repository<User>>;

  beforeEach(async () => {
    repoMock = {
      add: jest.fn(),
      remove: jest.fn(),
      first: jest.fn(),
      all: jest.fn(),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AddUser,
          useFactory: () => new AddUser(repoMock),
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      repoMock.add.mockImplementation(() => User.create('Bruno', 35));
      expect(appController.createUser()).toEqual({ name: 'Bruno' });
    });
  });
});
