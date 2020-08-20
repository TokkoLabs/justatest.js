;(window.webpackJsonp = window.webpackJsonp || []).push([
  [120],
  {
    1629: function (module, exports) {
      module.exports = function (hljs) {
        var VARIABLE = { begin: '\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*' },
          PREPROCESSOR = { className: 'meta', begin: /<\?(php)?|\?>/ },
          STRING = {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
            variants: [
              { begin: 'b"', end: '"' },
              { begin: "b'", end: "'" },
              hljs.inherit(hljs.APOS_STRING_MODE, { illegal: null }),
              hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null }),
            ],
          },
          NUMBER = { variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE] }
        return {
          aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
          case_insensitive: !0,
          keywords:
            'and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally',
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.COMMENT('//', '$', { contains: [PREPROCESSOR] }),
            hljs.COMMENT('/\\*', '\\*/', {
              contains: [{ className: 'doctag', begin: '@[A-Za-z]+' }],
            }),
            hljs.COMMENT('__halt_compiler.+?;', !1, {
              endsWithParent: !0,
              keywords: '__halt_compiler',
              lexemes: hljs.UNDERSCORE_IDENT_RE,
            }),
            {
              className: 'string',
              begin: /<<<['"]?\w+['"]?$/,
              end: /^\w+;?$/,
              contains: [
                hljs.BACKSLASH_ESCAPE,
                {
                  className: 'subst',
                  variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
                },
              ],
            },
            PREPROCESSOR,
            { className: 'keyword', begin: /\$this\b/ },
            VARIABLE,
            { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
            {
              className: 'function',
              beginKeywords: 'function',
              end: /[;{]/,
              excludeEnd: !0,
              illegal: '\\$|\\[|%',
              contains: [
                hljs.UNDERSCORE_TITLE_MODE,
                {
                  className: 'params',
                  begin: '\\(',
                  end: '\\)',
                  contains: [
                    'self',
                    VARIABLE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRING,
                    NUMBER,
                  ],
                },
              ],
            },
            {
              className: 'class',
              beginKeywords: 'class interface',
              end: '{',
              excludeEnd: !0,
              illegal: /[:\(\$"]/,
              contains: [
                { beginKeywords: 'extends implements' },
                hljs.UNDERSCORE_TITLE_MODE,
              ],
            },
            {
              beginKeywords: 'namespace',
              end: ';',
              illegal: /[\.']/,
              contains: [hljs.UNDERSCORE_TITLE_MODE],
            },
            {
              beginKeywords: 'use',
              end: ';',
              contains: [hljs.UNDERSCORE_TITLE_MODE],
            },
            { begin: '=>' },
            STRING,
            NUMBER,
          ],
        }
      }
    },
  },
])
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_php.c66589cf6fda73011627.bundle.js.map
