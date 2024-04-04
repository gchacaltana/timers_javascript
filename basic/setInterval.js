
/**
 * Función principal
 * @param {*} args argumentos pasados al script  
 * @returns 
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
    let counter = parseInt(args[0]);

    // Si el argumento no es un número, se muestra un mensaje y se termina la ejecución
    if (isNaN(counter)) {
        console.log("Invalid parameter.");
        return;
    }

    console.log(`Oferta valida por ${counter} segundos`);
    const countdown = setInterval(() => {
        console.log(counter);
        counter--;
        if (counter === 0) {
            console.log('Oferta expirada!');
            clearInterval(countdown);
        }
    }, 1000);
}

main(process.argv);

// Ejecuta el script con el siguiente comando: node setInterval.js 10