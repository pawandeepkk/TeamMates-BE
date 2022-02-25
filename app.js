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

//insert Games module
app.get('/addgpmodule', (req,res) => {
    let module = {ModuleName: "Games Programming",
                  ModuleCode: "CI8900",
                  ModuleLevel: 4,
                  ModuleLeaderID: 1,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Games Programming added to Modules table...');
    });
 });

 //insert Games Individual Project module
app.get('/addipgmodule', (req,res) => {
    let module = {ModuleName: "Individual Project (Games)",
                  ModuleCode: "CI0259",
                  ModuleLevel: 7,
                  ModuleLeaderID: 2,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Individual Project (Games) added to Modules table...');
    });
 });

 //insert database module
app.get('/addddwamodule', (req,res) => {
    let module = {ModuleName: "Database Driven Web Applications",
                  ModuleCode: "CI2020",
                  ModuleLevel: 5,
                  ModuleLeaderID: 3,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Database Driven Web Applications added to Modules table...');
    });
 });

 //insert data modelling module
app.get('/addadmmodule', (req,res) => {
    let module = {ModuleName: "Advanced Data Modelling",
                  ModuleCode: "CI5142",
                  ModuleLevel: 5,
                  ModuleLeaderID: 4,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Advanced Data Modelling added to Modules table...');
    });
 });

 //insert ethical hacking module
app.get('/addehmodule', (req,res) => {
    let module = {ModuleName: "Ethical Hacking",
                  ModuleCode: "CI4529",
                  ModuleLevel: 4,
                  ModuleLeaderID: 5,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Ethical Hacking added to Modules table...');
    });
 });

app.get('/addnmfmodule', (req,res) => {
    let module = {ModuleName: "Network and Mobile Forensics",
                  ModuleCode: "CI1211",
                  ModuleLevel: 4,
                  ModuleLeaderID: 6,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Network and Mobile Forensics added to Modules table...');
    });
 });

 app.get('/addpdsmodule', (req,res) => {
    let module = {ModuleName: "Practical Data Analyst Skills",
                  ModuleCode: "CI1354",
                  ModuleLevel: 7,
                  ModuleLeaderID: 7,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Practical Data Analyst Skills added to Modules table...');
    });
 });

 app.get('/addsipmodule', (req,res) => {
    let module = {ModuleName: "Statistics in Practice",
                  ModuleCode: "CI8341",
                  ModuleLevel: 6,
                  ModuleLeaderID: 8,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Statistics in Practice added to Modules table...');
    });
 });

 app.get('/addispmodule', (req,res) => {
    let module = {ModuleName: "Internet Services and Protocols",
                  ModuleCode: "CI4713",
                  ModuleLevel: 4,
                  ModuleLeaderID: 9,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('Internet Services and Protocols added to Modules table...');
    });
 });

 app.get('/addhlgdmodule', (req,res) => {
    let module = {ModuleName: "High Level Game Development",
                  ModuleCode: "CI3139",
                  ModuleLevel:5,
                  ModuleLeaderID: null,
                  ModuleImage: "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg"};
    let sql = "INSERT INTO modules SET ?"
    let query=db.query(sql,module,(err,result)=>{
        if(err) {
            console.log('error')
        }
        console.log(result);
        res.send('High Level Game Development added to Modules table...');
    });
 });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));