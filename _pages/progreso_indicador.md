---
title: Progreso por indicador
language: es
permalink: progreso/
layout: page
---


{% include head.html %}
{% include header.html %}

<!-- Cargar datos desde progreso_indicador.csv -->
{% assign indicadores_data = site.data.progreso_indicador %}
<!-- Cargar nombres cortos según el idioma seleccionado -->
{% assign idioma = site.lang | default: "es" %}
{% assign nombres_indicadores = site.data[idioma].indicador_corto %}

<div id="main-content" class="container reportingstatus" role="main">
  <!-- Título principal -->
  <h1>{{ page.t.general.indicators }}</h1>
  
  <!-- Introducción -->
  <div>
    <p>{{ page.t.general.introduction }}</p>
  </div>

  <!-- Agrupar indicadores por objetivo -->
  {% assign grouped_indicadores = indicadores_data | group_by_exp: "item", "item.indicador | split: '.' | first" %}
  
  <!-- Iterar por los objetivos -->
  {% for grupo in grouped_indicadores %}
    {% assign objetivo_numero = grupo.name %}
    {% assign objetivo_indicadores = grupo.items %}
    <div class="goal reporting-status-item">
      <div class="frame goal-tiles">
        <img src="{{ site.baseurl }}/assets/img/ods_{{ objetivo_numero }}.png" alt="Objetivo {{ objetivo_numero }}" width="100" height="100" />
      </div>
      <div class="details">
        <h2>{{ page.t.goals[objetivo_numero] }}</h2>
        <ul>
          <!-- Iterar por los indicadores del objetivo -->
          {% for indicador in objetivo_indicadores %}
            {% assign indicador_id = indicador.indicador %}
            {% assign indicador_info = nombres_indicadores[indicador_id] %}
            <li class="indicator-item">
              <span class="indicator-status {{ indicador.estado | slugify }}" title="{{ indicador.estado | t }}"></span>
              <strong>{{ indicador_id }}:</strong>
              <span>{{ indicador_info }}</span>
            </li>
          {% endfor %}
        </ul>
      </div>
    </div>
  {% endfor %}
</div>

{% include footer.html %}
