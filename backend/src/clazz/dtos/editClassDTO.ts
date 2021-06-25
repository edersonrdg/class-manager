import { MaxLength } from 'class-validator';

export class EditClassDTO {
  public readonly name: string;

  @MaxLength(2)
  public readonly year: string;
}
