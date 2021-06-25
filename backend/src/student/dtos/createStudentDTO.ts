import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  public readonly firstName: string;

  @IsNotEmpty()
  public readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @IsNotEmpty()
  @MaxLength(6)
  public readonly number: string;

  @IsNotEmpty()
  public readonly classId: string;
}
