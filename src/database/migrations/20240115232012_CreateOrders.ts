import { Knex } from 'knex';

const tableName = 'orders';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (table) => {
    // this creates an "id" column that gets autoincremented
    table.increments();

    table.string('user_id').notNullable();
    table.boolean('completed').notNullable();
    table.boolean('cancelled').notNullable();
    table.boolean('kitchen_cancelled').notNullable();
    table.boolean('kitchen_accepted').notNullable();
    table.boolean('kitchen_dispatched').notNullable();
    table.dateTime('kitchen_dispatched_time');
    table.dateTime('completed_time');
    table.string('rider_id');
    table.boolean('kitchen_prepared').notNullable();
    table.boolean('rider_assigned').notNullable();
    table.boolean('paid').notNullable();
    table.string('order_code').notNullable();
    table.string('order_change').notNullable();
    table.string('calculated_order_id').notNullable();
    table.dateTime('kitchen_verified_time').nullable();
    table.dateTime('kitchen_completed_time').nullable();
    table.boolean('shop_accepted').notNullable();
    table.boolean('shop_prepared').notNullable();
    table.integer('no_of_mealbags_delivered').notNullable().defaultTo(0);
    table.integer('no_of_drinks_delivered').notNullable().defaultTo(0);
    table.dateTime('rider_started_time');
    table.boolean('rider_started').notNullable().defaultTo(false);
    table.dateTime('rider_arrived_time');
    table.boolean('rider_arrived').notNullable();
    table.boolean('is_failed_trip').notNullable();
    table.json('failed_trip_details').defaultTo({});
    table.string('box_number').notNullable();
    table.string('shelf_id');
    table.json('order_total_amount_history');
    table.boolean('scheduled').notNullable();
    table.string('confirmed_by_id');
    table.string('completed_by_id');
    table.dateTime('scheduled_delivery_date');
    table.dateTime('scheduled_delivery_time');
    table.boolean('is_hidden').notNullable();

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
