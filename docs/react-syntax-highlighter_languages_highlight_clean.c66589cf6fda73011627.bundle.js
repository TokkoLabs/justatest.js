;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    1530: function (module, exports) {
      module.exports = function (hljs) {
        return {
          aliases: ['clean', 'icl', 'dcl'],
          keywords: {
            keyword:
              'if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr',
            built_in: 'Int Real Char Bool',
            literal: 'True False',
          },
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.C_NUMBER_MODE,
            { begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>' },
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_clean.c66589cf6fda73011627.bundle.js.map
