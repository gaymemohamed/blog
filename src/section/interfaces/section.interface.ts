import {InterfaceType, Field, ID} from 'type-graphql'


@InterfaceType()
export abstract class SectionInterface{
    @Field(type=> ID)
    id : string

    @Field()
    name : string

    @Field()
    image : string
}