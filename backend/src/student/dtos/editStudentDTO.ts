import { MaxLength, IsEmail } from 'class-validator';

export class EditStudentDto {
  public readonly firstName: string;

  public readonly lastName: string;

  @IsEmail()
  public readonly email: string;

  @MaxLength(6)
  public readonly number: string;
}
