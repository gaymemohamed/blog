import { Injectable } from '@nestjs/common';
import { PrismaClientService } from 'src/shared/prisma.client.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './model/section.model';
import { UpdateSectionDto } from './dto/update-section.dto';

@Injectable()
export class SectionService {
    constructor (
        private readonly prisma : PrismaClientService
    ){}
    
    async createSection(sectionInfo : CreateSectionDto):Promise<Section>{
        return await this.prisma.section.create({
            data:{...sectionInfo}
        })
    }

    async getAllSections(): Promise<Section[]>{
        return await this.prisma.section.findMany({})
    }

    async updateSection( updateSection : UpdateSectionDto): Promise<Section>{
        return await this.prisma.section.update({
            where : {
                id : updateSection.id
            },
            data:{
                image : updateSection.image,
                name : updateSection.name
            }

        })
    }

}
