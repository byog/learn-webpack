module.exports = {
    processors: [],
    plugins: ['stylelint-order'],
    extends: 'stylelint-config-recommended',
    rules: {
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-order': ['width', 'height'],
        // 'at-rule-no-unknown': [
        //     true,
        //     {
        //         ignoreAtRules: ['extends'],
        //     },
        // ],
        // 'block-no-empty': null,
        // 'unit-whitelist': ['em', 'rem', 's'],
    },
}
