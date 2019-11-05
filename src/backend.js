const app = require('express')();
const db = {'test':'test'}

app.use(require('body-parser').json({}))
app.use(require('body-parser').urlencoded({}))

app.get('/', (req,res) => {
  res.send()
})

app.post('/login',
(req,res) => {
  if ( ! ( pass = db[req.body.user] ) )
    return res.send({status:'error',message:'user does not exist'});
  if ( ! ( pass == req.body.pass ) )
    return res.send({status:'error',message:'wrong password'});
  return res.send({status:'ok'});
});

app.post('/register',
(req,res) => {
  if ( ( pass = db[req.body.user] ) )
    return res.send({status:'error',message:'user does exist'});
  db[req.body.user] = req.body.pass;
  return res.send({status:'ok'});
});

app.listen(9999)
