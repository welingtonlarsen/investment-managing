import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { BrokerageOrder } from '../../repository/entity/brokerage-order.db.entity';
import { GeneralInformation } from '../../repository/entity/general-information.typeorm.entity';
import { Order } from '../../repository/entity/order.typeorm.entity';
import { BusinessSummary } from '../../repository/entity/business-summary.typeorm.entity';
import {
  Clearing,
  Exchange,
  FinancialSummary,
  OperationalCosts,
} from '../../repository/entity/financial-summary.typeorm.entity';

const databaseName = process.env.TYPEORM_DATABASE;

const masterConnection = new DataSource({
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: databaseName,
  // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
  synchronize: true,
  entities: [
    BrokerageOrder,
    GeneralInformation,
    Order,
    BusinessSummary,
    Clearing,
    Exchange,
    OperationalCosts,
    FinancialSummary,
  ],
  logging: false,
});

const connection = new DataSource({
  ...(masterConnection.options as MysqlConnectionOptions),
  database: databaseName,
  migrationsRun: true,
  name: undefined,
});

export async function databaseIntegrationSetup() {
  try {
    await masterConnection.initialize();
    // TODO: Incluir o reset tambem no close
    await resetDatabase();
  } catch (err) {
    process.stderr.write(
      `${err instanceof Error ? err.stack : JSON.stringify(err)}\n`,
    );
    process.exit(1);
  }

  return connection;
}

export async function closeDatabaseIntegrationConnections() {
  try {
    await resetDatabase();
    await masterConnection.destroy();
  } catch (err) {
    process.stderr.write(
      `${err instanceof Error ? err.stack : JSON.stringify(err)}\n`,
    );
    process.exit(1);
  }
}

export async function resetDatabase() {
  try {
    await masterConnection.query(`DROP DATABASE ${databaseName}`);
    await masterConnection.query(`CREATE DATABASE ${databaseName}`);
  } catch (err) {
    process.stderr.write(
      `${err instanceof Error ? err.stack : JSON.stringify(err)}\n`,
    );
    process.exit(1);
  }
}
