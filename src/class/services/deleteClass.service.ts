import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteClassService {
  async execute(id: string): Promise<void> {
    return;
  }
}
