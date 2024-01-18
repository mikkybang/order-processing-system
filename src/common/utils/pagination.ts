import { QueryBuilder, Model } from "objection";

interface PaginationResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}


export async function paginate<T>(
  query: QueryBuilder<Model, T[]>,
  page: number,
  limit: number
): Promise<PaginationResponse<T>> {

  const [totalResults, results] = await Promise.all([
    query.resultSize(),
    query.offset((page - 1) * limit).limit(limit),
  ]);

  return {
    items: results,
    total: totalResults,
    page,
    limit,
  };
}
