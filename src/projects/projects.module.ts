import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { PrismaService } from 'src/prisma.sevice';

@Module({
  controllers: [ProjectsController],
  providers: [PrismaService,ProjectsService],
  exports: [PrismaService]
})
export class ProjectsModule {}
