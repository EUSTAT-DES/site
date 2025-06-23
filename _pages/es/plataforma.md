---
title: Acerca de la plataforma web
language: es
permalink: /es/plataforma/
layout: page
---

## Plataforma de indicadores de desarrollo sostenible

**Eustat** ha desarrollado esta plataforma interactiva para la visualización de los indicadores de los Objetivos de Desarrollo Sostenible (ODS) utilizando la [plataforma Open SDG](https://open-sdg.org/), una solución de código abierto pensada para facilitar la difusión de datos de los ODS.

Este sitio web es reutilizable. Cualquier institución puede replicarlo siguiendo los pasos descritos en la [Guía de inicio rápido de Open SDG](https://open-sdg.readthedocs.io/en/latest/quick-start/).

## Acceso programático a los datos

Los datos y metadatos de esta plataforma están disponibles mediante rutas predecibles y documentadas, lo que permite su uso programático. A continuación se describen los principales puntos de acceso:

###  Datos de un indicador
Archivos CSV y JSON con los datos totalmente desagregados de un determinado indicador:

- `https://sdg.eustat.eus/sdg-data-prod/es/data/**codigoindicador**.csv`  
  Ejemplo: [https://sdg.eustat.eus/sdg-data-prod/es/data/1-2-1.csv](https://sdg.eustat.eus/sdg-data-prod/es/data/1-2-1.csv)

- `https://sdg.eustat.eus/sdg-data-prod/es/data/**codigoindicador**.json`  
  Ejemplo: [https://sdg.eustat.eus/sdg-data-prod/es/data/1-2-1.json](https://sdg.eustat.eus/sdg-data-prod/es/data/1-2-1.json)

###  Descarga masiva (ZIP)
Todos los indicadores en formato CSV:

- [https://sdg.eustat.eus/sdg-data-prod/es/zip/all_indicators.zip](https://sdg.eustat.eus/sdg-data-prod/es/zip/all_indicators.zip)
- [https://sdg.eustat.eus/sdg-data-prod/eu/zip/all_indicators.zip](https://sdg.eustat.eus/sdg-data-prod/eu/zip/all_indicators.zip)  
- [https://sdg.eustat.eus/sdg-data-prod/en/zip/all_indicators.zip](https://sdg.eustat.eus/sdg-data-prod/en/zip/all_indicators.zip)

### Informe con las desagregaciones
Tablas que muestran información sobre todas las desagregaciones utilizadas en los datos, por dimensión/categoría y por indicador (informe solo en inglés).

- [https://sdg.eustat.eus/sdg-data-prod/disaggregations.html](https://sdg.eustat.eus/sdg-data-prod/disaggregations.html)

## Accesibilidad

La plataforma Open SDG está diseñada para ser accesible y cumplir con el nivel **AA** de las [Pautas de Accesibilidad al Contenido Web (WCAG 2.0)](https://www.w3.org/TR/WCAG20/).
