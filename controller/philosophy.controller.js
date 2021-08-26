const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllPhilosophy = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_Philosophy(?)',[0], (err, result) => {
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

const getPhilosophy = (req, res, next) => {

    const phlosophyId = parseInt(req.params.phlosophyId);

    Connect().then((conection ) => {
        conection.query('call get_Philosophy(?)',[phlosophyId], (err, result) => {
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

const savePhilosophy = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    console.log(valueToInsert);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Philosophy(?,?,?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
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

const updatePhilosophy = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Philosophy(?,?,?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
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

const deletePhilosophy = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Philosophy(?,?,?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
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
    getAllPhilosophy,
    getPhilosophy,
    savePhilosophy,
    updatePhilosophy,
    deletePhilosophy
}