/**
 * @param {Object} config
 * @param {Object} info
 * @return null
 */
function alterChartConfig(config, info) {
    opensdg.chartConfigAlterations.forEach(function (callback) {
        callback(config, info);
    });
}

/**
 * @param {String} chartTitle
 * @return null
 */
function updateChartTitle(chartTitle, isProxy) {
    if (typeof chartTitle !== 'undefined') {
      if (isProxy) {
          chartTitle += ' ' + PROXY_PILL;
      }
      $('.chart-title').html(chartTitle);
    }
}

/**
 * @param {String} chartSubtitle
 * @return null
 */
function updateChartSubtitle(chartSubtitle) {
    if (typeof chartSubtitle !== 'undefined') {
        $('.chart-subtitle').text(chartSubtitle);
    }
}

/**
 * @param {Array} oldDatasets
 * @param {Array} newDatasets
 * @return null
 */
function updateIndicatorDataViewStatus(oldDatasets, newDatasets) {
    var status = '',
        hasData = newDatasets.length > 0,
        dataAdded = newDatasets.length > oldDatasets.length,
        dataRemoved = newDatasets.length < oldDatasets.length,
        getDatasetLabel = function (dataset) { return dataset.label; },
        oldLabels = oldDatasets.map(getDatasetLabel),
        newLabels = newDatasets.map(getDatasetLabel);

    if (!hasData) {
        status = translations.indicator.announce_data_not_available;
    }
    else if (dataAdded) {
        status = translations.indicator.announce_data_added;
        var addedLabels = [];
        newLabels.forEach(function (label) {
            if (!oldLabels.includes(label)) {
                addedLabels.push(label);
            }
        });
        status += ' ' + addedLabels.join(', ');
    }
    else if (dataRemoved) {
        status = translations.indicator.announce_data_removed;
        var removedLabels = [];
        oldLabels.forEach(function (label) {
            if (!newLabels.includes(label)) {
                removedLabels.push(label);
            }
        });
        status += ' ' + removedLabels.join(', ');
    }

    var current = $('#indicator-data-view-status').text();
    if (current != status) {
        $('#indicator-data-view-status').text(status);
    }
}

/**
 * @param {String} contrast
 * @param {Object} chartInfo
 * @return null
 */
function updateHeadlineColor(contrast, chartInfo, indicatorId) {
    var matches = indicatorId.match(/(\d+)-/);
    var goalNumber = matches ? parseInt(matches[1]) : 1;

    if (chartInfo.data.datasets.length > 0) {
        var firstDataset = chartInfo.data.datasets[0];
        var isHeadline = (typeof firstDataset.disaggregation === 'undefined');
        if (isHeadline) {
            var newColor = getHeadlineColor(contrast, goalNumber);
            firstDataset.backgroundColor = newColor;
            firstDataset.borderColor = newColor;
            firstDataset.pointBackgroundColor = newColor;
            firstDataset.pointBorderColor = newColor;
        }
    }
}

/**
 * @param {Array} unit
 * @return null
 */
function updateIndicatorDataUnitStatus(unit) {
    var status = translations.indicator.announce_unit_switched + translations.t(unit);
    var current = $('#indicator-data-unit-status').text();
    if (current != status) {
        $('#indicator-data-unit-status').text(status);
    }
}

/**
 * @param {Array} series
 * @return null
 */
function updateIndicatorDataSeriesStatus(series) {
    var status = translations.indicator.announce_series_switched + translations.t(series);
    var current = $('#indicator-data-series-status').text();
    if (current != status) {
        $('#indicator-data-series-status').text(status);
    }
}

/**
 * @param {String} contrast
 * @return {String} The headline color in hex form.
 */
//Override: No Headline Color
//function getHeadlineColor(contrast) {
    //return isHighContrast(contrast) ? '{{ site.graph_color_headline_high_contrast | default: "#FFDD00" }}' : '{{ site.graph_color_headline | default: "#00006a" }}';
function getHeadlineColor(contrast, goalNumber) {

  var headlineColors = ["#e5243b", "#dda63a", "#4c9f38", "#c5192d", "#ff3a21", "#26bde2", "#fcc30b", "#a21942", "#fd6925", "#dd1367", "#fd9d24", "#bf8b2e", "#3f7e44", "#0a97d9", "#56c02b", "#00689d", "#19486a"];
  var headlineColor = headlineColors[goalNumber-1];
  var htmlString = '{{ "' + headlineColor + '" | default: "#00006a" }}';
  console.log("goalNumber: ", htmlString);
    return isHighContrast(contrast) ? '{{ site.graph_color_headline_high_contrast | default: "#FFDD00" }}' : htmlString;
}

