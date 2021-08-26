const Connect = require('../utils/mysql');
const sendError = require('../utils/errorres');


const getAllUser = (req, res, next) => {
    Connect().then((conection ) => {
        conection.query('SELECT * FROM user', (err, result) => {
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

const getUser = (req, res, next) => {
    
    const userId = parseInt(req.params.userId);
    const password = req.params.password;

    console.log(userId + ' '+ password);
    Connect().then((conection ) => {
        conection.query('call Get_User(?,?)',[userId, password], (err, result) => {
            if(err){
                conection.end();
                sendError(res, err);
            }
            console.log(result);
            return res.status(200).json({
                result
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}

const saveUser = (req, res, next) => {

    res.set('content-type','application/json');
    const body = req.body;
    const insertValues = Object.values(body);

    Connect().then((conection ) => {
        conection.query('insert into user values (?,?,?,?,?,?,?,?,?,?,?,?)',insertValues, (err, result) => {
            if(err){
                conection.end();
                sendError(res,err);
            }
            console.log(result);
            return res.status(200).json({
                result: 'Data inserted successfully'
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}

const deleteUser = (req,res,next) => {

    res.set('content-type','application/json');
    const UserId = req.params.userId;

    Connect().then((conection ) => {
        conection.query('call delete_user(?)',[UserId], (err, result) => {
            if(err){
                conection.end();
                sendError(res,err);
            }
            console.log(result);
            return res.status(200).json({
                result: 'Data deleted successfully'
            })
        })
    }).catch((err) => {
        sendError(res,err);
    })
}



module.exports = {
    getAllUser,
    getUser,
    saveUser,
    deleteUser
};
