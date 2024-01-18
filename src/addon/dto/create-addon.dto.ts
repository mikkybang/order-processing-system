import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAddonDto {
  @IsNotEmpty()
  mealId: number;

  @IsNotEmpty()
  mealData: Record<string, any>;

  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
