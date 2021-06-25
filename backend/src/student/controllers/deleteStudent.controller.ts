import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteStudentService } from '../services';

@Controller('student')
export class DeleteStudentController {
    constructor(private readonly deleteStudentService: DeleteStudentService) {}
    @Delete(':id')
    async handle(@Param('id') id: string): Promise<void> {
        await this.deleteStudentService.execute(id);
    }
}
