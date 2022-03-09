import * as yup from 'yup'
import mongoose from 'mongoose'
import { Request, Response, NextFunction } from 'express'

export default {
    upsert: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const schema = yup.object().shape({
                name: yup.string().required().min(3),
                relatedId: yup.number(),
            })

            await schema.validate(req.body, { abortEarly: false })
            return next()
        } catch (err) {
            const { errors } = err as yup.ValidationError
            return res.status(400).json({ messages: errors })
        }
    },
    Id: async(req: Request, res: Response, next: NextFunction) => {
        try {
            const schema = yup.object().shape({
                id: yup.number().required(),
            })

            await schema.validate(req.params, { abortEarly: false })
            return next()
        } catch (err) {
            const { errors } = err as yup.ValidationError
            return res.status(400).json({ messages: errors })
        }
    },
}
