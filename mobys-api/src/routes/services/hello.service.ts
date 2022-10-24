import { Injectable, Inject } from '@nestjs/common';
// Models
import { User } from '../../database/models/user.model';

@Injectable()
export class HelloService {
  async findAll(): Promise<User[]> {
    return User.findAll<User>();
  }
}
