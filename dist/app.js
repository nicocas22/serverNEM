"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tareas_routes_1 = __importDefault(require("./routes/tareas.routes"));
const app = (0, express_1.default)();
const swaggerDoc_1 = __importDefault(require("./swaggerDoc"));
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
(0, swaggerDoc_1.default)(app);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/tareas', tareas_routes_1.default);
exports.default = app;
