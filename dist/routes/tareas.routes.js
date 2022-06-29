"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const tareaController = __importStar(require("../controllers/tareas.controller"));
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
router.post('/agregar', tareaController.guardarTareas);
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
router.delete('/eliminar/:id', tareaController.eliminarTareas);
router.put('/editar/:id', tareaController.modificarTareas);
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
router.get('/listar', tareaController.listarTareas);
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
router.get('/infoTarea/:id', tareaController.infoTarea);
exports.default = router;
