import { dataSeries } from './DataSeries.js';
var SeriesTbody = document.getElementById('Series');
var AvgTemporadas = document.getElementById("AvgTemporadas");
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = "".concat(getAvgTemporadas(dataSeries));
function renderSeriesInTable(Series) {
    console.log('Desplegando Series');
    Series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.className = "table-secondary";
        trElement.innerHTML = "<td>".concat(Serie.id, "</td>\n                             <td>").concat(Serie.nombre, "</td>\n                             <td>").concat(Serie.canal, "</td>\n                             <td>").concat(Serie.temporadas, "</td>");
        SeriesTbody.appendChild(trElement);
    });
}
function getAvgTemporadas(Series) {
    var AvgTemporadas = 0;
    Series.forEach(function (Serie) { return AvgTemporadas = AvgTemporadas + Serie.temporadas; });
    return AvgTemporadas / Series.length;
}
