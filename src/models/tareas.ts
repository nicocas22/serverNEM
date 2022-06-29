import { Schema, model } from "mongoose";

const tareaSchema = new Schema({
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
})

export default model('tareas', tareaSchema);