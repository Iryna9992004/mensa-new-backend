import { UserEntity } from './user.entity';

export abstract class UserRepository {
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract save(user: UserEntity): Promise<UserEntity>;
  abstract delete(id: string): Promise<void>;
}
