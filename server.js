const express = require('express');
const routes = require('./routes');
const { response } = require('express');
const { listen } = require('express/lib/application');

require('./database')

const app = express();

app.use(express.json())
app.use(routes)

app.get('/', function (req, res) {
  res.send("OLA")
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});