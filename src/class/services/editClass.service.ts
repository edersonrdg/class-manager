import { Injectable } from '@nestjs/common';
import { EditClassDTO } from '../dtos/editClassDTO';

@Injectable()
export class EditClassService {
  async execute(data: EditClassDTO, id: string): Promise<void> {
    return;
  }
}
