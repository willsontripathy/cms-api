const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllBanner = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_banner(?)',[0], (err, result) => {
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

const getBanner = (req, res, next) => {

    const bannerId = parseInt(req.params.bannerId);

    Connect().then((conection ) => {
        conection.query('call get_banner(?)',[bannerId], (err, result) => {
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

const saveBanner = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    console.log(valueToInsert);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Banner(?,?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
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

const updateBanner = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Banner(?,?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
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

const deleteBanner = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Banner(?,?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
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
    getAllBanner,
    getBanner,
    saveBanner,
    updateBanner,
    deleteBanner
}