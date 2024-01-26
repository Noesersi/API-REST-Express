
# API-REST-Express

API REST utilizando Node.js, Express y Firebase como base de datos. La API contiene los siguientes endpoints:
- GET /books: Devuelve una lista de todos los libros almacenados en Firebase
Firestore.
- GET /books/{id}: Devuelve los detalles de un libro específico según su ID.
- POST /books: Crea un nuevo libro con la información proporcionada en la solicitud.
- PUT /books/{id}: Actualiza la información de un libro existente según su ID.
- DELETE /books/{id}: Elimina un libro específico según su ID.


## Instalación e inicio

Paso 1: ejecutar en la consola el siguiente comando 'npm install'.

Paso 2: Copiar el archivo (firebase-config.json) enviado mediante un enlace a drive en la carpeta raíz del proyecto. Solicitar el archivo al correo 'noesersi@gmail.com'.

Paso 3: iniciar proyecto ejecutando el comando 'node app.js'