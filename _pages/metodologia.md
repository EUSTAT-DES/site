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
   
Con la intención de realizar una evaluación simple y transparente, se ha desarrollado una metodología basada en la [nota técnica sobre la de medición del progreso] (https://unstats.un.org/sdgs/files/report/2023/Progress_Chart_Technical_Note_2023.pdf) utilizada por al Unidad de Estadística de Naciones Unidas.  

Un indicador puede contener múltiples series de datos y/o desgloses por diferentes dimensiones (como edad, sexo, ubicación, etc.). En estos casos, para la evaluación del progreso solo se seleccionan los datos de las series y desgloses que mejor representan a toda la población de referencia.

La evaluación otorga una puntuación a cada uno de los indicadores. Se distingue entre indicadores que tienen objetivos numéricos para 2030 y aquellos que no los tienen.  

#### Indicadores con valores objetivo para 2030 

Para los indicadores que tienen valores objetivo para 2030 y al menos dos puntos de datos diferentes (uno para la línea de base, normalmente 2015, y otro para el último año), se asigna una puntuación mediante cálculos. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre el año de referencia (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t-b}} - 1$$

A continuación, se utiliza la 𝐶𝐴𝐺𝑅𝑎 del paso anterior para extrapolar el valor esperado (𝑣2030𝑒) para la serie en 2030, suponiendo que se mantenga el ritmo de progreso actual:

$$v_{2030}^{e} = v_{t} \times (1 + CAGR_{a})^{2030 - t}$$

Por último, se asigna una puntuación a la serie según los siguientes criterios:

3   si   𝑣2030𝑒−𝑣𝑏 𝑣2030−𝑣𝑏 ≥0.95  
2   si  0.10≤𝑣2030𝑒−𝑣𝑏 𝑣2030−𝑣𝑏 
1   si  𝑣2030𝑒−𝑣𝑏 𝑣2030−𝑣𝑏 

Donde:

<0.10 <0.95 𝑏 es el año base (normalmente 2015, y si no hay dato para ese año, el año más cercano al 2015 que permita tener al menos 3 valores en la serie)
𝑡 es el último año para el que hay dato (por ejemplo: 2022) 
𝑣𝑏 es el valor base en el año b 
𝑣𝑡 es el valor del último año 𝑡 
𝑣2030 es el valor objetivo para 2030 
𝑣2030𝑒 es el valor esperado para 2030 


#### Indicadores sin valores objetivo numéricos 

Se asigna una puntuación a los indicadores que no tienen valores objetivo para 2030, y que cuentan con al menos dos puntos de datos, mediante el cálculo de la tasa de crecimiento anual compuesta. Primero, se calcula la tasa de crecimiento anual compuesta real (𝐶𝐴𝐺𝑅𝑎) entre la línea de base (b) y el último año (t) para el cual hay datos disponibles:

$$CAGR_{a} = \left( \frac{v_{t}}{v_{b}} \right)^{\frac{1}{t - b}} - 1$$

A continuación, se asigna una puntuación al indicador según los siguientes criterios:
Si el aumento es deseable:
3 si CAGR_{a}  ≥0.02
2 si  0.005≤𝐶𝐴𝐺𝑅𝑎 <0.02 
1 si 𝐶𝐴𝐺𝑅𝑎 <0.005 

Si el descenso es deseable:
3 si  𝐶𝐴𝐺𝑅𝑎 ≤−0.02  
2 si  −0.005≥𝐶𝐴𝐺𝑅𝑎 >−0.02 
1 si 𝐶𝐴𝐺𝑅𝑎 >−0.005  


El progreso se mide utilizando el crecimiento durante el período observado y se calcula mediante una tasa de crecimiento anual compuesta,[^1].  


En algunos casos, los valores de la serie son tasas de crecimiento (por ejemplo, Indicador 8.1.1: Tasa de crecimiento anual del PIB per cápita). Calcular la CAGR de las tasas de crecimiento no tendría sentido y se utiliza el criterio experto para asignar la puntuación.

Las categorías de progreso asignadas se describen a continuación:

