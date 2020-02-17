import { InputType, Field, ID } from "type-graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class UpdateArticleDto {
    @Field(type=> ID)
    article_id : string
   
    @Field({nullable : true})
    @IsNotEmpty()
    title : string;

    @Field({nullable : true})
    @IsNotEmpty()
    description : string;
    
    @Field({nullable : true})
    @IsNotEmpty()
    image : string;

}