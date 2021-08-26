const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllExplore = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_explore(?)',[0], (err, result) => {
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

const getExplore = (req, res, next) => {

    const exploreId = parseInt(req.params.exploreId);

    Connect().then((conection ) => {
        conection.query('call get_explore(?)',[exploreId], (err, result) => {
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

const saveExplore = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    console.log(valueToInsert);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Explore(?,?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
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

const updateExplore = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Explore(?,?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
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

const deleteExplore = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Explore(?,?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
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
    getAllExplore,
    getExplore,
    saveExplore,
    updateExplore,
    deleteExplore
}