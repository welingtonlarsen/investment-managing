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

const databaseName = 'investment_managing_integration_test';

const masterConnection = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3309,
  username: 'root',
  password: 'root',
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
    //await masterConnection.query(`CREATE DATABASE "${databaseName}"`);
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
