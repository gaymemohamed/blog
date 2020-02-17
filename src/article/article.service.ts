import { Injectable } from '@nestjs/common';
import { Article } from '@prisma/client';
import { CreateArticleDto } from './dto/article-create.dto';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { UpdateArticleDto } from './dto/article-update.dto';
import { ActivateOrDeactivateArticleDto } from './dto/article-activate.dto';

@Injectable()
export class ArticleService {
    constructor (
        private readonly prisma : PrismaClientService,
    ){}
    async createArticle(createArticle: CreateArticleDto): Promise<Article>{
        return await this.prisma.article.create({
            data:{
                title : createArticle.title,
                description : createArticle.description,
                image : createArticle.image,
                isActive: createArticle.isActive,
                section:{
                    connect : {id: createArticle.section_id}
                }
                
            },
            include:{
                section : true
            }
            
            
        })
    }

    async updateSingleArticle(updateArticle : UpdateArticleDto): Promise<Article>{
        console.log(updateArticle)
        return await this.prisma.article.update({
            where:{id : updateArticle.article_id},
            data:{
                title : updateArticle.title,
                description : updateArticle.description,
                image : updateArticle.image,
            },
            include:{
                section : true
            }
            
        })
    }

    async activateOrDeactivateArticle({ isActive, article_id } : ActivateOrDeactivateArticleDto):Promise<Article>{
        return await this.prisma.article.update({
            where:{id : article_id},
            data:{
                isActive
            },
            include:{
                section:true
            }


        })
    }

    async deleteArticle (article_id : string):Promise<Article>{
            return await this.prisma.article.delete({
            where:{id: article_id}
        })
    }
}
