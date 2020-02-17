import { InputType, Field, ID } from "type-graphql";
import { IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreateArticleDto {
    @Field()
    @IsNotEmpty()
    title : string;

    @Field()
    @IsNotEmpty()
    description : string;
    
    @Field()
    @IsNotEmpty()
    image : string;

    @Field({nullable : true})
    isActive : boolean;

    @Field(type=> ID)
    section_id : string
}