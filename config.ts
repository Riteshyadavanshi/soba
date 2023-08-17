
export const config=()=>({
    type:process.env.TYPE,
    
    password:process.env.PASSWORD,
    user:process.env.DB_USER,
    host:process.env.HOST,
    dbPort:process.env.DB_PORT,
    database:process.env.DB_NAME,
    port: process.env.PORT,
     jwtSecret:process.env.JWT_SECRET
})