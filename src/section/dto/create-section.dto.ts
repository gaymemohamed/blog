import { InputType, Field } from "type-graphql";
import {IsNotEmpty , IsString} from "class-validator"


@InputType()
export class CreateSectionDto{
    @Field()
    @IsNotEmpty()
    @IsString()
    name : string

    @Field()
    @IsNotEmpty()
    image : string

}