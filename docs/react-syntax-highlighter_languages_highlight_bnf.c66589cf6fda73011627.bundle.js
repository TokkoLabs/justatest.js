;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    1525: function (module, exports) {
      module.exports = function (hljs) {
        return {
          contains: [
            { className: 'attribute', begin: /</, end: />/ },
            {
              begin: /::=/,
              starts: {
                end: /$/,
                contains: [
                  { begin: /</, end: />/ },
                  hljs.C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  hljs.APOS_STRING_MODE,
                  hljs.QUOTE_STRING_MODE,
                ],
              },
            },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_bnf.c66589cf6fda73011627.bundle.js.map
