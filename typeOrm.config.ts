import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();
export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  username: configService.get('user'),
  password: configService.get('password'),
  host: configService.get('host'),
  port: configService.get('dbPort'),
  database: configService.get('database'),

  migrations: ['migration/**'],
  entities: ['dist/**/*.entity.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
