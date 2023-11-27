var express = require("express");
var router = express.Router();

var instituicaoController = require("../controllers/instituicaoController");

router.post("/cadastrar", function (req, res) {
    instituicaoController.cadastrar(req, res);
});

router.get("/puxarDados", function (req, res) {
    instituicaoController.puxarDados(req, res);
});

router.get("/dadosInstituicao", function (req, res) {
    instituicaoController.dadosInstituicao(req, res);
});

router.get("/dadosGeraisInst", function(req, res){
    instituicaoController.dadosGeraisInst(req, res);
});

router.get("/dashDatas", function(req, res){
    instituicaoController.dashDatas(req, res);
});

module.exports = router;