/**
 * @param {String} contrast
 * @return {String} The grid color in hex form.
 */
function getGridColor(contrast) {
    return isHighContrast(contrast) ? '#222' : '#ddd';
};

/**
 * @param {String} contrast
 * @return {String} The tick color in hex form.
 */
function getTickColor(contrast) {
    return isHighContrast(contrast) ? '#fff' : '#000';
}

function getChartConfig(chartInfo) {
    var chartType = chartInfo.chartType;
    if (typeof opensdg.chartTypes[chartType] === 'undefined') {
        console.log('Unknown chart type: ' + chartType + '. Falling back to "line".');
        chartType = 'line';
    }
    return opensdg.chartTypes[chartType](chartInfo);
}

function setPlotEvents(chartInfo) {
    window.addEventListener('contrastChange', function (e) {
        var gridColor = getGridColor(e.detail);
        var tickColor = getTickColor(e.detail);
        updateHeadlineColor(e.detail, VIEW._chartInstance, chartInfo.indicatorId);
        updateGraphAnnotationColors(e.detail, VIEW._chartInstance);
        VIEW._chartInstance.options.scales.y.title.color = tickColor;
        VIEW._chartInstance.options.scales.x.title.color = tickColor;
        VIEW._chartInstance.options.scales.y.ticks.color = tickColor;
        VIEW._chartInstance.options.scales.x.ticks.color = tickColor;
        VIEW._chartInstance.options.scales.y.grid.color = function(line) {
            return (line.index === 0) ? tickColor : gridColor;
        };
        VIEW._chartInstance.options.scales.x.grid.color = function(line) {
            return (line.index === 0) ? tickColor : 'transparent';
        };

        VIEW._chartInstance.update();
        $(VIEW._legendElement).html(generateChartLegend(VIEW._chartInstance));
    });

    createDownloadButton(chartInfo.selectionsTable, 'Chart', chartInfo.indicatorId, '#chartSelectionDownload');
    createSourceButton(chartInfo.shortIndicatorId, '#chartSelectionDownload');
    createIndicatorDownloadButtons(chartInfo.indicatorDownloads, chartInfo.shortIndicatorId, '#chartSelectionDownload');

    $("#btnSave").click(function () {
        var filename = chartInfo.indicatorId + '.png',
            element = document.getElementById('chart-canvas'),
            height = element.clientHeight + 50,
            width = element.clientWidth + 50;
        var options = {
            // These options fix the height, width, and position.
            height: height,
            width: width,
            windowHeight: height,
            windowWidth: width,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: 0,
            scale: 2,
            backgroundColor: isHighContrast() ? '#000000' : '#FFFFFF',
            // Allow a chance to alter the screenshot's HTML.
            onclone: function (clone) {
                // Add a body class so that the screenshot style can be custom.
                clone.body.classList.add('image-download-in-progress');
            },
            // Decide which elements to skip.
            ignoreElements: function (el) {
                // Keep all style, head, and link elements.
                var keepTags = ['STYLE', 'HEAD', 'LINK'];
                if (keepTags.indexOf(el.tagName) !== -1) {
                    return false;
                }
                // Keep all elements contained by (or containing) the screenshot
                // target element.
                if (element.contains(el) || el.contains(element)) {
                    return false;
                }
                // Leave out everything else.
                return true;
            }
        };
        // First convert the target to a canvas.
        html2canvas(element, options).then(function (canvas) {
            // Then download that canvas as a PNG file.
            canvas.toBlob(function (blob) {
                saveAs(blob, filename);
            });
        });
    });
}

/**
 * @param {Object} chartInfo
 * @return null
 */
function createPlot(chartInfo, helpers) {

    var chartConfig = getChartConfig(chartInfo);
    chartConfig.indicatorViewHelpers = helpers;
    alterChartConfig(chartConfig, chartInfo);
    if (isHighContrast()) {
        updateGraphAnnotationColors('high', chartConfig);
        //Override: No headline color
        //updateHeadlineColor('high', chartConfig);
        updateHeadlineColor('high', chartConfig, chartInfo.indicatorId);

    }
    else {
      //Override: No headline color
      //updateHeadlineColor('default', chartConfig);
      updateHeadlineColor('default', chartConfig, chartInfo.indicatorId);
    }
    refreshChartLineWrapping(chartConfig);

    VIEW._chartInstance = new Chart($(OPTIONS.rootElement).find('canvas'), chartConfig);
    $(VIEW._legendElement).html(generateChartLegend(VIEW._chartInstance));
};

