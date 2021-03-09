import dotenv from 'dotenv';

dotenv.config()


const config = {
    "username": process.env.RDS_USERNAME,
    "password": process.env.RDS_PASSWORD,
    "host": process.env.RDS_HOSTNAME,
    "port":process.env.RDS_PORT,
    "dialect": "mysql"
}

export default config;