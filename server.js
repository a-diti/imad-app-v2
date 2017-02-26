var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
