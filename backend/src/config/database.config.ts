import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
    type: 'mysql' as 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: +process.env.TYPEORM_PORT,
}))