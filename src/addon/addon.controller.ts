import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddonService } from './addon.service';
import { CreateAddonDto } from './dto/create-addon.dto';
import { UpdateAddonDto } from './dto/update-addon.dto';
import { GetQuery } from 'src/common/decorators/query.decorator';
import { IPaginationOptions } from 'src/common/utils/pagination';

@Controller('addon')
export class AddonController {
  constructor(private readonly addonService: AddonService) { }

  @Post()
  create(@Body() createAddonDto: CreateAddonDto) {
    return this.addonService.create(createAddonDto);
  }

  @Get()
  findAll(@GetQuery() query: IPaginationOptions) {
    return this.addonService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddonDto: UpdateAddonDto) {
    return this.addonService.update(+id, updateAddonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addonService.remove(+id);
  }
}
