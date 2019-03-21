window.MathJax = {
    loader: {
        load: ["tex-input", "chtml-output", "context-menu"],
        paths: {
            mathjax: '../../dist',
            node: '../../../node_modules',
            sre: '[node]/speech-rule-engine/lib'
        },
        source: {
            sre: '[sre]/sre_browser.js'
        },
        failed: (error) => {
            console.log(`MathJax(${error.package || '?'}): ${error.message}`);
            if (error.stack) console.log(error.stack);
        }
    },
    chtml: {
        fontURL: 'https://cdn.rawgit.com/mathjax/mathjax-v3/3.0.0-beta.3/mathjax2/css'
    },
    tex: {
        inlineMath: [['$','$']]
    }
};
