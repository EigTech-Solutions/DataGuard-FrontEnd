var instituicaoModel = require("../models/instituicaoModel");

// cadastro das instituicoes 
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeInst = req.body.nomeInstServer;
    var cnpjInst = req.body.cnpjInstServer;
    var emailInst = req.body.emailInstServer;
    var telefoneInst = req.body.telefoneInstServer;
    var cepInst = req.body.cepInstServer;
    var numeroInst = req.body.numeroInstServer;
    var complementoInst = req.body.complementoInstServer;


    // Faça as validações dos valores
    if (nomeInst == undefined) {
        res.status(400).send("O nome da instituição está undefined!");
    } else if (cnpjInst == undefined) {
        res.status(400).send("O CNPJ da instituição está undefined!");
    } else if (emailInst == undefined) {
        res.status(400).send("O email da instituição está undefined!");
    } else if (telefoneInst == undefined) {
        res.status(400).send("O telefone da instituição está undefined!");
    } else if (cepInst == undefined) {
        res.status(400).send("O CEP da instituição está undefined!");
    } else if (numeroInst == undefined) {
        res.status(400).send("O numero da instituição está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo laboratorioModel.js
        instituicaoModel.cadastrar(nomeInst, cnpjInst, emailInst, telefoneInst, cepInst, 
            numeroInst, complementoInst)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrar
}