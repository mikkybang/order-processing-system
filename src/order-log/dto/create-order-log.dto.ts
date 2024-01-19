import { IsNotEmpty } from 'class-validator';

export class CreateOrderLogDto {
  @IsNotEmpty()
  orderId: number;

  @IsNotEmpty()
  time: Date;

  @IsNotEmpty()
  description: string;
}
