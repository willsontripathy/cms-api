const mysql = require('mysql');


const params = {
    user: 'root',
    password: 'guduKuna@5152',
    host: 'localhost',
    database: 'cmsapp'
}

const Connect = async () =>
    new Promise((resolve, reject) => {
        const connection = mysql.createConnection(params);

        connection.connect((error) => {
            if (error) {
                console.log(error);
                reject(error);
                return;
            }

            resolve(connection);
        });
    });

    module.exports = Connect;