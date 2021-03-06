import hepexplorer from '../../index';

export function initResetButton() {
    var chart = this;

    this.controls.reset = {};
    var reset = this.controls.reset;
    reset.wrap = this.controls.wrap.append('div').attr('class', 'control-group');
    reset.label = reset.wrap
        .append('span')
        .attr('class', 'wc-control-label')
        .text('Reset Chart');
    reset.button = reset.wrap
        .append('button')
        .text('Reset')
        .on('click', function() {
            var initial_container = chart.element;
            var initial_settings = chart.initial_settings;
            var initial_data = chart.initial_data;
            chart.emptyChartWarning.remove();

            chart.destroy();
            chart = null;

            var newChart = hepexplorer(initial_container, initial_settings);
            newChart.init(initial_data);
        });
}
