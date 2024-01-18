import { Inject, Injectable } from '@nestjs/common';
import { CreateAddonDto } from './dto/create-addon.dto';
import { UpdateAddonDto } from './dto/update-addon.dto';
import { ModelClass } from 'objection';
import { AddonModel } from './models/addon.model';
import { IPaginationOptions, paginate } from 'src/common/utils/pagination';

@Injectable()
export class AddonService {
  constructor(
    @Inject('AddonModel') private readonly addonModel: ModelClass<AddonModel>,
  ) { }

  create(createAddonDto: CreateAddonDto) {
    return this.addonModel.query().insert(createAddonDto).returning('*');
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.addonModel.query(), query.page, query.limit);
  }

  findOne(id: number) {
    return this.addonModel.query().findById(id);
  }

  update(id: number, updateAddonDto: UpdateAddonDto) {
    return this.addonModel.query().patchAndFetchById(id, updateAddonDto).returning('*');
  }

  remove(id: number) {
    return this.addonModel.query().deleteById(id).returning('*').first();
  }
}
