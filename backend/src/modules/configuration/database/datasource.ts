import { DataSource, DataSourceOptions } from 'typeorm';

export const options: DataSourceOptions = (() => {
  return {
    // type: process.env.TYPEORM_CONNECTION as any,
    // host: process.env.TYPEORM_HOST,
    // username: process.env.TYPEORM_USERNAME,
    // password: process.env.TYPEORM_PASSWORD,
    // database: process.env.TYPEORM_DATABASE,
    // port: +process.env.TYPEORM_PORT,
    // synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    // entities: [process.env.TYPEORM_ENTITIES],
    // migrations: [process.env.TYPEORM_MIGRATIONS],
    // migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    // logging: process.env.TYPEORM_LOGGING === 'true',
    // supportBigNumbers: true,

    type: 'mysql' as any,
    host: process.env.TYPEORM_HOST,
    port: +process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    entities: [process.env.TYPEORM_ENTITIES],
    logging: process.env.TYPEORM_LOGGING === 'true',
    synchronize: true,
    database: process.env.TYPEORM_DATABASE,
  };
})();

const dataSource = new DataSource(options);

export default dataSource;
