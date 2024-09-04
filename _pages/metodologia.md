---
title: Medición del progreso en los Objetivos de Desarrollo Sostenible
language: es
permalink: /metodologia/
layout: page
---

## Introducción

La [Agenda 2030 para el Desarrollo Sostenible](https://www.un.org/sustainabledevelopment/es/), adoptada por todos los Estados miembros de las Naciones Unidas en 2015, proporciona un programa para mejorar la economía, la sociedad y el medio ambiente de una forma sostenible. En esencia, los 17 Objetivos de Desarrollo Sostenible (ODS) son una llamada universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas en todo el mundo puedan disfrutar de paz y prosperidad.  

Los objetivos están respaldados por un marco de indicadores mundiales que permiten hacer el seguimiento e informar sobre el progreso. Cubren una amplia gama de cuestiones sociales, ambientales y económicas con un enfoque en las personas más vulnerables y el compromiso de “no dejar a nadie atrás”. Para complementar los objetivos mundiales, se alienta a los distintos gobiernos a desarrollar un plan de implementación propio que se centre en indicadores que aborden contextos y prioridades específicos para lograr los ODS.  

Para apoyar la implementación interna en la Comunidad Autónoma de Euskadi de los ODS con los que el Gobierno vasco se ha comprometido, se ha desarrollado un marco de indicadores específico que 
incluye indicadores diseñados en coordinación con los organismos de estadística de las comunidades autónomas, e indicadores definidos dentro del Foro Multiagente de Transición Social y Agenda 2030 en Euskadi.

## Medición del progreso  

Medir y hacer el seguimiento del progreso con información confiable es clave para comprender cómo avanza la Comunidad Autónoma de Euskadi hacia el logro de los ODS.  

Medir de cerca el progreso de cada indicador no solo ilustra dónde se está progresando, o en qué áreas no se están logrando avances y se pueden concentrar sus esfuerzos, sino que además permite comunicar cómo le está yendo a la Comunidad Autónoma de Euskadi en la ejecución de la Agenda 2030 de una manera abierta y transparente. El informe de seguimiento puede constituir una herramienta para comprender mejor el éxito de las políticas y acciones para alcanzar las distintas metas. También puede actuar como una señal clara para que se puedan reajustar o desarrollar políticas efectivas basadas en evidencia para ayudar a garantizar que se alcancen los objetivos.
 
## Metodología  
   
Con la intención de realizar una evaluación simple y transparente, se ha desarrollado una metodología basada en la 
[nota técnica sobre la medición del progreso](https://www.un.org/sustainabledevelopment/es/) utilizada por al Unidad de Estadística de Naciones Unidas.  

Un indicador puede contener múltiples series de datos y/o desgloses por diferentes dimensiones (como edad, sexo, ubicación, etc.). En estos casos, para la evaluación del progreso solo se seleccionan los datos de las series y desgloses que mejor representan a toda la población de de la Comunidad Autónoma de Euskadi.

Se aplica a nivel de C.A. de Euskadi el objetivo marcado por Naciones Unidas para el conjunto del mundo. 

La evaluación otorga una puntuación a cada uno de los indicadores. Se distingue entre indicadores que tienen objetivos numéricos para 2030 y aquellos que no los tienen.  

#### Indicadores con valores objetivo para 2030 

Para los indicadores que tienen valores objetivo para 2030 y al menos dos puntos de datos diferentes (uno para la línea de base, normalmente 2015, y otro para el último año), se asigna una puntuación mediante el cálculo de tasas de crecimiento. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre el año de referencia (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t-b}} - 1$$

A continuación, se utiliza la 𝐶𝐴𝐺𝑅𝑎 del paso anterior para extrapolar el valor esperado (𝑣2030𝑒) para la serie en 2030, suponiendo que se mantenga el ritmo de progreso actual:

$$v_{2030}^{e} = v_{t} \times (1 + CAGR_{a})^{2030 - t}$$

Por último, se asigna una puntuación a la serie según los siguientes criterios:

| **Puntuación** | **Condición**                                                     |
|----------------|--------------------------------------------------------------------|
| 3              |    $\frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} \geq 0.95$       |
| 2              |    $0.10 \leq \frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} < 0.95$|
| 1              |    $\frac{v_{2030}^{e} - v_{b}}{v_{2030} - v_{b}} < 0.10$         |


