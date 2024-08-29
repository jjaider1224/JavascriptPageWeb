function procesar() {
    let arcosenoErrores = 0;
    let arcocosenoErrores = 0;
    let raizErrores = 0;
    let divisionErrores = 0;
    let logaritmoErrores = 0;

    for (let i = 0; i < 1000; i++) {
        let a = Math.random() * 2 - 1;
        let b = Math.random() * 2 - 1;
        let c = Math.random() * 2 - 1;
        let d = Math.random() * 2 - 1;
        let e = Math.random() * 2 - 1;
        let f = Math.random() * 2 - 1;
        let g = Math.random() * 2 - 1;

        try {
            let acosValue = Math.acos(a - b);
            if (isNaN(acosValue)) throw "Error de arcoseno";
        } catch (e) {
            arcosenoErrores++;
        }

        try {
            let asinValue = Math.asin(c * c - Math.sqrt(d - e));
            if (isNaN(asinValue)) throw "Error de arcocoseno";
        } catch (e) {
            arcocosenoErrores++;
        }

        try {
            let sqrtValue = Math.sqrt(d - f);
            if (isNaN(sqrtValue)) throw "Error de raíz cuadrada";
        } catch (e) {
            raizErrores++;
        }

        try {
            let divisionValue = c / g;
            if (isNaN(divisionValue) || !isFinite(divisionValue)) throw "Error de división";
        } catch (e) {
            divisionErrores++;
        }

        try {
            let logValue = Math.log(d - f);
            if (isNaN(logValue)) throw "Error de logaritmo natural";
        } catch (e) {
            logaritmoErrores++;
        }
    }

    let totalErrores = arcosenoErrores + arcocosenoErrores + raizErrores + divisionErrores + logaritmoErrores;

    document.getElementById("arcoseno-total").innerText = arcosenoErrores;
    document.getElementById("arcocoseno-total").innerText = arcocosenoErrores;
    document.getElementById("raiz-total").innerText = raizErrores;
    document.getElementById("division-total").innerText = divisionErrores;
    document.getElementById("logaritmo-total").innerText = logaritmoErrores;

    document.getElementById("arcoseno-percentage").innerText = ((arcosenoErrores / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("arcocoseno-percentage").innerText = ((arcocosenoErrores / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("raiz-percentage").innerText = ((raizErrores / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("division-percentage").innerText = ((divisionErrores / totalErrores) * 100).toFixed(2) + "%";
    document.getElementById("logaritmo-percentage").innerText = ((logaritmoErrores / totalErrores) * 100).toFixed(2) + "%";
}
