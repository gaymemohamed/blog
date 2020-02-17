import { InputType, Field, ID } from "type-graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class ActivateOrDeactivateArticleDto {
    @Field(type=> ID)
    article_id : string
    
    @Field()
    isActive : boolean;

}