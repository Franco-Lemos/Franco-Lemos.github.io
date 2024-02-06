function showMenu() {
  let option = prompt("Por favor, selecciona una opción: \n 1. Calculadora \n 2. Login \n 3. Salir del menú");

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
}while (option != "3")