const { Op } = require("sequelize")
const Tech = require("../models/Tech")
const User = require("../models/User")

module.exports = {
    async show(_req, res){
        //encontrar todos usuarios que tem email que termina em @rocketseat.com.br
        //desses quero buscar todos que moram na rua teste
        //desses quero buscar as tecnologias com react

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'rua teste' }},
                { 
                    association:  'techs',
                    required: false,
                    where: { 
                        [Op.iLike]: 'React%'
                    }}
            ]
        })

        return res.json(users)
    }
}