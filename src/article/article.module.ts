import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [ArticleService, ArticleResolver],
  imports:[
    SharedModule
  ]
})
export class ArticleModule {}
