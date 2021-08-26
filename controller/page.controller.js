const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');

const getAllPages = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('call get_page(?)',[0], (err, result) => {
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

const getPage = (req, res, next) => {

    const pageId = parseInt(req.params.pageId);

    Connect().then((conection ) => {
        conection.query('call get_page(?)',[pageId], (err, result) => {
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

const savePage = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToInsert = Object.values(req.body);

    console.log(valueToInsert);

    Connect().then((conection ) => {
        // res.set('content-type','application/json');
        conection.query('call Insert_Update_Delete_Page(?,?,?,?,?,?,?)',valueToInsert, (err, result) => {
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

const updatePage = (req,res,next) => {
    res.set('content-type','application/json');
    const valueToUpdate = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Page(?,?,?,?,?,?,?)',valueToUpdate, (err, result) => {
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

const deletePage = (req,res,next) => {

    res.set('content-type','application/json');
    const valueToDelete = Object.values(req.body);

    Connect().then((conection ) => {
        conection.query('call Insert_Update_Delete_Page(?,?,?,?,?,?,?)',valueToDelete, (err, result) => {
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
    getAllPages,
    getPage,
    savePage,
    updatePage,
    deletePage
}