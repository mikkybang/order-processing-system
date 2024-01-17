import { Knex } from 'knex';

const tableName = 'meals';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();
    table.string('name').notNullable();
    table.string('brand_id').references('id').inTable('brands');
    table.boolean('active').notNullable();
    table.decimal('amount', 14, 2);
    table.jsonb('images');
    table.string('item_type');
    table
      .dateTime('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
