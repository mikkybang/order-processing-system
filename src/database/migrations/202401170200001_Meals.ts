import { Knex } from 'knex';

const tableName = 'meals';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();
    table.string('name').notNullable();
    table.integer('brand_id').references('id').inTable('brands');
    table.boolean('active').notNullable();
    table.decimal('amount', 14, 2);
    table.jsonb('images').defaultTo([]);
    table.string('item_type');
    table.boolean('alcohol').defaultTo(false);
    table.string('item_no').nullable();
    table.string('summary').nullable();
    table.string('calories').notNullable().defaultTo('');
    table.boolean('is_addon').notNullable().defaultTo(false);
    table.boolean('is_combo').notNullable().defaultTo(false);
    table.integer('position').notNullable();
    table.integer('quantity').notNullable();
    table.boolean('home_page').notNullable().defaultTo(false);
    table.string('item_type').notNullable();
    table.json('meal_tags').defaultTo([]);
    table.boolean('is_deleted').notNullable().defaultTo(false);
    table.string('order_note').notNullable().defaultTo('');
    table.string('description').notNullable().defaultTo('');
    table.string('minimum_age').notNullable().defaultTo('0');
    table.json('posist_data').defaultTo({});
    table.string('available_no').notNullable().defaultTo('INFINITE');
    table.json('meal_keywords').defaultTo([]);
    table.integer('internal_profit').notNullable().defaultTo(0);
    table.string('meal_category_id').notNullable();
    table.timestamps();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
