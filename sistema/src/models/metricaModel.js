var database = require("../database/config")


// cadastro de metricas

function cadastrarMetrica(nome, email, senha, empresaId) {
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
        
         Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
          e na ordem de inserção dos dados.
        var instrucao = `
            INSERT INTO usuario (nome, email, senha, fk_empresa) VALUES ('${nome}', '${email}', '${senha}', '${empresaId}');
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
    
    }

    

module.exports = {
    cadastrarMetrica
};