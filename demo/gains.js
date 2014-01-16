blocks.register({
    name: "Gains",
    family: "Math",
    description: "Each <b>output[i]</b> will be <b>gain[i]*input[i]</b>",
    fields: [
        {
            name: "Gains",
            hide: true,
            type: "number[]",
            attrs: "editable",
            default: [1, 2]
        },
        {
            name: "input",
            label: "X#",
            dimension: "Gains",
            attrs: "input",
            card: '1'
        },
        {
            name: "output",
            label: "Y#",
            dynamicLabel: function(block, x) {
                return block.getValue('Gains')[x]+'*X'+(x+1);
            },
            dimension: "Gains",
            attrs: "output"
        }
    ]
});
