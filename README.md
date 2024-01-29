
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

Paso 2: descargar el archivo: "firebase-config.json", enviado mediante un enlace a drive. Solicitar el archivo al correo 'noesersi@gmail.com'.

Paso 3: crear archivo .env en la raíz del proyecto y añadir las siguientes keys con los datos del archivo "firebase-config.json":
    FIREBASE_PROJECT_ID=
    FIREBASE_PRIVATE_KEY_ID=
    FIREBASE_PRIVATE_KEY=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_CLIENT_ID=
    FIREBASE_AUTH_URI=
    FIREBASE_TOKEN_URI=
    FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
    FIREBASE_CLIENT_X509_CERT_URL=

Paso 4: iniciar proyecto ejecutando el comando 'node app.js'