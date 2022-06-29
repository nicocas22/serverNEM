"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tareaSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        require: true,
        trim: true
    },
    titulo: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    fechaCreacion: {
        type: Date,
        trim: true,
    },
    vigente: {
        type: Boolean,
        trim: true
    }
});
exports.default = (0, mongoose_1.model)('tareas', tareaSchema);
