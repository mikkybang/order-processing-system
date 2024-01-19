import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

class AddressDetailsDTO {
  @IsString()
  city: string;

  @IsString()
  name: string;

  @IsString()
  address_line: string;

  @IsString()
  building_number: string;
}

export class CreateCalculatedOrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalAmount: number;

  @IsNotEmpty()
  freeDelivery: boolean;

  @IsNotEmpty()
  @IsNumber()
  deliveryFee: number;

  @IsNotEmpty()
  @IsNumber()
  serviceCharge: number;

  @ValidateNested()
  addressDetails: AddressDetailsDTO;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsOptional()
  @IsNumber()
  lng: number;

  @IsNotEmpty()
  coKitchenPolygonId: string;

  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  coKitchenId: string;

  @IsOptional()
  pickup: boolean;

  @IsNotEmpty()
  prevPrice: number;
}
