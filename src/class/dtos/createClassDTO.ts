import { IsNotEmpty, ArrayMaxSize } from 'class-validator';

export class CreateClassDTO {
  @IsNotEmpty()
  public readonly name: string;

  @ArrayMaxSize(2)
  @IsNotEmpty()
  public readonly year: number;
}
