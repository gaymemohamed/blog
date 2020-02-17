import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Article } from './model/article.model';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/article-create.dto';
import { UpdateArticleDto } from './dto/article-update.dto';
import { ActivateOrDeactivateArticleDto } from './dto/article-activate.dto';

@Resolver(of=> Article)
export class ArticleResolver {
    constructor (
        private readonly articleService : ArticleService
    ){}

    @Mutation(returns=> Article)
    async crateArticle(@Args("ArticleInfo") articleInfo : CreateArticleDto){
        return await this.articleService.createArticle(articleInfo); 
    }

    @Mutation(returns=> Article)
    async updateSingleArticle(@Args("UpdateArticleInfo") updateArticle : UpdateArticleDto){
        return await this.articleService.updateSingleArticle(updateArticle);
    }

    @Mutation(returns=> Article)
    async activateOrDeactivateArticle(@Args("ActivateOrDeactivateArticleInfo") activateOrDeactivateArticle : ActivateOrDeactivateArticleDto){
        return await this.articleService.activateOrDeactivateArticle(activateOrDeactivateArticle);
    }

    @Mutation(returns=> Article)
    async deleteArticle(@Args("ArticleId") articleId : string){
        return await this.articleService.deleteArticle(articleId);
    }

}
