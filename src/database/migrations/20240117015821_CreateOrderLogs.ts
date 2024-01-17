import { Knex } from 'knex';

const tableName = 'order_logs';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();
    table.string('order_id').notNullable().references('id').inTable('orders');

    table.timestamp('time').notNullable();
    table.string('description', 255).notNullable();
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
