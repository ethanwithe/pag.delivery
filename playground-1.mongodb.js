use("lavanderiaplus")

db.getCollection("usuario").insertOne(
    {
        "nombre": "victor",
        "apellido": "cieza",
        "correo":"frank@gmail.com",
        "username":"fran",
        "dni":"75888319"
    }
)
