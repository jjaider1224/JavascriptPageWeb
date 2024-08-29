document.getElementById("procesarBtn").addEventListener("click", function () {
    let erroresArcoseno = 0, erroresArcocoseno = 0, erroresRaizCuadrada = 0, erroresDivision = 0, erroresLogaritmo = 0;

    for (let i = 0; i < 1000; i++) {
        // Generar valores aleatorios entre -1 y 1
        let a = Math.random() * 2 - 1;
        let b = Math.random() * 2 - 1;
        let c = Math.random() * 2 - 1;
        let d = Math.random() * 2 - 1;
        let e = Math.random() * 2 - 1;
        let g = Math.random() * 2 - 1;
        let h = Math.random() * 2 - 1;
        let i = Math.random() * 2 - 1;
        let k = Math.random() * 2 - 1;
        let p = Math.random() * 2 - 1;
        let u = Math.random() * 2 - 1;

        // Intentar calcular las funciones
        try { Math.acos(a - b); } catch { erroresArcocoseno++; }
        try { Math.asin(b * b - Math.sqrt(c - d)); } catch { erroresArcoseno++; }
        try { Math.sqrt(c - d); } catch { erroresRaizCuadrada++; }
        try { let division = d / e; } catch { erroresDivision++; }
        try { Math.log(p); } catch { erroresLogaritmo++; }
    }

    let totalErrores = erroresArcoseno + erroresArcocoseno + erroresRaizCuadrada + erroresDivision + erroresLogaritmo;
    
    // Actualizar tabla
    document.getElementById("totalArcoseno").innerText = erroresArcoseno;
    document.getElementById("totalArcocoseno").innerText = erroresArcocoseno;
    document.getElementById("totalRaizCuadrada").innerText = erroresRaizCuadrada;
    document.getElementById("totalDivision").innerText = erroresDivision;
    document.getElementById("totalLogaritmo").innerText = erroresLogaritmo;

    document.getElementById("porcentajeArcoseno").innerText = ((erroresArcoseno / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("porcentajeArcocoseno").innerText = ((erroresArcocoseno / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("porcentajeRaizCuadrada").innerText = ((erroresRaizCuadrada / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("porcentajeDivision").innerText = ((erroresDivision / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("porcentajeLogaritmo").innerText = ((erroresLogaritmo / totalErrores) * 100).toFixed(2) + "%";

    // Mostrar gráfico
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Tipo de Error', 'Cantidad'],
            ['Arcoseno', erroresArcoseno],
            ['Arcocoseno', erroresArcocoseno],
            ['Raíz Cuadrada', erroresRaizCuadrada],
            ['División', erroresDivision],
            ['Logaritmo Natural', erroresLogaritmo]
        ]);

        var options = {
            title: 'Errores por tipo',
            is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('grafico'));
        chart.draw(data, options);
    }
});
