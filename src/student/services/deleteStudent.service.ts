import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteStudentService {
  async execute(id: string): Promise<void> {
    return;
  }
}
