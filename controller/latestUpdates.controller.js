const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllLatestUpdates = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_latestUpdate(?)',[0], (err, result) => {
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

const getLatestUpdates = (req, res, next) => {

    const latId = parseInt(req.params.latId);

    Connect().then((conection ) => {
        conection.query('call get_latestUpdate(?)',[latId], (err, result) => {
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

const saveLatestUpdates = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    console.log(valueToInsert);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_LatestUpdates(?,?,?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
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

const updateLatestUpdates = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_LatestUpdates(?,?,?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
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

const deleteLatestUpdates = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_LatestUpdates(?,?,?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
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
    getAllLatestUpdates,
    getLatestUpdates,
    saveLatestUpdates,
    updateLatestUpdates,
    deleteLatestUpdates
}