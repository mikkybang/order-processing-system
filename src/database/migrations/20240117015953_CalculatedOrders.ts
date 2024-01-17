import { Knex } from 'knex';

const tableName = 'calculated_orders';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();

    table.decimal('total_amount', 14, 2).notNullable();
    table.boolean('free_delivery').notNullable();
    table.decimal('delivery_fee', 14, 2).notNullable();
    table.decimal('service_charge', 14, 2).notNullable();
    table.jsonb('address_details').notNullable();
    table.jsonb('meals').notNullable();
    table.decimal('lat', 9, 6);
    table.decimal('lng', 9, 6);
    table.string('cokitchen_polygon_id');
    table.string('user_id');
    table.string('cokitchen_id');
    table.boolean('pickup').notNullable();
    table.decimal('prev_price', 14, 2);

    table.timestamps();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
