
// importando a biblioteca knex 
const knex = require('knex');
// importando arquivo de configuração knex 
const config = require("../knexfile.js");
// cria a configuração de desenvolvimento
const dbKnex = knex(config.development);
//exportar a configuração através da constante dbKnex
module.exports = dbKnex;