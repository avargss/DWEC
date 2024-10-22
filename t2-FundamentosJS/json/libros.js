const fs = require(`fs`);

fs.readFile(`libros.json`, `utf-8`, (err, data) => {
    if (err) throw err;
    const libros = JSON.parse(data);
    console.log(libros);
    
})