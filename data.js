const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

 
  function htmlContent (title){
  //Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.

    const ruta=title.toLowerCase();
    let listUsers=[];
    let informationUsers ='';
    let information =`Página principal`;
    if (ruta==='home'|| ruta==='404'){
        if  (ruta==='404') information =`Página no encontrada`;
    }else{
         //Cargamos la información de los usuarios por especialidad
        listUsers=findSpecialty(ruta);
        information=`Se han encontrado ${listUsers.length} personas`;
        listUsers.forEach((user)=>{
            informationUsers +=` <div class="card">
                            <h2>${user.name}</h2>
                            <div class="content">
                            <p>Edad:${user.age}</p>  
                            </div>
                        </div>`;
        })
    }

  
  
   

    const literal=`<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${title}</title>
                        <style>
                            body {
                            margin: 0;
                            font-family: Arial, Helvetica, sans-serif;
                            }

                            .topnav {
                            overflow: hidden;
                            background-color: #333;
                            }

                            .topnav a {
                            float: left;
                            color: #f2f2f2;
                            text-align: center;
                            padding: 14px 16px;
                            text-decoration: none;
                            font-size: 17px;
                            }

                            .topnav a:hover {
                            background-color: #ddd;
                            color: black;
                            }

                            h3{
                            margin-left: 20px;
                            }
                            .cards {
                            max-width: 1000px;
                            margin: 1em auto;
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
                            grid-gap: 20px;
                           
                            }

                            .card {
                            border: 1px solid #999;
                            border-radius: 3px;
                            display: grid;
                            grid-template-rows: max-content 70px 1fr;
                            border-color: #66936675;
                            text-align: center;
                            }
                        </style>
                    </head>
                    <body>
                    <div class="topnav">
                        <a class="active" href="/">Home</a>
                        <a href="/marketing">Marketing</a>
                        <a href="/developers">Developers</a>
                        <a href="/qas">QAs</a>
                        <a href="/ventas">Ventas</a>
                    </div>
                        <h3>${information}</h3>
                        <div class='cards'>${informationUsers}</div>
                    </body>
                    </html>`
                    return literal;
  }

  function findSpecialty(Specialty){
    let listUsers=[];

    listUsers=usersData.filter((user) => {
        return  user.specialty.toLowerCase() === Specialty;
    });
    return listUsers;
 
  }
  module.exports ={usersData,htmlContent};