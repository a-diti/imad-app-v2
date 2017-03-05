var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;

var config = {
  host: 'db.imad.hasura-app.io',
  port: '5432',
  user: 'a-diti',
  database: 'a-diti',
   password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));


var articles={
'article-one' :{
    title:'Article one|Aditi',
    heading:'  Article one.',
    date:'Feb 25, 2017',
    content:` <p>
                    This is content of first article.
                </p>
                 <p>
                    This is content of first article.
                </p>
                 <p>
                    This is content of first article.
                </p>`
},
'article-two':{
     title:'Article Second|Aditi',
    heading:'  Article two.',
    date:'Feb 26, 2017',
    content:` <p>
                    This is content of second article.
                </p>
                 <p>
                    This is content of second article.
                </p>
                 <p>
                    This is content of second article.
                </p>`
  },
 'article-three':{
      title:'Article Third|Aditi',
    heading:'  Article three.',
    date:'Feb 27, 2017',
    content:` <p>
                    This is content of third article.
                </p>
                 <p>
                    This is content of third article.
                </p>
                 <p>
                    This is content of third article.
                </p>`
 }
};

function createTemplate(data){
    var title=data.title;
     var heading=data.heading;
     var date=data.date;
      var content=data.content;
      
      var htmlTemplate=`
                  <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width, initial scale=1" />
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="container">
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <hr/>
                        <div>
                            <h3>
                             ${heading}
                            </h3>
                        </div>
                        <div>
                         ${date}
                        </div>
                        <div>
                           ${content}
                        </div>
                    </div>
                </body>
            </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new pool(config);
app.get('/test-db', function (req, res) {
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result));
        }
        
    });
  
});


var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req, res){
    var name = req.query.name;
    
    names.push(name);
    res.send(JSON.stringify(names));
    
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
 
 
 app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi1.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
