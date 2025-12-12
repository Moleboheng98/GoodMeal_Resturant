import express from 'express'
import {createReservation,getALLReservation,deleteReservation} from '../controllers/reservationCotrollers.js'

const Router = express.Router()

Routerouter.post('/create',createReservation)
Router.get('/get',getALLReservation)
Router.delete('/delete/:id',deleteReservation)

export default Router