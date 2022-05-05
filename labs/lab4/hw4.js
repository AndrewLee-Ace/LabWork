const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sql = require('sqlite3');
const db = new sql.Database('info.sql');


app.use(express.json());

app.get('/data/all', (req, res) => {
    var results = [];
  
    db.serialize(function(){
        db.each('SELECT player_id AS id, name, age, team FROM tbl LIMIT 25', function(err, row){
            results.push({id: row.id, name: row.name, age: row.age, team: row.team});
        },function(){
            res.send({'results': results});
        });
    });
});

app.get('/data/:num', (req,res) =>{
    const id = req.params.num;
    var results = [];

    db.serialize(function(){
        db.each('SELECT player_id AS id, name, age, team FROM tbl WHERE player_id = ' + id, function(err, row){
            results.push({id: row.id, name: row.name, age: row.age, team: row.team});
        },function(){
            res.send({'results': results});
        });
    });
});

app.post('/data/post/:num/:val', (req,res) => {
    const id = req.params.num ||'';
    const value = req.params.val||'';

    var results = [];
    var vals = '';
    if (value !== ''){ vals += `f1 = '${f1}' `};

    var str = ["UPDATE tbl SET", vals, "WHERE ID = ", id].join(" ");
    db.run(str);
    
    db.each('SELECT player_id AS id, name, age, team FROM tbl', function(){
        res.send('Data has updated!');
    });
});

app.put('/data/new/:id/:name/:nation/:pos/:overall/:age/:hits/:pot/:team'), (req, res) =>{
    db.serialize(function(){
        db.each('INSERT INTO tbl (player_id, name, nationlity, position, overall, age, hits, potential, team VALUES ' + req.params.id + ', ' + req.params.name + ', '+ req.params.nation + ', '+ req.params.pos + ', '+ req.params.overall + ', '+ req.params.age + ', ' + req.params.hits + ', '+ req.params.pot + ', '+ req.params.team, function(){
            res.send('player added!');
        });
    });
}

app.listen(port, () => console.log(`Listening on port ${port}...`))