 const express =require('express');
 const app=express();

 const {usersData,htmlContent}=require('./data.js')

//ruta página principal
app.get('/',(req,res)=>{
  res.send(
     htmlContent('Home'));
});

///marketing
app.get('/marketing',(req,res)=>{
    res.send(
        htmlContent('Marketing'));
});

//Developers
app.get('/developers',(req,res)=>{
   res.send(htmlContent('Developers'));
});

//QAs
app.get('/qas',(req,res)=>{
    res.send(htmlContent('QAs'));
 });

//Ventas
 app.get('/ventas',(req,res)=>{
    res.send(htmlContent('Ventas'));
 });

 //Página no encontrada
 app.use((req, res) => {
    res.status(404).send(htmlContent('404'));
  });
 
 //Servidor escuchando
 app.listen(3100,()=>{
    console.log(`Server listening on port http://localhost:3100`)
    //   console.log(`Server listening on port http://localhost:${app.port}`)
 })