Donde:<br>
𝑏 es el año base (normalmente 2015)<br>
𝑡 es el último año para el que hay dato (por ejemplo: 2022)<br>
𝑣𝑏 es el valor base en el año b<br>
𝑣𝑡 es el valor del último año 𝑡<br>
𝑣_{2030} es el valor objetivo para 2030<br>
𝑣_{2030}^{e} es el valor esperado para 2030


#### Indicadores sin valores objetivo numéricos 

Se asigna una puntuación a los indicadores que no tienen valores objetivo para 2030, y que cuentan con al menos dos puntos de datos, mediante el cálculo de la tasa de crecimiento anual compuesta. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre la línea de base (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t - b}} - 1$$

A continuación, se asigna una puntuación al indicador según los siguientes criterios:

Si el aumento es deseable:

| **Puntuación** | **Condición**                          |
|----------------|----------------------------------------|
| 3              |  $\text{CAGR}_{a} \geq 0.02$           |
| 2              |  $0.005 \leq \text{CAGR}_{a} < 0.02$   |
| 1              |  $\text{CAGR}_{a} < 0.005$             |



Si el descenso es deseable:

| **Puntuación** | **Condición**                                    |
|----------------|--------------------------------------------------|
| 3              |  $\text{CAGR}_{a} \leq -0.02$                    |
| 2              |  $-0.02 < \text{CAGR}_{a} \leq -0.005$           |
| 1              |  $\text{CAGR}_{a} > -0.005$                      |


En algunos casos, los valores de la serie son tasas de crecimiento (por ejemplo, Indicador 8.1.1: Tasa de crecimiento anual del PIB per cápita). Calcular la CAGR de las tasas de crecimiento no tendría sentido y se utiliza el criterio experto para asignar la puntuación.

Las categorías de progreso asignadas se describen a continuación:

| **Tasa de crecimiento observado** | **Categoría**                                        | **Símbolo**                                                                 |
|:----------------------------------|:----------------------------------------------------|:---------------------------------------------------------------------------:|
| 3                                 | Meta alcanzada o en vías de alcanzarla               | <img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/alcanzado.png" alt="Alcanzado" width="50"/>  |
| 2                                 | Progreso razonable, pero es necesario acelerarlo     | <img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/en_progreso.png" alt="En progreso" width="50"/> |
| 1                                 | Estancamiento o retroceso                            | <img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/retroceso.png" alt="Retroceso" width="50"/>    |
| -                                 | No evaluado                                          | <img src="https://github.com/EUSTAT-DES/site/blob/develop/assets/img/progress/no_evaluado.png" alt="No evaluado" width="50"/>  |


### Excepciones    
Debido a la naturaleza de los datos, se han definido una serie de consideraciones y excepciones:  

1. Cuando no hay datos en 2015, se utiliza el primer año disponible después o antes de 2015 que permita tener al menos 2 valores.   
2. A falta de una fecha objetivo especificada, se supone que 2030 es el período objetivo.   
3. Si el año objetivo fuera pasado, se evalua utilizando la metodología con meta hasta el año de la meta (*y*).  
4. Se requiere un mínimo de dos años de datos para calcular la medida de progreso. 
5. Las estimaciones de progreso simplifican demasiado la realidad. Es necesario dar contexto al progreso con otra información relevante.  
6. Se necesita tiempo para que los datos reflejen el impacto de las políticas; cuanto más larga sea la serie temporal, mejor será la metodología para medir el progreso.  
7. La medida de progreso para los indicadores que comienzan por encima de la meta en su año base y cuyo progreso luego disminuye se evaluará automáticamente como "Estancamiento o retroceso".
8. A los indicadores binarios se les asignará una de estas 2 categorías:  
   a. “Meta alcanzada” en caso afirmativo.   
   b. “Estancamiento o retroceso” si es “no”.  
9. Excepciones específicas:
   a. Indicador CIF 5.3.1 - Proporción de tiempo dedicado al trabajo doméstico y de cuidados no remunerado: informa la proporción de días dedicados al trabajo doméstico y de cuidados no remunerado, por sexo. Para poder calcular el progreso hacia el objetivo de reparto equitativo de las funciones parentales y las responsabilidades familiares, el indicador se modificará antes del cálculo. Se utilizará una relación entre la proporción de tiempo de las mujeres y el de los hombres, con un objetivo deseado de 1.
