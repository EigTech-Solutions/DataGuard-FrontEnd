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

function puxarDados(req, res) {
    instituicaoModel.puxarDados(req, res).then(function (dados) {
        if (dados.length > 0) {
            res.status(200).json(dados);
        } else {
            res.status(204).send("Nenhum dado encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosInstituicao(req, res) {
    instituicaoModel.dadosInstituicao(req, res).then(function (dados) {
        if (dados.length > 0) {
            res.status(200).json(dados);
        } else {
            res.status(204).send("Nenhum dado encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function dadosGeraisInst(req, res) {
    instituicaoModel.dadosGeraisInst(req, res).then(function (dadosPuxados) {
        if (dadosPuxados.length > 0) {
            res.status(200).json(dadosPuxados);
        } else {
            res.status(204).send("Nenhum dado encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function dashDatas(req, res) {
    instituicaoModel.dashDatas(req, res).then(function (dashDados) {
        if (dashDados.length > 0) {
            res.status(200).json(dashDados);
        } else {
            res.status(204).send("Nenhum dado encontrado");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}


function deletarInstituicao(req, res) {
    var idInstitucional = req.params.idInstitucional;
    console.log(`Entrei no controller deletar: ${idInstitucional}`);

    instituicaoModel.deletarInstituicao(idInstitucional)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao deletar a instituição: ", erro);
            res.status(500).json({ error: "Erro interno do servidor" });
        });
}

function dadosUsuario(req, res) {
    instituicaoModel.dadosUsuario(req, res).then(function (dadosUser) {
        if (dadosUser.length > 0) {
            res.status(200).json(dadosUser);
        } else {
            res.status(204).send("Nenhum dado encontrado")
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    puxarDados,
    dadosInstituicao,
    dadosGeraisInst,
    dashDatas,
    deletarInstituicao,
    dadosUsuario
}