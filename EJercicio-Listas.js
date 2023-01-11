/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos) 

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let listaDeCompras = ["Pan", "Leche", "Carne", "Queso", "Cereales"];

listaDeCompras.push("Aceite de Girasol");

listaDeCompras.pop();

let peliculas = [
    {
        titulo: "Mission: Impossible: Ghost Protocol", 
        director: "Brad Bird", 
        fecha: "2011"
    },
    {
        titulo: "Taken 3", 
        director: "Olivier Megaton", 
        fecha: "2014"
    }, 
    {
        titulo: "V for Vendetta", 
        director: "James McTeigue", 
        fecha: "2005"
    }
]


//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let peliculasPost2010 = peliculas.filter(obj => obj.fecha > 2010)
//console.log(peliculasPost2010);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = peliculas.map(obj => obj.director);
//console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = peliculas.map(obj => obj.titulo);
//console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresYPeliculas = directores.concat(titulos);
//console.log(directoresYPeliculas)

//- Una nueva lista que concatene la lista de directores y 
//la lista de los títulos (utilizando el factor de propagación)
let dirYPel = [...directores, ...titulos];
//console.log(dirYPel);
