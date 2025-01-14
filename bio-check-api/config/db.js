const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/mydatabase';

const conn = async () => {
    try {
        const mongoose = require('mongoose');

        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';

        mongoose
            .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('Conectado ao MongoDB'))
            .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


        console.log('conectou ao banco com sucesso')
    } catch (error) {
        console.log('erro ao conectar com o banco')

    }
}

conn()

module.exports = conn;