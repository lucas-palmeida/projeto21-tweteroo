import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { SignUpUserDTO } from './dto/user.dto';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
    // Fazer a instanciação dos users e tweets dentro dos arrays;
  }

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(body: SignUpUserDTO) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }
}
