import express from 'express'
import cors from 'cors';
import tareas from './routes/tareas.routes';
const app = express()
import swaggerDoc from './swaggerDoc'

/**
 * @swagger
 * definitions:
 *  Advertisement:
 *        type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: Id de la tarea   
 *              descripcion:
 *                  type: array
 *                  description: Una o mas de las Descripciones de las tareas   
 *              fechaCreacion:
 *                  type: Date
 *                  description: Fecha en la que se crea la tarea 
 *              vigente:
 *                  type: string
 *                  description: 
 */
swaggerDoc(app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/tareas', tareas)


export default app;