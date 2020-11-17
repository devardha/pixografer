import Photographer from '../../models/photographer.model'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import User from '../../models/user.model'

export default async (req, res) => {
    const { token } = req.body

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    const photographer = await Photographer.findById(decode.id);

    if(!photographer){
        const user = await User.findById(decode.id);

        if(user){
            res.json(user)
        }else{
            res.json({ msg: 'Auth failed' })
        }
    }else{
        res.json(photographer)
    }
}