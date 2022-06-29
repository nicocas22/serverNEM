import { Router } from "express";
const router = Router();
import * as tareaController from '../controllers/tareas.controller'


/**
 * @swagger
 * /tareas/agregar:
 *  post:
 *      tags: 
 *          - Tareas
 *      summary: Crea una tarea
 *      description: Aqui se puede agregar una tarea a la db
 *      produces:
 *          - application/json
 */
router.post('/agregar', tareaController.guardarTareas)

/**
 * @swagger
 * /tareas/editar:
 *  post:
 *      tags: 
 *          - Tareas
 *      summary: edita una tarea
 *      description: Aqui se puede editar una tarea a la db
 *      produces:
 *          - application/json
 */

/**
* @swagger
* /tareas/eliminar:
*  post:
*      tags: 
*          - Tareas
*      summary: Eliminar las tarea
*      description: Aqui se puede Eliminar la tarea db
*      produces:
*          - application/json
*/
router.delete('/eliminar/:id', tareaController.eliminarTareas)

router.put('/editar/:id', tareaController.modificarTareas)

/**
 * @swagger
 * /tareas/listar:
 *  post:
 *      tags: 
 *          - Tareas
 *      summary: Listar las tareas
 *      description: Aqui se puede listar las tareas de la db
 *      produces:
 *          - application/json
 */
router.get('/listar', tareaController.listarTareas)

/**
 * @swagger
 * /tareas/infoTarea/:id:
 *  post:
 *      tags: 
 *          - Tareas
 *      summary: Muestra informacion la tarea 
 *      description: Aqui se puede ver la informacion de la tarea de la db
 *      produces:
 *          - application/json
 */
 router.get('/infoTarea/:id', tareaController.infoTarea)



export default router