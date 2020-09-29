const Address = require("../models/Address")
const User = require("../models/User")

module.exports = {
    async store(req, res){
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)

        if(!user){
            return res.status(400).json({ error: 'user not found' })
        }

        const address = await Address.create({
            user_id,
            zipcode,
            street,
            number,
        })

        return res.json(address)

    },
    async index(_req, res){
        const addresses = await Address.findAll()

        return res.json(addresses)
    }
}