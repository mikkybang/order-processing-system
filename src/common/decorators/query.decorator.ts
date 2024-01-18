/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IPaginationOptions } from '../utils/pagination';
export const GetQuery = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query;

    const { page, limit, } = query;
    const pagination: IPaginationOptions = {
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
    };

    return pagination;
  })
