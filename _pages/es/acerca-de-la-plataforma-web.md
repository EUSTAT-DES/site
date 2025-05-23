---
title: Acerca de la plataforma web
language: es
permalink: /es/plataforma/
layout: page
---

## Plataforma de indicadores de desarrollo sostenible

**Eustat** ha desarrollado esta plataforma interactiva para la visualización de los indicadores de los Objetivos de Desarrollo Sostenible (ODS), utilizando la [plataforma Open SDG](https://open-sdg.readthedocs.io/en/latest/quick-start/), una solución de código abierto pensada para facilitar la difusión de datos de ODS.

Este sitio web es reutilizable. Cualquier institución puede replicarlo siguiendo los pasos descritos en la [Guía de inicio rápido de Open SDG](https://open-sdg.readthedocs.io/en/latest/quick-start/).

## Acceso programático a los datos

Los datos y metadatos de esta plataforma están disponibles mediante rutas predecibles y documentadas, lo que permite su uso programático. A continuación se describen los principales puntos de acceso:

###  Datos completos
Archivos CSV y JSON con los datos totalmente desagregados:

- `https://eustat-des.github.io/data/es/data/codigoindicador.csv`  
  Ejemplo: [1-2-1.csv](https://eustat-des.github.io/data/es/data/1-2-1.csv)

- `https://eustat-des.github.io/data/es/data/codigoindicador.json`  
  Ejemplo: [1-2-1.json](https://eustat-des.github.io/data/es/data/1-2-1.json)


###  Datos "headline"
Valores agregados por idioma:

- `es/headline/5-a-1.csv`  
- `eu/headline/5-a-1.csv`  
- `en/headline/5-a-1.csv`  

(Disponibles también en formato JSON)


###  Descarga masiva (ZIP)
Todos los indicadores en formato CSV:

- `es/zip/all_indicators.zip`  
- `eu/zip/all_indicators.zip`  
- `en/zip/all_indicators.zip`

### Traducciones
Contiene todos los textos utilizados en la plataforma, por idioma:

- `es/translations/translations.json`  
- `eu/translations/translations.json`  
- `en/translations/translations.json`

## Accesibilidad

La plataforma Open SDG está diseñada para ser accesible y cumplir con el nivel **AA** de las [Pautas de Accesibilidad al Contenido Web (WCAG 2.0)](https://www.w3.org/TR/WCAG20/).
