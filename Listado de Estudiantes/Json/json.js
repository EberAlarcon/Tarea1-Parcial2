const bd =[
    {"Id":0,"Apellido":"Apellido: Alarcon", "Nombre":"Nombre: Eber", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Jocay", "Telefono": "Telefono: 0969872522",
    "Correo":"Correo: eber@gmail.com"},

    {"Id":1,"Apellido":"Apellido: Santana", "Nombre":"Nombre: Carlos", "Semestre": "Semestre: Primero", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Montecristi", "Telefono": "Telefono: 0987596214",
    "Correo":"Correo: carlos@gmail.com"},

    {"Id":2,"Apellido":"Apellido: Vera", "Nombre":"Nombre: Pedro", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Nueva Esperanza", "Telefono": "Telefono: 0963698741",
    "Correo":"Correo: pedro@gmail.com"},

    {"Id":3,"Apellido":"Apellido: Villamar", "Nombre":"Nombre: Belen", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Interbarrial", "Telefono": "Telefono: 0968587848",
    "Correo":"Correo: belen@gmail.com"},

    {"Id":4,"Apellido":"Apellido: Blondet", "Nombre":"Nombre: Darel", "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Portoviejo", "Telefono": "Telefono: 0968581680",
    "Correo":"Correo: darel2214@gmail.com"},

    {"Id":5,"Apellido":"Apellido: Macias", "Nombre":"Nombre: Elvis", "Semestre": "Semestre: Tercero", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Aurora", "Telefono": "Telefono: 099423545",
    "Correo":"Correo: elvis@gmail.com"},
    
    {"Id":6,"Apellido":"Apellido: Guagua", "Nombre":"Nombre: Kevin", "Semestre": "Semestre: Septimo", 
    "Paralelo":" Paralelo: C", "Direccion":"Direccion: Cuba", "Telefono": "Telefono: 091245887",
    "Correo":"Correo: kevin@gmail.com"},

    {"Id":7,"Apellido":"Apellido: Villafuerte", "Nombre":"Nombre: Milena", "Semestre": "Semestre: Segundo", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Aurora", "Telefono": "Telefono: 0987569423",
    "Correo":"Correo: milena@gmail.com"},

    {"Id":8,"Apellido":"Apellido: Lopez", "Nombre":"Nombre: Luis", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: A", "Direccion":"Direccion: Urbirrios", "Telefono": "Telefono: 0987469621",
    "Correo":"Correo: luis@gmail.com"},
    
    {"Id":9,"Apellido":"Apellido: Moreira", "Nombre":"Nombre: Emiliano", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: B", "Direccion":"Direccion: Circunvalación", "Telefono": "Telefono: 0998305687",
    "Correo":"Correo: emiliano@gmail.com"},
]

const estudiantes = document.querySelectorAll('.nom_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('estu-id');
        bd.forEach((estudiante)=>{
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista"
                                        <div class="nom">
                                        <h2>Datos del estudiante:</h2>
                                        <h2 class="list-inline-item footer-menu"><a class="nav-link" style="color:#000000" href="index.html"> REGRESAR</a></h2>
                                        <p>${estudiante.Nombre}</p>
                                        <p>${estudiante.Apellido}</p>
                                        <p>${estudiante.Correo}</p>
                                        <p>${estudiante.Telefono}</p>
                                        <p>${estudiante.Direccion}</p>
                                        <p>${estudiante.Semestre}</p>
                                        <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

