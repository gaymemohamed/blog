import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionResolver } from './section.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [SectionService, SectionResolver],
  imports:[
    SharedModule
  ]
})
export class SectionModule {}
