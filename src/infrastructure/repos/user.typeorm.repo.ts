import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from '../../domain/user/user.entity';
import { UserRepository } from '../../domain/user/user.repository';

@Injectable()
export class UserTypeOrmRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly typeOrmRepository: Repository<UserEntity>,
  ) {}
  findById(id: string): Promise<UserEntity | null> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  save(user: UserEntity): Promise<UserEntity> {
    console.log(user);
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }
}
