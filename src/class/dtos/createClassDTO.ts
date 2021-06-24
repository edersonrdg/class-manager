import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateClassDTO {
  @IsNotEmpty()
  public readonly name: string;

  @MaxLength(2)
  @IsNotEmpty()
  public readonly year: string;
}
