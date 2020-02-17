import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Section } from './model/section.model';
import { CreateSectionDto } from './dto/create-section.dto';
import { SectionService } from './section.service';
import { UpdateSectionDto } from './dto/update-section.dto';

@Resolver(of=>Section)
export class SectionResolver {
    constructor(
        private readonly sectionService : SectionService
    ){}

    @Mutation(returnes => Section)
    async createSection(@Args("sectionInfo") sectionInfo : CreateSectionDto){
        return await this.sectionService.createSection(sectionInfo);
    }

    @Query(returns=> [Section])
    async getAllSections(){
        return this.sectionService.getAllSections();
    }
        
    @Mutation(returnes => Section)
    async updateSection(
        @Args("updateSectionInfo") updateSectionInfo : UpdateSectionDto){
        return await this.sectionService.updateSection(updateSectionInfo);
    }
}
