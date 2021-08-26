const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllInclusivitys = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_inclusivity(?)',[0], (err, result) => {
            if(err){
                conection.end();
                sendError(res, err);
            }
            return res.status(200).json({
                result
            })
        })
    }).catch((err) => {
        sendError(res,err)
    })
}

const getInclusivity = (req, res, next) => {

    const inclusivityId = parseInt(req.params.inclusivityId);

    Connect().then((conection ) => {
        conection.query('call get_inclusivity(?)',[inclusivityId], (err, result) => {
            if(err){
                conection.end();
                sendError(res, err);
            }
            return res.status(200).json({
                result
            })
        })
    }).catch((err) => {
        sendError(res,err)
    })
}

const saveInclusivity = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Inclusivity(?,?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
            if(err){
                conection.end();
                sendError(res,err);
            }
            return res.status(200).json({
                result: 'Data inserted successfully'
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}

const updateInclusivity = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Inclusivity(?,?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
            if(err){
                conection.end();
                sendError(res,err);
            }
            return res.status(200).json({
                result: 'Data updated successfully'
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}

const deleteInclusivity = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Inclusivity(?,?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
            if(err){
                conection.end();
                sendError(res,err);
            }
            return res.status(200).json({
                result: 'Data deleted successfully'
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}

module.exports = {
    getAllInclusivitys,
    getInclusivity,
    saveInclusivity,
    updateInclusivity,
    deleteInclusivity
}