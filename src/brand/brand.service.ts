import { Inject, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { ModelClass } from 'objection';
import { BrandModel } from './models/brand.model';
import { paginate, IPaginationOptions } from 'src/common/utils/pagination';

@Injectable()
export class BrandService {
  constructor(
    @Inject('BrandModel') private readonly brandModel: ModelClass<BrandModel>,
  ) { }
  create(createBrandDto: CreateBrandDto) {
    return this.brandModel.query().insert(createBrandDto);
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.brandModel.query(), query.page, query.limit);
  }

  findOne(id: number) {
    return this.brandModel.query().findById(id);
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.brandModel.query().patchAndFetchById(id, updateBrandDto).returning('*');
  }

  remove(id: number) {
    return this.brandModel.query().deleteById(id).returning('*').first();
  }
}
