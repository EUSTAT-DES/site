---
title: Sistema de Indicadores
language: es
permalink: /faq/
layout: page
---

## Contenido

- [Introducción](#introducción)
- [Indicadores disponibles en la C.A. de Euskadi](#indicadores-disponibles-en-la-ca-de-euskadi)
- [Presentación de los indicadores](#presentación-de-los-indicadores)
- [Metadatos y fuentes de datos para el indicador disponibles en la C.A. de Euskadi e indicadores mundiales/europeos](#metadatos-y-fuentes-de-datos-para-el-indicador-disponibles-en-la-ca-de-euskadi-e-indicadores-mundialeseuropeos)
- [Acerca de este sitio web](#acerca-de-este-sitio-web)
- [¿Cada cuánto tiempo se actualizan los datos?](#cada-cuánto-tiempo-se-actualizan-los-datos)
- [¿A quién está dirigido este sitio web?](#a-quién-está-dirigido-este-sitio-web)
- [Uso de APIs](#uso-de-apis)
- [¿Cómo se mide el progreso en la consecución de los objetivos de desarrollo sostenible en la C.A. de Euskadi?](#cómo-se-mide-el-progreso-en-la-consecución-de-los-objetivos-de-desarrollo-sostenible-en-la-ca-de-euskadi)
- [Comunidades Autónomas que informan sobre los indicadores de la Agenda 2030](#comunidades-autónomas-que-informan-sobre-los-indicadores-de-la-agenda-2030)
- [Países que informan sobre los indicadores de la Agenda 2030](#países-que-informan-sobre-los-indicadores-de-la-agenda-2030)
- [¿Se puede copiar este sitio web?](#se-puede-copiar-este-sitio-web)
- [¿Es accesible este sitio web?](#es-accesible-este-sitio-web)


## Introducción

La [Agenda 2030 para el Desarrollo Sostenible](https://www.un.org/sustainabledevelopment/es/), adoptada por todos los Estados miembros de las Naciones Unidas en 2015, proporciona un programa para mejorar la economía, la sociedad y el medio ambiente de una forma sostenible. En esencia, los 17 Objetivos de Desarrollo Sostenible (ODS) son un llamamiento universal a la acción para poner fin a la pobreza, proteger el planeta y garantizar que todas las personas en todo el mundo puedan disfrutar de paz y prosperidad.  

Los objetivos están respaldados por un marco de indicadores mundiales que permiten hacer el seguimiento e informar sobre el progreso. Cubren una amplia gama de cuestiones sociales, ambientales y económicas con un enfoque en las personas más vulnerables y el compromiso de no dejar a nadie atrás. Para complementar los objetivos mundiales, se alienta a los distintos gobiernos a desarrollar un plan de implementación propio que se centre en indicadores que aborden contextos y prioridades específicos para lograr los ODS.  

## Indicadores disponibles en la C.A. de Euskadi

Para apoyar la implementación interna en la Comunidad Autónoma de Euskadi de los ODS con los que el Gobierno vasco se ha comprometido, se ha desarrollado un marco de indicadores específico que 
incluye indicadores diseñados en coordinación con los organismos de estadística de las comunidades autónomas, e indicadores definidos por el [Foro Multiagente de Transición Social y Agenda 2030 en Euskadi]( https://www.euskadi.eus/foro-multiagente/web01-a2lehetr/es/).

Se intenta que los indicadores disponibles en la C.A. de Euskadi sean comparables con los indicadores definidos en el [marco de indicadores mundiales de Naciones Unidas](https://www.euskadi.eus/foro-multiagente/web01-a2lehetr/es/](https://unstats.un.org/sdgs/metadata). o con los [indicadores de Desarrollo Sostenible de la Unión Europea](https://ec.europa.eu/eurostat/web/sdi). En el caso de que el indicador disponible en la C.A. de Euskadi no sea comparable con el indicador mundial o europeo, así se indica en los metadatos del indicador.


##  Presentación de los indicadores

Los datos relevantes para cada indicador se presentan en un gráfico y una tabla. Esta presentación se complementa para algunos indicadores con un mapa interactivo que muestra los datos de las comarcas o municipios vascos. Sin embargo, algunos indicadores no pueden representarse a partir de datos. Cuando sucede esto, se muestran textos explicativos con enlaces a información temáticamente relevante sobre los indicadores.

Los botones verdes debajo del gráfico se pueden usar para descargar los datos en formato CSV o el gráfico como archivo PNG.


##   Metadatos y fuentes de datos para el indicador disponibles en la C.A. de Euskadi e indicadores mundiales/europeos

En la parte inferior de las páginas de los indicadores se encuentran las pestañas "Ficha metodológica", "Descripción del indicador" y "Fuentes de datos".

La pestaña "Ficha metodológica" muestra la forma de cálculo del indicador disponible en la C.A. de Euskadi. La pestaña "Descripción del indicador" contiene una evaluación de si los indicadores mostrados cumplen o no los requisitos del indicador de los "Metadatos mundiales" de Naciones Unidas, o en su caso, de los indicadores de Desarrollo Sostenible de la Unión Europea, los resultados del indicador a nivel internacional, y documentos PDF para cada indicador que contiene información sobre la forma de cálculo del indicador mundial.

En "Fuentes de datos" se encuentran enlaces a la organización u organizaciones que proporcionan los datos para el indicador y, cuando sea posible, enlaces directos a las fuentes de datos específicas.

## Acerca de este sitio web

Eustat ha desarrollado esta plataforma de visualización de indicadores de desarrollo sostenible interactivo utilizando la [Plataforma Open SDG]((https://open-sdg.readthedocs.io/en/latest/quick-start/) para la difusión de indicadores de ODS.

Eustat continúa examinando fuentes de datos que pueden ser útiles para informar sobre los indicadores y durante los próximos meses seguirá agregando más desgloses de datos, estadísticas y visualización de datos para mejorar la comunicación con los usuarios de la plataforma


## ¿Cada cuanto tiempo se actualizan los datos?
Se agregan datos tan pronto como se hayan obtenido y verificado. Esto incluye datos nuevos y actualizaciones de los datos que ya están publicados. 

## ¿A quien está dirigido este sitio web?

Los usuarios a los que se dirige esta plataforma de visualización de datos son:

- administraciones para la toma de decisiones sobre políticas públicas
  
- ciudadanos interesados en políticas públicas
  
- analistas de datos

## Uso de APIs
Los datos y metadatos de la plataforma están disponibles en rutas predecibles y documentadas y, por lo tanto, se puede acceder a ellos mediante programación como se describe a continuación:

datos: https://eustat-des.github.io/data/[LANGUAGE_CODE]/data/[INDICATOR CODE].json

por ejemplo:  https://eustat-des.github.io/data/es/data/1-2-1.json

metadatos: https://eustat-des.github.io/data/[LANGUAGE_CODE]/meta/[INDICATOR CODE].json

por ejemplo:  https://eustat-des.github.io/data/es/meta/1-2-1.json

## ¿Cómo se mide el progreso en la consecución de los objetivos de desarrollo sostenible en la C.A. de Euskadi?

  El informe de seguimiento proporciona una descripción general del progreso en la consecución de los Objetivos de Desarrollo Sostenible (ODS) en la Comunidad Autónoma de Euskadi.

  Para saber más sobre el procedimiento para evaluar el progreso, ver <a href="https://eustat-des.github.io/site/metodologia">Metodología para la medición del progreso</a>.</p>


## Comunidades Autónomas que informan sobre los indicadores de la Agenda 2030
La siguiente lista muestra las Comunidades Autónomas que informan sobre los indicadores de la Agenda 2030:

Andalucía: [Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030](https://www.juntadeandalucia.es/institutodeestadisticaycartografia/dega/sistema-de-indicadores-de-desarrollo-sostenible-de-andalucia-para-la-agenda-20), Instituto de Estadística y Cartografía de Andalucía

Aragón: [Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030](Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030), Instituto Aragonés de Estadística
Asturias, Principado de: Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Gobierno del Principado de Asturias
Planes y estrategias elaborados por la CCAA
Baleares, Islas
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto de Estadística de las Islas Baleares
Planes y estrategias elaborados por la CCAA
Canarias
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto Canario de Estadística
Planes y estrategias elaborados por la CCAA
Cantabria
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto Cántabro de Estadística
Planes y estrategias elaborados por la CCAA
Castilla-La Mancha
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Planes y estrategias elaborados por la CCAA
Castilla y León
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Gobierno de Castilla y León
Planes y estrategias elaborados por la CCAA
Directrices de implementación de la Agenda 2030
Cataluña
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto de Estadística de Cataluña
Planes y estrategias elaborados por la CCAA
Agenda 2030: transform Catalonia, improve de world
Comunidad Valenciana
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Generalitat Valenciana
Planes y estrategias elaborados por la CCAA
Estrategia ODS de la Comunidad Valenciana
Extremadura
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto de Estadística de Extremadura
Planes y estrategias elaborados por la CCAA
Extremadura 2030: Estrategia de economía verde y circular
Galicia
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto Gallego de Estadística
Planes y estrategias elaborados por la CCAA
La Rioja
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto de Estadística de La Rioja
Planes y estrategias elaborados por la CCAA
Madrid, Comunidad de
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Comunidad de Madrid
Planes y estrategias elaborados por la CCAA
Murcia, Región de
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Planes y estrategias elaborados por la CCAA
Navarra, Comunidad Foral de
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto de Estadística de Navarra
Planes y estrategias elaborados por la CCAA
Plan de acción 2018 para desarrollar en Navarra la Agenda 2030
País Vasco
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Instituto Vasco de Estadística
Planes y estrategias elaborados por la CCAA
Agenda Euskadi Basque Country 2030
Ceuta, Ciudad Autónoma de
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Planes y estrategias elaborados por la CCAA
Melilla, Ciudad Autónoma de
Indicadores de los objetivos de desarrollo sostenible en la CC.AA para la Agenda 2030
Planes y estrategias elaborados por la CCAA

## Países que informan sobre los indicadores de la Agenda 2030
La siguiente lista muestra algunas de las plataformas globales de presentación de informes existentes sobre los ODS. La lista no es exhaustiva:

Albania: http://www.instat.gov.al/en/sdgs/
Armenia: https://sdg.armstat.am/
Australia: https://www.sdgdata.gov.au/
Austria: https://www.statistik.at/services/tools/services/indikatorensysteme/sdgs
Azerbaijan: http://sdg.azstat.org/
Bielorrusia: http://sdgplatform.belstat.gov.by/en/sites/belstatfront/home.html
Bálgica: http://www.indicators.be/en/t/SDG/
Bosnia y Herzegovina: https://sdg.bhas.gov.ba/
Brasil: https://odsbrasil.gov.br/
Canadá: https://www144.statcan.gc.ca/sdg-odd/index-eng.htm
Croacia: https://croatianbureauofstatistics.github.io/sdg-indicators/
Chequia: https://www.sdg-data.cz/en
República democrática del Congo: https://odd-dashboard.cd/en/
Dinamarca: https://dst.dk/en/Statistik/Sdg
Eslovaquia: https://agenda2030.statistics.sk/Agenda2030/en/home/
Eslovenia: http://www.stat.si/Pages/en/goals
España: http://ine.es/dynt3/ODS/en/index.htm
Estados Unidos: https://sdg.data.gov/
Estonia: https://www.stat.ee/en/find-statistics/statistics-theme/sustainable-development
Francia: https://www.insee.fr/fr/statistiques/2654964
Georgia: https://sdg.gov.ge/intro
Ghana: https://sustainabledevelopment-ghana.github.io/
Grecia: http://www.statistics.gr/en/sdgs
Hungría: http://www.ksh.hu/sdg
Islandia: https://visar.hagstofa.is/heimsmarkmidin/en/
Islas Feroe: https://sdg.hagstova.fo/sdg-site/en/
Irlands: https://irelandsdg.geohive.ie/
Israel: https://www.cbs.gov.il/en/subjects/Pages/Sustainable-Development.aspx
Italia: https://www.istat.it/en/well-being-and-sustainability/sustainable-development-goals
Japon: https://www.mofa.go.jp/mofaj/gaiko/oda/sdgs/statistics/index.html
Kazakhstan: https://kazstat.github.io/sdg-site-kazstat/en/
Kyrgyzstan: https://sustainabledevelopment-kyrgyzstan.github.io/
Laos: https://www.lsb.gov.la/sdg/en/
Liechtenstein: https://www.statistikportal.li/de/uebersichten-indikatoren/indikatoren-nachhaltige-entwicklung
Lituania: https://osp.stat.gov.lt/en/darnaus-vystymosi-rodikliai
Luxemburgo: https://statistiques.public.lu/en/donnees/themes/odd.html
México: http://www.agenda2030.mx/
Mongolia: http://sdg.1212.mn/EN/Home/Information
Montenegro: https://www.sdgmontenegro.me/
Países Bajos: https://www.sdgnederland.nl/sdgs/
Polonia: https://sdg.gov.pl/en/
Portugal: https://www.ine.pt/xportal/xmain?xpid=INE&xpgid=ine_perfsdg&xlang=en
Reino Unido: https://sustainabledevelopment-uk.github.io/
República de Moldavia: https://statistica.gov.md/en/sustainable-development-goals-183.html
Rumanía: http://www.insse.ro/cms/files/Web_IDD_BD_en/index.htm
Rusia: https://eng.rosstat.gov.ru/sdg
Ruanda: https://sustainabledevelopment-rwanda.github.io/
Serbia: http://sdg.indikatori.rs/en-us/
Sudáfrica: http://www.statssa.gov.za/MDG/SDG_Baseline_Report_2017.pdf
Suiza: https://www.bfs.admin.ch/bfs/en/home/statistics/sustainable-development.html
Tajikistan: https://www.stat.tj/tj/targets
Turquía: https://statswiki.unece.org/sdg.tuik.gov.tr/en/
Ucrania: http://www.sdg.ukrstat.gov.ua/


## ¿Se puede copiar este sitio web?
Sí. Consulte la [Guía de inicio rápido de Open SDG](https://open-sdg.readthedocs.io/en/latest/quick-start/) para obtener instrucciones técnicas sobre la forma más rápida de tener una copia de la plataforma Open SDG en funcionamiento.

## ¿Es accesible este sitio web?
Open SDG pretende ser lo más accesible y utilizable posible para todos los usuarios y trabaja para alcanzar el nivel AA de Pautas de accesibilidad al contenido web (WCAG 2.0).

[Back to top](#top)
