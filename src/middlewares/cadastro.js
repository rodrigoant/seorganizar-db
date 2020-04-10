const { Segments, Joi } = require("celebrate")

module.exports = {
    [Segments.BODY]: Joi.object().keys({
        empresa: Joi.string().required(),
        time: Joi.string().required(),
        uf: Joi.string().required(),
        cidade: Joi.string().required(),
        vaga: Joi.string().required(),
        resumo: Joi.string().required(),
        link: Joi.string().required(),
        contato: Joi.string().required(),
        descricao: Joi.string().required(),
    })
}