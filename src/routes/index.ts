import express from 'express'
import  menuRouters  from './menu'

const routes = menuRouters(express.Router());

export default routes
