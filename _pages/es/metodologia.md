---
title: Medición del progreso en los Objetivos de Desarrollo Sostenible
language: es
permalink: /es/metodologia/
layout: page
---

## Medición del progreso  

Medir y hacer el seguimiento del progreso con información confiable es clave para comprender cómo avanza la Comunidad Autónoma de Euskadi hacia el logro de los ODS.  

Medir de cerca el progreso de cada indicador no solo ilustra dónde se está progresando, o en qué áreas no se están logrando avances y se pueden concentrar sus esfuerzos, sino que además permite comunicar cómo le está yendo a la Comunidad Autónoma de Euskadi en la ejecución de la Agenda 2030 de una manera abierta y transparente. El informe de seguimiento puede constituir una herramienta para comprender mejor el éxito de las políticas y acciones para alcanzar las distintas metas. También puede actuar como una señal clara para que se puedan reajustar o desarrollar políticas efectivas basadas en evidencia para ayudar a garantizar que se alcancen los objetivos.
 
## Metodología  
   
Con la intención de realizar una evaluación simple y transparente, se ha desarrollado una metodología basada en la 
[nota técnica sobre la medición del progreso de 2023](https://unstats.un.org/sdgs/files/report/2023/Progress_Chart_Technical_Note_2023.pdf) utilizada por la División de Estadística de Naciones Unidas.  

Al evaluar el progreso de los ODS, la dirección normativa de una serie de datos indica el resultado deseable para su valor. Un valor más alto es deseable para series de datos con una dirección normativa creciente; lo contrario ocurre con aquellas con una dirección normativa decreciente. La dirección deseada para cada indicador o serie se ha tomado de la [nota técnica sobre la medición del progreso de 2024](https://unstats.un.org/sdgs/files/report/2024/Technical_Note_for_Progress_Assessment_2024.pdf)

Un indicador puede contener múltiples series de datos y/o desgloses por diferentes dimensiones (como edad, sexo, ubicación, etc.). En estos casos, para la evaluación del progreso solo se seleccionan los datos de las series y desgloses que mejor representan a toda la población de de la Comunidad Autónoma de Euskadi.

Se aplica a nivel de C.A. de Euskadi el objetivo marcado por Naciones Unidas para el conjunto del mundo. 

La evaluación otorga una puntuación a cada uno de los indicadores. Se distingue entre indicadores que tienen objetivos numéricos para 2030 y aquellos que no los tienen.  

### Indicadores con valores objetivo para 2030

Para los indicadores que tienen valores objetivo para 2030 y al menos dos puntos de datos diferentes (uno para la línea de base, normalmente 2015, y otro para el último año), se asigna una puntuación mediante el cálculo de tasas de crecimiento. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre el año de referencia (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t-b}} - 1$$

<p>A continuación, se utiliza la 𝐶𝐴𝐺𝑅𝑎 del paso anterior para extrapolar el valor esperado (𝑣2030𝑒) para la serie en 2030, suponiendo que se mantenga el ritmo de progreso actual:</p>

$$v_{2030}^{e} = v_{t} \times (1 + CAGR_{a})^{2030 - t}$$

Por último, se asigna una puntuación a la serie según los siguientes criterios:


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-fymr{border-color:inherit;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>

<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Puntuación</th>
    <th class="tg-fymr">Condición</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">3</td>
    <td class="tg-0pky">$\frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} \geq 0.95$</td>
  </tr>
  <tr>
    <td class="tg-0pky">2</td>
    <td class="tg-0pky">$0.10 \leq \frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} < 0.95$</td>
  </tr>
  <tr>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">$\frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} < 0.10$</td>
  </tr>
</tbody>
</table>

<br><br>  

