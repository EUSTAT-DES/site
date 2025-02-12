---
title: Progreso por indicador
language: es
permalink: progreso/
layout: page
---

<!-- Cargar nombres de indicadores desde el CSV -->
{% assign nombres_indicadores = site.data.es.indicador_corto | map: "titulo" %}

<div id="main-content" class="container reportingstatus" role="main">
  <h1>{{ page.t.general.indicators }}</h1>
  
  <div>
    <p>{{ page.t.general.introduction }}</p>
  </div>

  {% for goal_number in ordered_goals %}
    {% assign goal_details = goal_number | sdg_lookup %}
    {% assign goal_indicadores = "" | split: "," %}

    {% for item in indicadores_data %}
      {% assign goal_extracted = item.indicador | split: '-' | first %}
      {% if goal_extracted == goal_number %}
        {% assign goal_indicadores = goal_indicadores | push: item %}
      {% endif %}
    {% endfor %}

    {% if goal_indicadores.size > 0 %}
      <div class="goal reporting-status-item">
        <div class="frame goal-tiles">
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

          <ul class="indicator-list">
            {% for indicador in goal_indicadores %}
              {% assign indicador_id = indicador.indicador %}
              {% assign indicador_info = site.data.es.indicador_corto | where: "indicador", indicador_id | first | default: "Título no encontrado" %}

              <li class="indicator-item">
                <span class="indicator-status {{ indicador.estado | slugify }}" title="{{ indicador.estado | t }}"></span>
                <strong>{{ indicador_id }}:</strong>
                <span>{{ indicador_info.titulo }}</span>
              </li>
            {% endfor %}
          </ul>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
