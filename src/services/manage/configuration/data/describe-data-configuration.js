export function describeDataConfiguration() {
    return [
        {
            name: "Max page size",
            description: "Maximum value that can be used for data service as page size",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `pagesize/max`
        },
        {
            name: "Default page size",
            description: "Page size that will be used if the value not provided explicitly",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `pagesize/default`
        },
        {
            name: "Max bulk create",
            description: "Maximum records that can be saved during bulk operation",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `bulkcreate/max`
        },
        {
            name: "Max relation page size",
            description: "Maximum number of relations that can be retrieved during find with related properties or with relation depth",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `config/data/relationsPageSize/max`
        },
        {
            name: "Default relation page size",
            description: "Default number of relations that will be retrieved during find with related properties or with relation depth",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `config/data/relationsPageSize/max`
        },
        {
            name: "Max counters retrieve size",
            description: "Maximum number of counters that can be retrieved at once",
            regex: "[0-9]",
            type: "number",
            consulPath: () => `config/counters/retrieve/max`
        },
        {
            name: "Count for console",
            description: "If enabled then records in each data table will be counted when you open Data section. " +
                "Disable the option if you have a lot of data in tables. Each count blocks the data table",
            regex: ".*",
            type: "boolean",
           consulPath: () => `config/console/data/count/enabled`
        }
    ]
}