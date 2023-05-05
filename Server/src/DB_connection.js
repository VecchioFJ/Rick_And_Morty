require('dotenv').config();
// nos brinda un objeto tipo process {env: { DB_USER, DB_PASSWORD, DB_HOST }}
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DB_NAME = "rickandmorty"
const { users, favorites } = require('./models/index')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(  //primero definno q voy a trabajar co postgress
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05 - acadefinimos las tablas
// Debajo de este comentario puedes ejecutar la función de los modelos.

users(sequelize)

favorites(sequelize)

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;

module.exports = {
   // User,
   // Favorite,
   ...sequelize.models,
   conn: sequelize,
};