Donde:
<br><br> 
$𝑏$ es el año base (normalmente 2015)<br>
$𝑡$ es el último año para el que hay dato (por ejemplo: 2022)<br>
$𝑣_{b}$ es el valor base en el año b<br>
$𝑣_{𝑡}$ es el valor del último año 𝑡<br>
$𝑣_{2030}$ es el valor objetivo para 2030<br>
$𝑣_{2030}^{e}$ es el valor esperado para 2030

<br><br> 
### Indicadores sin valores objetivo numéricos 

Se asigna una puntuación a los indicadores que no tienen valores objetivo para 2030, y que cuentan con al menos dos puntos de datos, mediante el cálculo de la tasa de crecimiento anual compuesta. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre la línea de base (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t - b}} - 1$$

A continuación, se asigna una puntuación al indicador según los siguientes criterios:

<p>Si el aumento es deseable:</p>

<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Puntuación</th>
    <th class="tg-fymr">Condición</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">3</td>
    <td class="tg-0pky">$\text{CAGR}_{a} \geq 0.02$ </td>
  </tr>
  <tr>
    <td class="tg-0pky">2</td>
    <td class="tg-0pky">$0.005 \leq \text{CAGR}_{a} < 0.02$</td>
  </tr>
  <tr>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">$\text{CAGR}_{a} < 0.005$</td>
  </tr>
</tbody>
</table>

<br><br> 
<p>Si el descenso es deseable:</p>


<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Puntuación</th>
    <th class="tg-fymr">Condición</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">3</td>
    <td class="tg-0pky">$\text{CAGR}_{a} \leq -0.02$ </td>
  </tr>
  <tr>
    <td class="tg-0pky">2</td>
    <td class="tg-0pky">$-0.02 < \text{CAGR}_{a} \leq -0.005$ </td>
  </tr>
  <tr>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">$\text{CAGR}_{a} > -0.005$</td>
  </tr>
</tbody>
</table>

<br><br>
En algunos casos, los valores de la serie son tasas de crecimiento (por ejemplo, Indicador 8.1.1: Tasa de crecimiento anual del PIB per cápita). Calcular la CAGR de las tasas de crecimiento no tendría sentido y se utiliza el criterio experto para asignar la puntuación.


Las categorías de progreso asignadas se describen a continuación:

<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">Puntuación</th>
    <th class="tg-fymr">Categoría</th>
    <th class="tg-fymr">Símbolo</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">3</td>
    <td class="tg-0pky">Meta alcanzada o en vías de alcanzarla</td>
    <td class="tg-0pky"><img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/alcanzado.png?raw=true" alt="Alcanzado" width="150"></td>
  </tr>
  <tr>
    <td class="tg-0pky">2</td>
    <td class="tg-0pky">Progreso razonable, pero es necesario acelerarlo</td>
    <td class="tg-0pky"><img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/en_progreso.png?raw=true" alt="En progreso" width="150"></td>
  </tr>
  <tr>
    <td class="tg-0pky">1</td>
    <td class="tg-0pky">Estancamiento o retroceso</td>
    <td class="tg-0pky"><img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/retroceso.png?raw=true" alt="Retroceso" width="150"></td>
  </tr>
  <tr>
    <td class="tg-0pky"> - </td>
    <td class="tg-0pky"> No evaluado </td>
    <td class="tg-0pky"><img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/no_evaluado.png?raw=true" alt="No evaluado" width="150"></td>
  </tr>
</tbody>
</table>

<br>
###No evaluado

En algunos casos no es posible medir el progreso de manera fiable u objetiva:

-	Cuando el indicador disponible para la CA de Euskadi no está alineado con la metodología del indicador oficial de las Naciones Unidas. En estos casos se utiliza un proxy o medición sustitutiva, pero en ocasiones no mide lo mismo.
-	Cuando no existe una serie temporal suficiente para evaluar el progreso. 
-	Cuando la evaluación descontextualizada no es posible, dada la complejidad del tema. Por ejemplo, es el caso del indicador 2.c.1 Indicador de anomalías en los precios de los alimentos. Este indicador pretende medir la actuación de un país para mantener estables los precios de los mercados, pero cuando los precios aumentan mucho por la situación internacional (por ejemplo, en 2023-2024), el país no tiene gran capacidad para mantener los precios. 

