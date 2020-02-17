import { InputType, Field, ID } from "type-graphql";
import {IsNotEmpty , IsString} from "class-validator"


@InputType()
export class UpdateSectionDto{
    @Field(type=>ID)
    id : string

    @Field({nullable:true})
    @IsNotEmpty()
    @IsString()
    name ?: string

    @Field({nullable:true}) 
    @IsNotEmpty()
    image ?: string

}