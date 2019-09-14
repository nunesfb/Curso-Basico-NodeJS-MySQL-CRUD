const Sequelize = require('sequelize');

//busco os dados de configuracao do bd
const sequelize = require('../database/database.js');

//o define cria a tabela no bd
//o nome da tabela é invoice
//defino os atributos
const Livro = sequelize.define("livro", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    autor: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    valor: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    dataLancamento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    isbn: {
        allowNull: false,
        type: Sequelize.INTEGER(),
        validate: {
            len: [1, 999999]
        }
    }
});

module.exports = Livro;