import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {SectionModule} from './section/section.module'
import { ArticleModule } from './article/article.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    SectionModule,
    ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
