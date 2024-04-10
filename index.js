const express = require('express');
const app = express();
app.use(express.static('.'));
app.get('/', function(req, res){
   res.send('<h1>real?</h1>');
});
app.get('/hey', function(req, res){
   res.send('<h1>wowaa</h1>');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT || 3000, () => {
  console.log('listening on port ' + PORT);
});