/**
 * @param {Object} chartInfo
 * @return null
 */
 function updatePlot(chartInfo) {
    // If we have changed type, we will need to destroy and recreate the chart.
    // So we can abort here.
    var updatedConfig = getChartConfig(chartInfo);
    if (updatedConfig.type !== VIEW._chartInstance.config.type) {
        VIEW._chartInstance.destroy();
        createPlot(chartInfo);
        return;
    }

    updateIndicatorDataViewStatus(VIEW._chartInstance.data.datasets, updatedConfig.data.datasets);
    // Override: No headline color
    //updateHeadlineColor(isHighContrast() ? 'high' : 'default', updatedConfig);
    updateHeadlineColor(isHighContrast() ? 'high' : 'default', updatedConfig, chartInfo.indicatorId);

    if (chartInfo.selectedUnit) {
        updatedConfig.options.scales.y.title.text = translations.t(chartInfo.selectedUnit);
    }

    alterChartConfig(updatedConfig, chartInfo);
    refreshChartLineWrapping(updatedConfig);
    VIEW._chartInstance.config.type = updatedConfig.type;
    VIEW._chartInstance.data.datasets = updatedConfig.data.datasets;
    VIEW._chartInstance.data.labels = updatedConfig.data.labels;
    VIEW._chartInstance.options = updatedConfig.options;
    updateGraphAnnotationColors(isHighContrast() ? 'high' : 'default', updatedConfig);

    // The following is needed in our custom "rescaler" plugin.
    VIEW._chartInstance.data.allLabels = VIEW._chartInstance.data.labels.slice(0);

    VIEW._chartInstance.update();

    $(VIEW._legendElement).html(generateChartLegend(VIEW._chartInstance));
    updateChartDownloadButton(chartInfo.selectionsTable, chartInfo.selectedSeries, chartInfo.selectedUnit);
};

/**
 * @param {String} contrast
 * @param {Object} chartInfo
 * @return null
 */
function updateGraphAnnotationColors(contrast, chartInfo) {
    if (chartInfo.options.plugins.annotation) {
        chartInfo.options.plugins.annotation.annotations.forEach(function (annotation) {
            if (contrast === 'default') {
                $.extend(true, annotation, annotation.defaultContrast);
            }
            else if (contrast === 'high') {
                $.extend(true, annotation, annotation.highContrast);
            }
        });
    }
}

/**
 * @param {Object} chart
 * @return {String} The HTML of the chart legend
 */
function generateChartLegend(chart) {
    var text = [];
    text.push('<h5 class="sr-only">' + translations.indicator.plot_legend_description + '</h5>');
    text.push('<ul id="legend" class="legend-for-' + chart.config.type + '-chart">');
    _.each(chart.data.datasets, function (dataset) {
        text.push('<li>');
        //text.push('<span class="swatch' + (dataset.borderDash ? ' dashed' : '') + (dataset.headline ? ' headline' : '') + '" style="background-color: ' + dataset.borderColor + '">');
        text.push('<span class="swatch' + (dataset.borderDash ? ' dashed' : '') + '" style="background-color: ' + dataset.borderColor + '">');
        text.push('<span class="swatch-inner" style="background-color: ' + dataset.borderColor + '"></span>');
        text.push('</span>');
        text.push(translations.t(dataset.label));
        text.push('</li>');
    });
    text.push('</ul>');
    return text.join('');
}

/**
 * @param {Object} chartConfig
 */
function refreshChartLineWrapping(chartConfig) {
    var yAxisLimit = 40,
        wrappedYAxis = strToArray(chartConfig.options.scales.y.title.text, yAxisLimit);
    chartConfig.options.scales.y.title.text = wrappedYAxis;
}

/**
 * @param {String} str
 * @param {Number} limit
 * @returns {Array} The string divided into an array for line wrapping.
 */
function strToArray (str, limit) {
    var words = str.split(' '),
        aux = [],
        concat = [];

    for (var i = 0; i < words.length; i++) {
        concat.push(words[i]);
        var join = concat.join(' ');
        if (join.length > limit) {
            aux.push(join);
            concat = [];
        }
    }

    if (concat.length) {
        aux.push(concat.join(' ').trim());
    }

    return aux;
}
