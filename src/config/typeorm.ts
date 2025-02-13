import { registerAs } from "@nestjs/config"
import {config as dotenvConfig} from 'dotenv'
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({path:'.development.env'});

const config ={
    type:'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:['dist/**/*.entities{.ts,.js'],
    migrations:['dist/migrations/*{.ts,.js'],
    autoLoadEntities:true,
    synchronize:true,
    dropSchema:true,
}
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)

export default registerAs ('typeorm',()=>config);
export const connectionSource=new DataSource(config as DataSourceOptions)