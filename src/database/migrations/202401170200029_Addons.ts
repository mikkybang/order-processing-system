import { Knex } from 'knex';

const tableName = 'addons';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();
    table.decimal('amount', 14, 2).notNullable();
    table.integer('meal_id').references('id').inTable('meals'); // Foreign key to the Meal table
    table.jsonb('meal_data');
    table.string('meal_addon_id').notNullable();
    table.integer('internal_profit').notNullable().defaultTo(0);
    table.string('min_selection_no').notNullable().defaultTo('0');
    table.string('meal_addon_category_id').notNullable();

    table.timestamps();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
