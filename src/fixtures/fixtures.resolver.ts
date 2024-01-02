import { Resolver } from '@nestjs/graphql';
import { Fixture } from 'src/entities/Fixture';

@Resolver(of => Fixture)
export class FixturesResolver {

}
