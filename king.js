const path=require('path')
const express=require('express')
const app=express()

 app.use(express.static(path.resolve(__dirname, './src')))
app.listen(4000, function(){
  console.log('App is now running on port 4000!');
});