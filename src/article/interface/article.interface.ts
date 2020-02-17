import { InterfaceType, Field, ID } from "type-graphql";
import { Section } from "src/section/model/section.model";

@InterfaceType()
export abstract class ArticleInterface{
    @Field(type=>ID)
    id : string;

    @Field()
    title : string;

    @Field()
    description : string;

    @Field()
    image : string;

    @Field({nullable: true})
    isActive : boolean;

    @Field(type=> Section)
    section : Section
}