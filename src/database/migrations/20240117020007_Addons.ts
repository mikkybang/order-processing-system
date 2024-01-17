import { Knex } from 'knex';

const tableName = 'addons';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();
    table.decimal('amount', 14, 2).notNullable();
    table.string('meal_id').references('id').inTable('meals'); // Foreign key to the Meal table
    table.jsonb('meal_data');

    table.timestamps();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
