import { Resolver, Query } from 'type-graphql';
import { Post } from '../entities/Posts.entity';

@Resolver()
export class HelloResolver {
  @Query(() => [Post])
  hello() {
    return 'Hello World';
  }
}