| **Tasa de crecimiento observado** | **Categoría**                                        | **Símbolo**                                                                 |
|:----------------------------------|:----------------------------------------------------|:---------------------------------------------------------------------------:|
| 3                                 | Meta alcanzada o en vías de alcanzarla               | ![Alcanzado](https://ruta_al_recurso/alcanzado.png)                         |
| 2                                 | Progreso razonable, pero es necesario acelerarlo     | ![En progreso](https://ruta_al_recurso/en_progreso.png)                     |
| 1                                 | Retroceso                                            | ![Retroceso](https://ruta_al_recurso/retroceso.png)                         |
| -                                 | No evaluado                                          | ![No evaluado](https://ruta_al_recurso/no_evaluado.png)                     |



### Considerations and Exceptions    
Due to the nature of the data, a series of considerations and exceptions have been defined:  


1. Should there be no data in 2015, the first available year following 2015 will be used.[^4]    
   a. For indicators with a reference period across two years, for example a reference period of April 1, 2015- March 31, 2016:  
      i. The first year is used as the reference period (e.g., if the reference period is 2015-16, then 2015 is used).     
   b. Even when the target results from a policy that was implemented after 2015, the base year for calculating the progress measure will be 2015 when data exists. This aligns with Statistics Canada quality dimensions coherence and comparability.  
2. Similar to (1), should the target year be March 20xx, then 20xx-1 will be used as the target year in the calculation since it is the last complete year of data. For example, the year 2022 will be used in the calculation of the progress for an indicator with a target of March 2023.  
3. If the target value is zero, it will be replaced by 0.001 in the calculation of the progress measure.  
4. In the absence of a specified target date, it is assumed that 2030 is the target period.   
5. Should the target year be in the past, the following will be done:  
   a. Calculate using the methodology with target until the target year (*y*).  
   b. Continue calculating using the methodology with target, keeping the now obsolete target value and year.   
   c. Include a note to users explaining how to interpret the information.  
   d. Should a new target value and year be introduced, start using the new values in the calculation, and recalculate from *y+1*.  
   e. Include a note to users explaining the change.  
6. A minimum of two years of data is required to calculate the progress measure.  
7. To calculate the summary measure for a target, ambition or goal, a minimum of 60% of indicators for which it is possible to calculate a progress measure is needed.  
8. The progress estimates oversimplify reality. Users should use the progress measure in addition to specific indicator values and other relevant information.  
9. The impact of policies takes time to be reflected in the data; the longer the time series, the better the methodology will be to measure progress.  
10. The progress measure for indicators that start above the target at their base year for which progress then declines will be automatically overridden to “Deterioration”[^5].  
11. Binary indicators will be assigned one of these 2 categories:  
   a. “Target achieved” if “yes”.   
   b. “Target not achieved” if “no”.  
12. For indicators with two targets, for example CIF target 3.8 - By 2025, 95% coverage of all childhood vaccines and 90% coverage of all adolescent vaccines, the result that is the farthest from its target is used as progress measure.  
13. Specific exception: CIF indicator 5.3.1 - Proportion of time spent on unpaid domestic and care work is reporting the proportion of day spent on unpaid domestic and care work, by sex. To be able to calculate the progress toward the target Equal sharing of parenting roles and family responsibilities, the indicator will be modified prior to calculation. A ratio of the proportion of time for women to that for men will be used, with a desired target of 1.   


 
## Future Work   

Statistics Canada’s SDG team is working with the Open SDG community to integrate the indicator-level progress measurement into the back end of the Open SDG platform. It will be represented by a label and an icon describing the most recently calculated progress for each indicator. Once implemented, the functionality will be available for all Open SDG users. Due to the complexity of the indicator frameworks, the functionality will only include indicators that report an aggregate value at first – indicators composed solely of sub-components, such as CIF indicator 3.9.1 - *Incidence of selected diseases*, will require manual calculation and manual input of the progress labels to be displayed on the Open SDG data hub. The Statistics Canada team will continue improving the automatic calculation, as well as developing the aggregate measurement to be integrated into the platform.   


## Metadata   

##### Canadian Indicator Framework  

| Indicator number | Indicator name                                                                                                                                                                | Desired direction |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| 1.1.1            | Poverty rate, as measured by Canada’s official poverty line                                                                                                                   | Decrease          |
| 1.2.1            | Prevalence of asset resilience                                                                                                                                                | Increase          |
| 2.1.1            | Prevalence of food insecurity                                                                                                                                                 | Decrease          |
| 2.2.1            | Index of Agri-Environmental Sustainability                                                                                                                                    | Increase          |
| 3.1.1            | Percentage of Canadians who report eating fruits and vegetables 5 or more times per day                                                                                       | Increase          |
| 3.2.1            | Prevalence of vaping among youth                                                                                                                                              | Decrease          |
| 3.3.1            | Percentage of the population that is overweight or obese                                                                                                                      | Decrease          |
| 3.4.1            | Prevalence of harmful alcohol use                                                                                                                                             | Decrease          |
| 3.5.1            | Percentage of Canadians who are satisfied or very satisfied with their life                                                                                                   | Increase          |
| 3.6.1            | Percentage of Canadians who perceived their overall health and social well-being as very good to excellent                                                                    | Increase          |
| 3.7.1            | Percentage of Canadians who perceived their mental health as very good to excellent                                                                                           | Increase          |
| 3.8.1            | Vaccination rates for selected diseases                                                                                                                                       | Increase          |
| 3.9.1            | Incidence of selected diseases                                                                                                                                                | Decrease          |
| 3.10.1           | Mortality rate for selected causes of death                                                                                                                                   | Decrease          |
| 3.11.1           | Tuberculosis incidence per 100,000 population in Inuit Nunangat                                                                                                               | Decrease          |
| 3.12.1           | Incidence of opioid and stimulant overdose related harms                                                                                                                      | Decrease          |
| 3.13.1           | Prevalence of cigarette smoking                                                                                                                                               | Decrease          |
| 4.1.1            | High school completion rate                                                                                                                                                   | Increase          |
| 4.2.1            | Post-secondary education attainment rate                                                                                                                                      | Increase          |
| 5.1.1            | Proportion of the population who self-reported being sexually assaulted in the last 12 months                                                                                 | Decrease          |
| 5.1.2            | Proportion of women and girls aged 15 years and older subjected to physical, sexual or psychological violence by a current or former intimate partner in the last 12 months   | Decrease          |
| 5.2.1            | Proportion of leadership roles held by women                                                                                                                                  | Increase          |
| 5.3.1            | Proportion of time spent on unpaid domestic and care work                                                                                                                     | Decrease          |
| 6.1.1            | Number of long-term drinking water advisories on public systems on reserves                                                                                                   | Decrease          |
| 6.2.1            | Percentage of municipalities across Canada with sustained drinking water advisories                                                                                           | Decrease          |
| 6.3.1            | Water use growth rate                                                                                                                                                         | Decrease          |
| 6.4.1            | Water quality in Canadian rivers                                                                                                                                              | Increase          |
| 7.1.1            | Annual energy savings resulting from adoption of energy efficiency codes, standards and practices                                                                             | Increase          |
| 7.2.1            | Total energy consumption per capita                                                                                                                                           | Decrease          |
| 7.3.1            | Proportion of electricity generated from renewable and non-greenhouse gas emitting sources                                                                                    | Increase          |
| 8.1.1            | Unemployment rate                                                                                                                                                             | Decrease          |
| 8.2.1            | Proportion of employees earning less than 66% of the median hourly wage for permanent full-time employees                                                                     | Decrease          |
| 8.3.1            | Proportion of youth not in education, employment or training                                                                                                                  | Decrease          |
| 8.4.1            | Rate of involuntary part-time work                                                                                                                                            | Decrease          |
| 8.5.1            | Gross domestic product per capita                                                                                                                                             | Increase          |
| 8.6.1            | Proportion of jobs in the environmental and clean technology products sector                                                                                                  | Increase          |
| 9.1.1            | Proportion of innovation in environment-related technology                                                                                                                    | Increase          |
| 9.2.1            | Gross domestic expenditure on research and development intensity                                                                                                              | Increase          |
| 9.3.1            | Proportion of households that have access to broadband Internet service at speeds of 50/10 Mbps                                                                               | Increase          |
| 9.4.1            | Proportion of Canadians that have access to the latest generally deployed mobile wireless technology                                                                          | Increase          |
| 9.5.1            | Greenhouse gas emissions per dollar of value-added from the production of infrastructure assets                                                                               | Decrease          |
| 9.6.1            | Number of low carbon recharging and refueling stations under development and completed along major highways, and in rural and urban areas across Canada                       | Increase          |
| 9.7.1            | Number of low carbon recharging and refueling stations under development and completed in public places, on-street, at apartment buildings, retail outlets, and the workplace | Increase          |
| 10.1.1           | Gini Coefficient                                                                                                                                                              | Decrease          |
| 10.2.1           | Proportion of the population reporting discrimination or unfair treatment                                                                                                     | Decrease          |
| 10.3.1           | Median hourly wage ratio                                                                                                                                                      | Increase          |
| 10.4.1           | Median household after-tax income                                                                                                                                             | Increase          |
| 11.1.1           | Growth rate of people experiencing chronic homelessness                                                                                                                       | Decrease          |
| 11.2.1           | Proportion of households in core housing need                                                                                                                                 | Decrease          |
| 11.3.1           | Percentage of the population living in areas where air pollutants concentrations are less or equal to the 2020 Canadian Ambient Air Quality Standards                         | Increase          |
| 11.4.1           | Percentage of the population living within 500 meters of a public transport stop                                                                                              | Increase          |
| 11.5.1           | Percentage of the population using shared or active transportation for commuting                                                                                              | Increase          |
| 11.6.1           | Total waste disposal per capita                                                                                                                                               | Decrease          |
| 11.7.1           | Percentage of the population aged 12 and over who reported their sense of belonging to their local community as being very strong or somewhat strong                          | Increase          |
| 12.1.1           | Proportion of new light duty vehicle registrations that are zero-emission vehicles                                                                                            | Increase          |
| 12.2.1           | Proportion of businesses that adopted selected environmental protection activities and management practices                                                                   | Increase          |
| 12.3.1           | Total waste diversion per capita                                                                                                                                              | Increase          |
| 13.1.1           | Greenhouse gas emissions                                                                                                                                                      | Decrease          |
| 13.2.1           | Frequency of selected natural disasters                                                                                                                                       | Decrease          |
| 13.3.1           | Proportion of municipal organization who factored climate change adaptation into their decision-making process                                                                | Increase          |
| 14.1.1           | Proportion of marine and coastal areas conserved                                                                                                                              | Increase          |
| 14.2.1           | Proportion of fish stocks that are sustainably harvested                                                                                                                      | Increase          |
| 15.1.1           | Proportion of native wild species ranked secure or apparently secure according to the national extinction risk level                                                          | Increase          |
| 15.2.1           | Proportion of species at risk showing progress towards their population and distribution objectives                                                                           | Increase          |
| 15.3.1           | Proportion of terrestrial (land and freshwater) areas conserved                                                                                                               | Increase          |
| 15.4.1           | Proportion of the forest area under an independently verified forest management certification scheme                                                                          | Increase          |
| 15.5.1           | Forest area as a proportion of total land area                                                                                                                                | No change         |
| 16.1.1           | Proportion of Canadians who reported feeling safe walking alone in their neighborhood after dark                                                                              | Increase          |
| 16.2.1           | Crime severity index                                                                                                                                                          | Decrease          |
| 16.3.1           | Incidence of selected types of crime                                                                                                                                          | Decrease          |
| 16.4.1           | Incidence of cybercrime                                                                                                                                                       | Decrease          |
| 16.5.1           | Criminal Court case completion time                                                                                                                                           | Decrease          |
| 16.6.1           | Incarceration rate                                                                                                                                                            | Decrease          |
| 16.7.1           | Proportion of the population with high levels of confidence in selected institutions                                                                                          | Increase          |
| 17.1.1           | Number of open datasets published by the Government of Canada                                                                                                                 | Increase          |
| 17.2.1           | Total official support for sustainable development                                                                                                                            | Increase          |


## References   

Destatis. *Indicator status summary*.  

Eurostat (2021). *Sustainable development in the European Union - Monitoring report on progress towards the SDGs in an EU context*.  

Eurostat (2014). *Getting messages across using indicators - A handbook based on experiences from assessing Sustainable Development Indicators*.  

Gennari, P. and D’Orazio, M. (2020). *Statistical approach for assessing progress toward the SDG targets*. Statistical Journal of the IAOS, 36, 1129–1142  

OECD (2019). *Measuring Distance to the SDG Targets - An Assessment of Where OECD Countries Stand*.      

UN DESA (2020). *Sustainable Development Goals Progress Chart 2020 - Technical Note*.    

Bidarbakht Nia, A. (2017). *A weighted extrapolation method for measuring the SDGs progress*. UNESCAP SD Working paper series, 04, March 2017  

Bidarbakht Nia, A. (2017). *Tracking progress towards the SDGs: measuring the otherwise ambiguous progress*. UNESCAP SD Working paper series, 05, May 2017   

UNESCAP (2020). *Progress Assessment Methodology*.    

Sachs, J., Kroll, C., Lafortune, G., Fuller, G., Woelm, F. (2021). *The Decade of Action for the Sustainable Development Goals: Sustainable Development Report 2021*. Cambridge: Cambridge University Press.   

## Notes  

[^1]: For a detailed description of the methodology, please refer to Eurostat (2021).  
[^2]: All thresholds are standards in the international communities. After assessment, it was found that they are also applicable in the Canadian context.   
[^3]: For a detailed description of the methodology, please refer to Eurostat (2021), Annex III.  
[^4]: In very few cases where the periodicity of the data is over 4 years or more, a base period of 2014 has been used.  
[^5]: This is a necessary measure to counteract a drawback of the formula: In situation where the target was achieved during the base period but deteriorated afterwards, the formula calculates significant progress as the indicator decreases (or increases) more ‘than it should’ to meet the target. Take for example target 3.13 *By 2035, less than 5% of Canadians (aged 15+) are cigarette smokers.* Suppose that in 2015, 3% of Canadians aged 15+ are cigarette smokers, and that in 2020 this percentage raises to 10%. The formula will calculate the growth required to go from 3% to 5% (instead of the one from 10% to 5%) and will conclude that great progress has been made since the new value not only reached 5% but progressed further ahead to 10%.
