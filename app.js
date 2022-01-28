// Imports
import express from 'express';
import { createConnection } from 'mysql';

// create connection
const db = createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'test'
});

// Connect to databse
db.connect((err) => {
    if(err){
        console.log('error');
    }
    console.log('MySQL connected...');
});

// Configure express app 
const app = express();


/*
//Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE test';
    db.query(sql, (err, result) => {
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('database created...');
    });
});
*/

//create table 
app.get('/createmoduletable', (req, res) => {
    let sql = 'CREATE TABLE modules(moduleId int AUTO_INCREMENT, moduleName VARCHAR(255), moduleCode VARCHAR(255), moduleLevel int(1), moduleLeaderID VARCHAR(255), moduleImage VARCHAR(255),PRIMARY KEY(moduleId))';
    db.query(sql,(err, result) => {
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Module table created...');
    })
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));