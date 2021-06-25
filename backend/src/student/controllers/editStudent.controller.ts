import {
    Body,
    Controller,
    Param,
    Put,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { EditStudentDto } from '../dtos/editStudentDTO';
import { EditStudentService } from '../services';

@Controller('student')
export class EditStudentController {
    constructor(private readonly editStudentService: EditStudentService) {}

    @UsePipes(new ValidationPipe())
    @Put(':id')
    async handle(
        @Body() studentData: EditStudentDto,
        @Param('id') id: string,
    ): Promise<void> {
        await this.editStudentService.execute(studentData, id);
    }
}
