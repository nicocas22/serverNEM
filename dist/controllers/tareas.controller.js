"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTareas = exports.modificarTareas = exports.infoTarea = exports.listarTareas = exports.guardarTareas = void 0;
const tareas_1 = __importDefault(require("../models/tareas"));
var date = new Date();
const guardarTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let ids = 0;
        //listamos los registros desde el mas reciente
        const ultimoID = yield tareas_1.default.find().sort({ id: -1 });
        //Validacion en caso de que no se encuentren Id Anteriores
        if (ultimoID.length == 0) {
            ids = 1;
        }
        else {
            //Tomamos el ultimo id
            ids = ultimoID[0].id + 1;
        }
        if (req.body.titulo == null || req.body.titulo == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir titulo vuelva a intentarlo" });
        }
        if (req.body.descripcion == null || req.body.descripcion == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir descripcion vuelva a intentarlo" });
        }
        if (req.body.vigente == null || req.body.vigente == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir vigencia vuelva a intentarlo" });
        }
        const tarea = new tareas_1.default({
            id: ids,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            vigente: req.body.vigente,
            fechaCreacion: date
        });
        const saveTarea = yield tarea.save();
        res.status(200).json({ mensaje: "Felicidades se a guardado correctamente tu tarea", tarea: saveTarea });
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde");
    }
});
exports.guardarTareas = guardarTareas;
const listarTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listTareas = yield tareas_1.default.find();
        res.status(200).json(listTareas);
    }
    catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde");
    }
});
exports.listarTareas = listarTareas;
const infoTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const infoTarea = yield tareas_1.default.findById(req.params.id);
        if (!infoTarea) {
            return res.status(204).json({ mensaje: "No se puede encontrar tarea para ese id" });
        }
        res.status(200).json(infoTarea);
    }
    catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde");
    }
});
exports.infoTarea = infoTarea;
const modificarTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.titulo == null || req.body.titulo == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir titulo vuelva a intentarlo" });
        }
        if (req.body.descripcion == null || req.body.descripcion == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir descripcion vuelva a intentarlo" });
        }
        if (req.body.vigente == null || req.body.vigente == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir vigencia vuelva a intentarlo" });
        }
        const data = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            fechaCreacion: date,
            vigente: req.body.vigente
        };
        const tareaUpdate = yield tareas_1.default.findByIdAndUpdate(req.params.id, data, { new: true });
        if (!tareaUpdate) {
            res.status(400).json("no se pudo encontrar la tarea para Editarse");
        }
        return res.status(200).json({ mensaje: "Felicidades se puede editar tu tarea", tarea: tareaUpdate });
    }
    catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde");
    }
});
exports.modificarTareas = modificarTareas;
const eliminarTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.params);
        const tareaDelete = yield tareas_1.default.findByIdAndDelete(req.params.id);
        if (!tareaDelete) {
            res.status(400).json("no se pudo encontrar la tarea para eliminarse");
        }
        return res.status(200).json({ mensaje: "Felicidades se acaba de eliminar la tareas", tarea: tareaDelete });
    }
    catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde");
    }
});
exports.eliminarTareas = eliminarTareas;
