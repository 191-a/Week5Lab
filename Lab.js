let express = require('express');
let bodyParser = require('body-parser');

let app = express();

let showView = __dirname + "/views/";


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('images'));
app.use(express.static('css'));


let db = [];

app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/', function (rqe, res) {
    res.sendFile(showView + '/home.html');
});

app.get('/addNewTask',function(req,res){
    res.sendFile(showView + '/addNewTask.html');
});

app.post('/addNewTask',function(req,res){
    console.log(req.body);
    db.push(req.body);
    res.render('listAllTasks.html',{
        taskDb: db
    });
});

app.get('/listAllTasks',function(req,res){
    res.render('listAllTasks.html',{
        taskDb: db
    });
});

app.listen(8080);


