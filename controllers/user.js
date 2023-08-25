
import { response } from 'express';

const usuariosGet = (req, res = response) => {

    const {q, nombre='no name', apikey, page=1, limit} = req.query;

    res.json({
        msg : 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg : 'post API - controller',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg : 'put API - controller',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg : 'delete API - controller'
    });
}

// module.exports = {
//     usuariosGet
// }

export {usuariosGet, usuariosPost, usuariosPut, usuariosDelete}