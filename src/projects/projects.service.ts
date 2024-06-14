import { Injectable } from '@nestjs/common';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.sevice';

@Injectable()
export class ProjectsService {

  constructor(private database: PrismaService){

  }

  //modificar create() para registrar un proyecto
  async create(projectData: Prisma.ProjectCreateInput) {
    return this.database.project.create({
      data: projectData
    });
  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