###Datos no disponibles

Actualmente no existen datos para este indicador, pero se están estudiando distintas fuentes para ofrecer datos próximamente.

###No aplicable

Ciertos indicadores no se pueden aplicar a la CA de Euskadi, por distintos motivos:

-	No corresponde, por su nivel de desarrollo: Por ejemplo, el indicador 10.6.1 Proporción de miembros y derechos de voto de los países en desarrollo en organizaciones internacionales no es adecuado para Euskadi, ya que no es un país en desarrollo.
-	Lo que se quiere medir, no existe o no es significativo: por ejemplo, el indicador 3.3.3 Incidencia de la malaria por cada 1.000 habitantes no es aplicable, puesto que se trata de una enfermedad tropical, inexistente en Euskadi.
-	Se refiere a una norma o estructura institucional que no corresponde a Euskadi: por ejemplo, el indicador 12.4.1 Número de partes en los acuerdos ambientales multilaterales internacionales sobre desechos peligrosos y otros productos químicos que cumplen sus compromisos y obligaciones de transmitir información como se exige en cada uno de esos acuerdos, se refiere a un acuerdo internacional suscrito por los estados, por lo que no se puede aplicar a Euskadi.
-	Se trata de indicadores de medición global: por ejemplo, el indicador 17.10.1 Promedio arancelario mundial ponderado.

<br><br>    


### Consideraciones y excepciones    
Debido a la naturaleza de los datos, se han definido una serie de consideraciones y excepciones:  

1. Cuando el valor del último año cumple con el objetivo, se considera que se ha alcanzado la meta, independientemente de la tendencia en los últimos años.
2. Cuando el valor del último año es cercano (diferencia máxima de 1%) al 0% o 100%, siendo éste el objetivo, se considera que se ha alcanzado la meta. 
3. Cuando no hay datos en 2015, se utiliza el primer año disponible después o antes de 2015 que permita tener al menos 2 valores.   
4. A falta de una fecha objetivo especificada, se supone que 2030 es el período objetivo.   
5. Si el año objetivo fuera pasado, se evalua utilizando la metodología con meta hasta el año de la meta (*y*).  
6. Se requiere un mínimo de dos años de datos para calcular la medida de progreso. 
7. Las estimaciones de progreso simplifican demasiado la realidad. Es necesario dar contexto al progreso con otra información relevante.  
8. Se necesita tiempo para que los datos reflejen el impacto de las políticas; cuanto más larga sea la serie temporal, mejor será la metodología para medir el progreso.  
9. A los indicadores binarios se les asignará una de estas 2 categorías:  
   a. “Meta alcanzada” en caso afirmativo.   
   b. “Estancamiento o retroceso” si es “no”.  
10. Excepciones específicas:


<table class="tg">
<thead>
  <tr>
    <th class="tg-fymr">nº indicador</th>
    <th class="tg-fymr">Título del indicador</th>
    <th class="tg-fymr">Meta</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">1.a.2</td>
    <td class="tg-0pky">Proporción del gasto público total que se dedica a servicios esenciales (educación, salud y protección social)   </td>
    <td class="tg-0pky">Se ha considerado como meta la media de la UE para el indicador </td>
  </tr>
  <tr>
    <td class="tg-0pky">5.4.1 </td>
    <td class="tg-0pky">Proporción de tiempo dedicado al trabajo doméstico y asistencial no remunerado, desglosada por sexo, edad y ubicación </td>
    <td class="tg-0pky">Para poder calcular el progreso hacia el objetivo de reparto equitativo de las funciones parentales y las responsabilidades familiares, se valora la relación entre la proporción de tiempo de las mujeres y el de los hombres, con un objetivo deseado de 1</td>
  </tr>
</tbody>
</table>

