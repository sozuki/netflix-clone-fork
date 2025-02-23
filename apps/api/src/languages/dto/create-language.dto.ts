import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLanguageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;
}
