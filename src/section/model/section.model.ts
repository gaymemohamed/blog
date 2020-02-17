import { ObjectType } from "type-graphql";
import { SectionInterface } from "../interfaces/section.interface";

@ObjectType({implements : SectionInterface})
export class Section implements SectionInterface{
    id: string;   
    name: string;
    image: string;
} 