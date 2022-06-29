import { RequestHandler } from "express"
import Tareas from '../models/tareas'
var date = new Date();

export const guardarTareas: RequestHandler = async (req, res) => {
    try {
        let ids: any = 0;
        //listamos los registros desde el mas reciente
        const ultimoID = await Tareas.find().sort({ id: -1 })
        //Validacion en caso de que no se encuentren Id Anteriores
        if (ultimoID.length == 0) {
            ids = 1;
        }
        else {
            //Tomamos el ultimo id
            ids = ultimoID[0].id + 1
        }

        if (req.body.titulo == null || req.body.titulo == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir titulo vuelva a intentarlo" })
        }

        if (req.body.descripcion == null || req.body.descripcion == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir descripcion vuelva a intentarlo" })
        }
        if (req.body.vigente == null || req.body.vigente == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir vigencia vuelva a intentarlo" })
        }


        const tarea = new Tareas({
            id: ids,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            vigente: req.body.vigente,
            fechaCreacion: date
        })

        const saveTarea = await tarea.save()
        res.status(200).json({ mensaje: "Felicidades se a guardado correctamente tu tarea", tarea: saveTarea })
    } catch (error) {
        console.log(error);

        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde")
    }
}

export const listarTareas: RequestHandler = async (req, res) => {
    try {
        const listTareas = await Tareas.find()
        res.status(200).json(listTareas)
    } catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde")
    }
}
export const infoTarea: RequestHandler = async (req, res) => {
    try {
        const infoTarea = await Tareas.findById(req.params.id)
        if(!infoTarea) {
            return res.status(204).json({mensaje: "No se puede encontrar tarea para ese id"})
        }
        res.status(200).json(infoTarea)
    } catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde")
    }
}

export const modificarTareas: RequestHandler = async (req, res) => {
    try {
        if (req.body.titulo == null || req.body.titulo == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir titulo vuelva a intentarlo" })
        }

        if (req.body.descripcion == null || req.body.descripcion == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir descripcion vuelva a intentarlo" })
        }

        if (req.body.vigente == null || req.body.vigente == undefined) {
            return res.status(400).json({ mensaje: "Problemas se debe incluir vigencia vuelva a intentarlo" })
        }
        const data = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            fechaCreacion: date,
            vigente: req.body.vigente
        }
        const tareaUpdate = await Tareas.findByIdAndUpdate(req.params.id, data, { new: true })

        if (!tareaUpdate) {
            res.status(400).json("no se pudo encontrar la tarea para Editarse")
        }

        return res.status(200).json({ mensaje: "Felicidades se puede editar tu tarea", tarea: tareaUpdate })
    } catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde")
    }
}

export const eliminarTareas: RequestHandler = async (req, res) => {
    try {
        console.log(req.params);
        
        const tareaDelete = await Tareas.findByIdAndDelete(req.params.id);
        if (!tareaDelete) {
            res.status(400).json("no se pudo encontrar la tarea para eliminarse")
        }
        return res.status(200).json({ mensaje: "Felicidades se acaba de eliminar la tareas", tarea: tareaDelete })
    } catch (error) {
        res.status(500).json("Oops Se Presento Un Error En Los Servidores Intente mas tarde")
    }
}