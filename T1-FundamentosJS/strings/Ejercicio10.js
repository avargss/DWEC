function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
  
  // all output "equipmentClassName"
  console.log(camelize("JavaScript Exercises"));
  console.log(camelize("JavaScript exercises"));
  console.log(camelize("JavaScriptExercises"));