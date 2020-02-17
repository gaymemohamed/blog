import { ObjectType } from "type-graphql";
import { ArticleInterface } from "../interface/article.interface";
import { Section } from "src/section/model/section.model";

@ObjectType({implements : ArticleInterface})
export class Article implements ArticleInterface{
    id: string;
    title: string;   
    description: string;
    image: string;
    isActive: boolean;
    section: Section;

    
}