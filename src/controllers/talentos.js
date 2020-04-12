const connection =  require('../database/connection') 

module.exports = {
    // Lista todos
    async talentos (req, res) {
        const talentos = await connection("talentos").orderBy("time", "desc").select("*");
        return res.json(talentos)
    },
    async removeTalento(req, res) {
        const {id} = req.params
        await connection("talentos").where("id", id).delete();
        return res.json(200)
    }
}