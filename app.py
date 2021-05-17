# Importamos todo lo necesario
import os
from flask import Flask, render_template, request

# instancia del objeto Flask
app = Flask(__name__)
# Carpeta de subida
app.config["UPLOAD_FOLDER"] = "./upload"


@app.route("/", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        # obtenemos el archivo del input "archivo"
        f = request.files["file"]
        filename = f.filename
        # Guardamos el archivo en el directorio "Archivos PDF"
        f.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        # Retornamos una respuesta satisfactoria
        return "{'success': True}"

    # renderiamos la plantilla "formulario.html"
    return render_template("./index.html")


if __name__ == "__main__":
    # Iniciamos la aplicación
    app.run(host="0.0.0.0", port=8181)
