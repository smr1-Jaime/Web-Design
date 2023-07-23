//Obtener referencias a los elementos del DOM
const dropzone = document.getElementById('dropzone')
const preview = document.getElementById('preview')

//Evitar el comportamiento predeterminado de arrastrar y soltar
dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
})

//Procesar el archivo cuando se suelta en la zona de arrastre
dropzone.addEventListener('drop', function(e){
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    //Verificar si el archivo es una imagen
    if (file.type.match('image.*')) {
        const reader = new FileReader();

        //leer el archivo como una URL de datos
        reader.readAsDataURL(file);

        //Manejar el evento de carga del archivo
        reader.onload = function(e) {
            //Mostrar la imagen en la página
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
    } else {
        alert('El archivo no es una imagen válida.');
    }
});