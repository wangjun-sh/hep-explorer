export default function settings() {
    return {
        //Default template settings
        id_col: 'USUBJID',
        studyday_col: 'DY',
        value_col: 'STRESN',
        measure_col: 'TEST',
        normal_col_low: 'STNRLO',
        normal_col_high: 'STNRHI',
        visit_col: null,
        visitn_col: null,
        group_cols: null,
        filters: null,
        details: null,
        analysisFlag: {
            value_col: null,
            values: []
        },
        baseline: {
            value_col: null, //synced with studyday_col in syncsettings()
            values: [0]
        },
        measure_values: {
            ALT: 'Aminotransferase, alanine (ALT)',
            AST: 'Aminotransferase, aspartate (AST)',
            TB: 'Total Bilirubin',
            ALP: 'Alkaline phosphatase (ALP)'
        },
        x_options: ['ALT', 'AST', 'ALP'],
        y_options: ['TB'],
        point_size: 'Uniform',
        point_size_options: ['ALT', 'AST', 'ALP', 'TB'],
        cuts: {
            ALT: {
                relative_baseline: 3.8,
                relative_uln: 3
            },
            AST: {
                relative_baseline: 3.8,
                relative_uln: 3
            },
            TB: {
                relative_baseline: 4.8,
                relative_uln: 2
            },
            ALP: {
                relative_baseline: 3.8,
                relative_uln: 1
            },
            xMeasure: null, //set in syncSettings
            yMeasure: null, //set in syncSettings
            display: null //set in syncSettings
        },
        imputation_methods: {
            ALT: 'data-driven',
            AST: 'data-driven',
            TB: 'data-driven',
            ALP: 'data-driven'
        },
        imputation_values: null,
        display: 'relative_uln', //or "relative_baseline"
        display_options: [
            { label: 'Upper limit of normal adjusted (eDish)', value: 'relative_uln' },
            { label: 'Baseline adjusted (mDish)', value: 'relative_baseline' }
        ],
        measureBounds: [0.01, 0.99],
        populationProfileURL: null,
        participantProfileURL: null,
        r_ratio_filter: true,
        r_ratio_cut: 0,
        visit_window: 30,
        showTitle: true,
        warningText:
            "This graphic has been thoroughly tested, but is not validated. Any clinical recommendations based on this tool should be confirmed using your organization's standard operating procedures.",
        //all values set in onLayout/quadrants/*.js
        quadrants: [
            {
                label: "Possible Hy's Law Range",
                position: 'upper-right',
                dataValue: 'xHigh:yHigh',
                count: null,
                total: null,
                percent: null
            },
            {
                label: 'Hyperbilirubinemia',
                position: 'upper-left',
                dataValue: 'xNormal:yHigh',
                count: null,
                total: null,
                percent: null
            },
            {
                label: "Temple's Corollary",
                position: 'lower-right',
                dataValue: 'xHigh:yNormal',
                count: null,
                total: null,
                percent: null
            },
            {
                label: 'Normal Range',
                position: 'lower-left',
                dataValue: 'xNormal:yNormal',
                count: null,
                total: null,
                percent: null
            }
        ],
        //Standard webcharts settings
        x: {
            column: null, //set in onPreprocess/updateAxisSettings
            label: null, // set in onPreprocess/updateAxisSettings,
            type: 'linear',
            behavior: 'raw',
            format: '.2f'
            //domain: [0, null]
        },
        y: {
            column: null, // set in onPreprocess/updateAxisSettings,
            label: null, // set in onPreprocess/updateAxisSettings,
            type: 'linear',
            behavior: 'raw',
            format: '.2f'
            //domain: [0, null]
        },
        marks: [
            {
                per: [], // set in syncSettings()
                type: 'circle',
                summarizeY: 'mean',
                summarizeX: 'mean',
                attributes: { 'fill-opacity': 0 }
            }
        ],
        gridlines: 'xy',
        color_by: null, //set in syncSettings
        max_width: 600,
        aspect: 1,
        legend: { location: 'top' },
        margin: { right: 25, top: 25, bottom: 75 }
    };
}
