// setTimeout.js

/**
 * Función principal
 * @param {*} args Lista de argumentos pasados al script
 * @returns void
 */
function main(args) {

    // Elimina los dos primeros argumentos que son el comando y el nombre del script
    args = args.slice(2);

    // Si no se pasan argumentos, se muestra un mensaje y se termina la ejecución
    if (args.length === 0) {
        console.log("No parameters passed.");
        return;
    }

    // Se obtiene el primer argumento y se convierte a entero
    seconds = parseInt(args[0]);

    // Si el argumento no es un número, se muestra un mensaje y se termina la ejecución
    if (isNaN(seconds)) {
        console.log("Invalid parameter.");
        return;
    }

    console.log("Start Main Function");

    setTimeout(() => {
        console.log(`Delayed message after ${seconds} seconds`);
    }, seconds * 1000);
}

main(process.argv);

// Ejecuta el script con el siguiente comando: node setTimeout.js 5