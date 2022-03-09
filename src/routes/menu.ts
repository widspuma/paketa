import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'

import menu from '../controllers/menu'
import validation from '../validation/menu'

const HOST_MENU = process.env.HOST_MENU || '/api/v1/menu/'

export default (routes:express.Router) : express.Router => {
    routes.post(HOST_MENU, validation.upsert, menu.create)
    routes.get(HOST_MENU, menu.getAll)
    routes.delete(HOST_MENU + ':id', validation.Id, menu.delete)
    return routes;        
};
