//Jaime Alfonso 202116525 j.alfonsor
import { Serie } from './serie.js';

import { dataSeries } from './DataSeries.js';

let SeriesTbody: HTMLElement = document.getElementById('Series')!;
const AvgTemporadas: HTMLElement = document.getElementById("AvgTemporadas")!;
renderSeriesInTable(dataSeries);
console.log('Calculando promedio');
AvgTemporadas.innerHTML = `${getAvgTemporadas(dataSeries)}`

function renderSeriesInTable(Series: Serie[]): void {
    console.log('Desplegando Series');
    Series.forEach((Serie) => {
      let trElement = document.createElement(`tr`);
      trElement.className="table-secondary"
      trElement.innerHTML = `<td>${Serie.id}</td>
                             <td>${Serie.nombre}</td>
                             <td>${Serie.canal}</td>
                             <td>${Serie.temporadas}</td>`;
      SeriesTbody.appendChild(trElement);
    });
  }

  function getAvgTemporadas( Series:Serie[]): number {
    let AvgTemporadas: number = 0;
    Series.forEach((Serie) => AvgTemporadas = AvgTemporadas + Serie.temporadas);
    return AvgTemporadas/Series.length;
  }