// Objeto Libro
function Libro(titulo, autor, precio) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = precio;
}

// Array de libros
let libros = [
  new Libro('Don Quijote de la Mancha', 'Miguel Cervantes', 9.99),
  new Libro('Vida Nekojita', 'Miguel Cervantes', 18.99),
  new Libro('Skyrim - TESO', 'Miguel Cervantes', 23.99),
  new Libro('Gremio de ladrones', 'Miguel Cervantes', 35.99),
  new Libro('Akihabara', 'Miguel Cervantes', 40.99),
  new Libro('Cien años de soledad', 'Gabriel Marquez', 7.99),
  new Libro('Canto de hadas', 'Gabriel Marquez', 13.99),
  new Libro('Misterios V.2', 'Gabriel Marquez', 25.99),
  new Libro('Black Clover', 'Gabriel Marquez', 32.99),
  new Libro('Vietnam en viernes', 'Gabriel Marquez', 49.99),
  new Libro('1984', 'George Orwell', 8.99),
  new Libro('Histeria polar', 'George Orwell', 12.99),
  new Libro('Profe aprobame porfa', 'George Orwell', 28.99),
  new Libro('Amigos se escribe con H', 'George Orwell', 34.99),
  new Libro('La cólera de la serpiente', 'George Orwell', 46.99)
];

// Función de orden superior para filtrar libros por autor
function filtrarPorAutor(autor) {
  return libros.filter(function(libro) {
      return libro.autor === autor;
  });
}

function showMenu() {
  let option = prompt("Por favor, selecciona una opción: \n 1. Calculadora \n 2. Login \n 3. Mostrar todos los libros \n 4. Filtrar libros por autor \n 5. Salir del menú");
  
  switch(option) {
    case '1':
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));
      let operation = prompt("Selecciona una operación (suma, resta, multiplicación, división):");
      let operationResult = operation.toLocaleLowerCase();

      switch(operationResult) {
        case 'suma':
          alert(num1 + num2);
          break;
        case 'resta':
          alert(num1 - num2);
          break;
        case 'multiplicacion':
          alert(num1 * num2);
          break;
        case 'division':
          alert(num1 / num2);
          break;
        default:
          alert("Operación no válida");
      }
      break;
    case '2':
      let username = prompt("Ingresa tu nombre de usuario: \n (User: admin)");
      let password = prompt("Ingresa tu contraseña: \n (Pass: 1234)");
      if(username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
      break;
    case '3':
      // Mostrar todos los libros
      let listaLibros = 'Todos los libros:\n';
      libros.forEach(function(libro) {
          listaLibros += libro.titulo + ', Precio: $' + libro.precio + '\n';
      });
      alert(listaLibros);
      break;
    case '4':
      let autorBuscado;
      let librosFiltrados;
      do {
        autorBuscado = prompt('Ingrese el nombre del autor disponible a buscar.\n Autores disponibles:\n Miguel Cervantes\n Gabriel Marquez\n George Orwell');
        librosFiltrados = filtrarPorAutor(autorBuscado);
        if (librosFiltrados.length === 0) {
          alert('El autor ingresado no es válido');
        }
      } while (librosFiltrados.length === 0);
      
      // Salida de los resultados
      let listaLibrosFiltrados = 'Libros del autor ' + autorBuscado + ':\n';
      librosFiltrados.forEach(function(libro) {
          listaLibrosFiltrados += 'Titulo: ' + libro.titulo + ', Precio: $' + libro.precio + '\n';
      });
      alert(listaLibrosFiltrados);
      break;
    case '5':
      alert('Has salido del menú');
      break;
    default:
      alert('Opción no válida');
  }
  return option;
}

let option;
do{
  option = showMenu();
}while (option != "5")