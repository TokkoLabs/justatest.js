;(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    1568: function (module, exports) {
      module.exports = function (hljs) {
        return {
          aliases: ['feature'],
          keywords:
            'Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When',
          contains: [
            { className: 'symbol', begin: '\\*', relevance: 0 },
            { className: 'meta', begin: '@[^@\\s]+' },
            {
              begin: '\\|',
              end: '\\|\\w*$',
              contains: [{ className: 'string', begin: '[^|]+' }],
            },
            { className: 'variable', begin: '<', end: '>' },
            hljs.HASH_COMMENT_MODE,
            { className: 'string', begin: '"""', end: '"""' },
            hljs.QUOTE_STRING_MODE,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_gherkin.c66589cf6fda73011627.bundle.js.map
