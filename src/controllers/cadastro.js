const connection = require("../database/connection")
const crypto = require("crypto")
const moment = require("moment-timezone")

module.exports = {
    async createVaga(req, res) {
        try {
            const { empresa, uf, cidade, vaga, resumo, link, contato, descricao } = req.body;
            const id = crypto.randomBytes(3).toString("HEX")
            let time = moment().tz("America/Sao_Paulo").format("YYYYMMDDHHmms")
            await connection("vagas").insert({id, time, empresa, uf, cidade, vaga, resumo, link, contato, descricao})
        } catch (err) {
            alert("erro")
        }
            res.json(res.status)
    },
    async createTalento(req, res) {
        try {
            const id = crypto.randomBytes(3).toString("HEX")
            let time = moment().format("YYYYMMDDhhmms")
            const {nome, profissao, telefone, email} = req.body;
            await connection("talentos").insert({
                id,
                time,
                nome,
                profissao,
                telefone,
                email
            })
            res.json(res.status)
        } catch (err) {
            res.json(res.status)
        }
    }
}