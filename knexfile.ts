import 'dotenv/config';
import { knexSnakeCaseMappers } from 'objection';
import { Knex } from 'knex';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    ssl: Boolean(process.env.DATABASE_SSL)
      ? { rejectUnauthorized: false }
      : false,
  },
  migrations: {
    directory: './src/database/migrations',
    stub: './src/database/migration.stub',
  },
  seeds: {
    directory: './src/database/seeds',
    stub: './src/database/seed.stub',
  },
  ...knexSnakeCaseMappers(),
} as Knex.Config;
