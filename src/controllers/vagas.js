const connection =  require('../database/connection') 

module.exports = {
    // Lista todos
    async vagas (req, res) {
        const vagas = await connection("vagas").orderBy("time", "desc").select("*");
        return res.json(vagas)
    },
    // Lista todos
    async single (req, res) {
        try {
            const {id} = req.params;
            const vaga = await connection("vagas").where("id", id);
            res.json(vaga)
            // console.log(vaga)
        } catch (err) {
            console.log("erro: ", err)
            res.json(req.status)
        }
    },
    async removeVaga(req, res) {
        const {id} = req.params
        await connection("vagas").where("id", id).delete();
        return res.json(200)
    }
}