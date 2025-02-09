---
title: Progreso por indicador
language: en
permalink: en/progreso/
layout: page
---

{% include head.html %}
{% include header.html %}

<!-- Cargar datos desde progreso_indicador.csv -->
{% assign indicadores_data = site.data.progreso_indicador %}
<!-- Cargar nombres cortos según el idioma seleccionado -->
{% assign idioma = site.lang | default: "es" %}
{% assign nombres_indicadores = site.data[idioma].indicador_corto %}
{% assign ordered_goals = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17" | split: "," %}

<div id="main-content" class="container reportingstatus" role="main">
  <!-- Título principal -->
  <h1>{{ page.t.general.indicators }}</h1>
  
  <!-- Introducción -->
  <div>
    <p>{{ page.t.general.introduction }}</p>
  </div>

  <!-- Iterar por los objetivos en el orden correcto -->
  {% for goal_number in ordered_goals %}
    {% assign goal_details = goal_number | sdg_lookup %}
    {% assign goal_indicadores = indicadores_data | where_exp: "item", "item.indicador | split: '-' | first == goal_number" %}

    {% if goal_indicadores.size > 0 %}
      <div class="goal reporting-status-item">
        <div class="frame goal-tiles">
          <!-- Cargar la imagen del objetivo desde el sistema de sdg_lookup -->
          {% if goal_details.icon %}
          <a href="{{ goal_details.url }}" title="{{ page.t.goal.goal_details }} {{ goal_details.number }}">
            <img src="{{ goal_details.icon }}" alt="{{ goal_details.short | escape }}" width="100" height="100" 
                 class="goal-icon-{{ goal_details.number }} goal-icon-image goal-icon-image-{{ site.goal_image_extension }}"/>
          </a>
          {% endif %}
        </div>
        <div class="details">
          <h2 class="status-goal">
            <a href="{{ goal_details.url }}">{{ goal_details.short }}</a>
          </h2>
          <span class="total"><span>{{ goal_indicadores.size }}</span> {{ page.t.general.indicators }}</span>

          <!-- Lista de indicadores con sus estados -->
          <ul class="indicator-list">
            {% for indicador in goal_indicadores %}
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
    {% endif %}
  {% endfor %}
</div>

{% include footer.html %}
