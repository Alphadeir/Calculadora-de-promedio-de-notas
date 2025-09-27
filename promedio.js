function calcularPromedio(event) {
    const notas = [];
    const cantidadMaterias = document.getElementById('cantidad_materias').value;
    for (let i = 1; i <= cantidadMaterias; i++) {
        const nota = parseFloat(document.querySelector(`input[name="nota${i}_1"]`).value);
        if (!isNaN(nota)) {
            notas.push(nota);
        }
    }
    const promedio = notas.length > 0 ? (notas.reduce((a, b) => a + b) / notas.length) : 0;
    alert(`El promedio de notas es: ${promedio.toFixed(2)}`);
}
