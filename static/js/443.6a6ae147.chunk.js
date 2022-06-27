"use strict";(self.webpackChunkweb_ide=self.webpackChunkweb_ide||[]).push([[443],{2443:function(n,e,t){t.r(e),t.d(e,{COMMENT_ACTION_ID:function(){return E},HIGHLIGHT_MODE:function(){return y},HIGHLIGHT_TYPE:function(){return b},JSXCommentContexts:function(){return M},JSXTypes:function(){return N},MonacoEditorManager:function(){return v},cloneLoc:function(){return d},collectJSXExpressions:function(){return c},configureLoc2Range:function(){return X},configureRange2Loc:function(){return C},default:function(){return R},extractJSXClosingElement:function(){return S},extractJSXExpressionEdges:function(){return J},extractJSXOpeningElement:function(){return f},getCuratedLoc:function(){return p},getJSXContext:function(){return x},getLoc:function(){return g},isJSXIdentifier:function(){return m},isParentJSXAttribute:function(){return h},makeBabelParse:function(){return B},makeGetAstPromise:function(){return I},makeJSXCommenterBundle:function(){return A},makeParseJSXExpressionsPromise:function(){return D},prepareOptions:function(){return L}});var r=t(4942),o=t(8152);function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e,t){return e&&i(n.prototype,e),t&&i(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function l(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var u,s=t(1413);!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}(".JSXElement.JSXIdentifier{color:#4169e1}.JSXElement.JSXBracket{color:#ff8c00}.JSXElement.JSXText{color:#b8860b}.JSXElement.JSXGlyph{background:cyan;opacity:.25}.JSXClosingFragment.JSXBracket,.JSXOpeningElement.JSXBracket,.JSXOpeningFragment.JSXBracket{color:#ff8c00;font-weight:700}.JSXOpeningElement.JSXIdentifier{color:#4169e1}.JSXClosingElement.JSXBracket{color:#ff8c00;font-weight:lighter}.JSXClosingElement.JSXIdentifier{color:#4169e1;font-weight:lighter}.JSXAttribute.JSXIdentifier{color:#4682b4}.JSXExpressionContainer.JSXBracket,.JSXSpreadAttribute.JSXBracket,.JSXSpreadChild.JSXBracket{color:#ff8c00}");var c=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=[],o=function(n){n.type.toUpperCase().includes("JSX")&&r.push(n)};return e(n,(0,s.Z)((0,s.Z)({},t),{},{enter:o})),r},m=function(n){return n&&("object"===n.key||"property"===n.key||"name"===n.key||"namespace"===n.key)},h=function(n){return n&&n.parentPath&&n.parentPath.isJSXAttribute()},g=function(n){return n&&n.node&&n.node.loc},d=function(n){var e=g(n);return e?{start:(0,s.Z)({},e.start),end:(0,s.Z)({},e.end)}:null},p=function(n){var e=d(n);return e?("object"===n.key&&n.container&&(e.end=(0,s.Z)({},n.container.property.loc.start)),e):[null,null,null,null]},f=function(n){if(!g(n))return[null,null,null,null];var e=n.node.openingElement;if(!e)return[null,null,null,null];var t=e.name.name,r={start:(0,s.Z)({},e.loc.start),end:(0,s.Z)({},e.name.loc.start)},o={start:(0,s.Z)({},e.loc.end),end:(0,s.Z)({},e.loc.end)};return o.start.column--,e.selfClosing&&o.start.column--,[e,t,r,o]},S=function(n){if(!g(n))return[null,null,null,null];var e=n.node.closingElement;if(!e)return[null,null,null,null];var t=e.name&&e.name.name,r={start:(0,s.Z)({},e.loc.start),end:(0,s.Z)({},e.name.loc.start)},o={start:(0,s.Z)({},e.loc.end),end:(0,s.Z)({},e.loc.end)};return o.start.column--,[e,t,r,o]},J=function(n){var e=g(n);if(!e)return[null,null,null,null];var t=null,r=n.isJSXSpreadChild()?"expression":n.isJSXSpreadAttribute()?"argument":null,o=null;return r?(t=n.node[r],o={start:(0,s.Z)({},t.loc.start),end:(0,s.Z)({},t.loc.end)},t.extra&&t.extra.parenthesized&&(o.start.column--,o.end.column++)):((o={start:(0,s.Z)({},e.start),end:(0,s.Z)({},e.end)}).start.column++,o.end.column--),[t,r,{start:(0,s.Z)({},e.start),end:(0,s.Z)({},o.start)},{start:(0,s.Z)({},o.end),end:(0,s.Z)({},e.end)}]},E="editor.action.commentLine",X=function(n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return e&&e.start?new n.Range(t+e.start.line,r+e.start.column+1,o+e.end?e.end.line:e.start.line,i+e.end?e.end.column+1:e.start.column+1):new n.Range(1,1,1,1)}},C=function(){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i={start:{line:0,column:0},end:{line:0,column:0}};return n?(n.lineNumber?(i.start.line=e+n.lineNumber,i.start.column=t+n.column-1,i.end.line=r+n.lineNumber,i.end.column=o+n.column-1):(i.start.line=e+n.startLineNumber,i.start.column=t+n.startColumn-1,i.end.line=r+n.endLineNumber,i.end.column=o+n.endColumn-1),i):i}},v=a((function n(e,t,r){var o=this;l(this,n),this.monacoEditor=e,this.monaco=t,this.loc2Range=r||C(t),this.runEditorCommentLineAction=function(){return o.monacoEditor.getAction(E).run()},this.getLineIndentationColumn=function(n){return o.monacoEditor.getModel().getLineFirstNonWhitespaceColumn(n)},this.getCommentableStartingRange=function(n){var e=o.getLineIndentationColumn(n.startLineNumber);return new o.monaco.Range(n.startLineNumber,e,n.startLineNumber,e)},this.getCommentContainingStartingRange=function(n){var e=o.getLineIndentationColumn(n.startLineNumber);return e=e?e-1:0,new o.monaco.Range(n.startLineNumber,e,n.startLineNumber,e)},this.getSelectionFirstLineText=function(){var n=o.monacoEditor.getModel(),e=o.monacoEditor.getSelection().startLineNumber,t=new o.monaco.Range(e,o.getLineIndentationColumn(e),e,n.getLineMaxColumn(e));return n.getValueInRange(t)}})),L=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.iShowHover?(0,s.Z)((0,s.Z)({},e),{hoverMessage:"(".concat(n.type,")")}):e},b={ELEMENT:"ELEMENT",ALL:"ALL",IDENTIFIER:"IDENTIFIER",EDGE:"EDGE",STYLE:"STYLE"},y=(u={},(0,r.Z)(u,b.ELEMENT,(function(n,e,t){var r=f(n),i=(0,o.Z)(r,4),a=i[0],l=i[1],u=i[2],s=i[3],c=[];a&&(c.push([u,t.isUseSeparateElementStyles?N.JSXBracket.openingElementOptions:N.JSXBracket.options]),c.push([s,t.isUseSeparateElementStyles?N.JSXBracket.openingElementOptions:N.JSXBracket.options]));var m=S(n),h=(0,o.Z)(m,4),d=h[0],p=h[2],J=h[3];d&&(c.push([p,t.isUseSeparateElementStyles?N.JSXBracket.closingElementOptions:N.JSXBracket.options]),c.push([J,t.isUseSeparateElementStyles?N.JSXBracket.closingElementOptions:N.JSXBracket.options]));var E=g(n);return t.isHighlightGlyph&&c.push([E,N.JSXElement.options(l)]),c})),(0,r.Z)(u,b.ALL,(function(n,e,t){var r=p(n),o=[];return r&&o.push([r,L(n,e,t)]),o})),(0,r.Z)(u,b.IDENTIFIER,(function(n,e,t){return m(n)?y[b.ALL](n,h(n)?N.JSXAttribute.options:e,t):[]})),(0,r.Z)(u,b.EDGE,(function(n,e,t){var r=L(n,e,t),i=J(n),a=(0,o.Z)(i,4),l=a[2],u=a[3],s=[];return s.push([l,r]),s.push([u,r]),s})),(0,r.Z)(u,b.STYLE,(function(){return[]})),u),N={JSXIdentifier:{highlightScope:b.IDENTIFIER,options:{inlineClassName:"JSXElement.JSXIdentifier"}},JSXOpeningFragment:{highlightScope:b.ALL,options:{inlineClassName:"JSXOpeningFragment.JSXBracket"}},JSXClosingFragment:{highlightScope:b.ALL,options:{inlineClassName:"JSXClosingFragment.JSXBracket"}},JSXText:{highlightScope:b.ALL,options:{inlineClassName:"JSXElement.JSXText"}},JSXExpressionContainer:{highlightScope:b.EDGE,options:{inlineClassName:"JSXExpressionContainer.JSXBracket"}},JSXSpreadChild:{highlightScope:b.EDGE,options:{inlineClassName:"JSXSpreadChild.JSXBracket"}},JSXSpreadAttribute:{highlightScope:b.EDGE,options:{inlineClassName:"JSXSpreadAttribute.JSXBracket"}},JSXElement:{highlightScope:b.ELEMENT,options:function(n){return{glyphMarginClassName:"JSXElement.JSXGlyph",glyphMarginHoverMessage:"JSX Element".concat(n?": "+n:"")}}},JSXBracket:{highlightScope:b.STYLE,options:{inlineClassName:"JSXElement.JSXBracket"},openingElementOptions:{inlineClassName:"JSXOpeningElement.JSXBracket"},closingElementOptions:{inlineClassName:"JSXClosingElement.JSXBracket"}},JSXOpeningElement:{highlightScope:b.STYLE,options:{inlineClassName:"JSXOpeningElement.JSXIdentifier"}},JSXClosingElement:{highlightScope:b.STYLE,options:{inlineClassName:"JSXClosingElement.JSXIdentifier"}},JSXAttribute:{highlightScope:b.STYLE,options:{inlineClassName:"JSXAttribute.JSXIdentifier"}}},k=a((function n(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N;l(this,n);var i=[],a=[],u=function(n){var e=(0,o.Z)(n,2),r=e[0],a=e[1];return i.push({range:t(r),options:a})},s=function(){return a=e.deltaDecorations(a||[],i),i=[],a};this.deltaJSXDecorations=function(n,e){var t=function(t){n.filter((function(n){return n.type===t})).forEach((function(n){return y[r[t].highlightScope](n,r[t].options,e).forEach((function(n){return u(n)}))}))};for(var o in r)t(o);return s()},this.reset=function(){i=[],s()},this.reset()})),M={JS:"JS",JSX:"JSX"};function x(n,e,t,r){if(!(n&&e&&t&&r))return M.JS;var o=null,i=null,a=null,l=null;return n.forEach((function(n){var u=r(n.node.loc);("name"===n.key||"property"===n.key)&&n.isJSXIdentifier()&&u.intersectRanges(e)&&(i&&!i.containsRange(u)||(i=u,l=n)),u.intersectRanges(t)&&(o&&!o.containsRange(u)||(o=u,a=n))})),!a||a.isJSXExpressionContainer()||l?M.JS:M.JSX}var T=a((function n(e,t){var r=this;l(this,n);var o=null;this.getEditorCommandId=function(){return o};var i=!1;this.isJSXCommentCommandActive=function(){return i};var a=function(){i=!1};this.runJsxCommentAction=function(n,t){var r=e.monacoEditor,i=e.monaco,a=e.runEditorCommentLineAction;if((0,e.getSelectionFirstLineText)().match(/^\s*\/[/*]/))a();else{for(var l=r.getModel(),u=!0,s=[],c=n.startLineNumber;c<=n.endLineNumber;c++){var m=new i.Range(c,l.getLineFirstNonWhitespaceColumn(c),c,l.getLineMaxColumn(c)),h=l.getValueInRange(m);s.push({commentRange:m,commentText:h}),u=u&&!!h.match(/{\/\*/)}if(t===M.JSX||u){for(var g=[],d=0,p=n.startLineNumber;p<=n.endLineNumber;p++){var f=s[d++],S=f.commentText,J=f.commentRange;S=u?(S=S.replace(/{\/\*/,"")).replace(/\*\/}/,""):"{/*".concat(S,"*/}"),g.push({identifier:{major:1,minor:1},range:J,text:S,forceMoveMarkers:!0})}g.length&&r.executeEdits(o,g)}else a()}},this.addJSXCommentCommand=function(){var n=e.monacoEditor,l=e.monaco,u=e.loc2Range,s=e.runEditorCommentLineAction,c=e.getCommentableStartingRange,m=e.getCommentContainingStartingRange;return o?(i=!0,a):(o=n.addCommand(l.KeyMod.CtrlCmd|l.KeyCode.US_SLASH,(function(){i?t().then((function(e){var t=n.getSelection(),o=x(e,c(t),m(t),u);r.runJsxCommentAction(t,o)})).catch((function(){s()})):s()})),i=!0,n.onDidDispose(a),a)}})),Z={parser:"babel",isHighlightGlyph:!1,iShowHover:!1,isUseSeparateElementStyles:!1,jsxCommenter:null,monacoEditorManager:null,decoratorMapper:null},I=function(n,e){return function(){return new Promise((function(t,r){try{return t(n(e.getValue()))}catch(o){return r(o)}}))}},D=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c;return function(){return new Promise((function(r,o){e().then((function(e){try{return r(t(e,n))}catch(i){return o(i)}})).catch((function(n){return o(n)}))}))}},A=function(n,e,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.parserType,a=o.jsxCommenter,l=o.monacoEditorManager,u=C(i),s=X(n,i),c=I(e,r),m=D(t,c),h=l||new v(r,n,s),g=a||new T(h,m);return[g,h,m,c,s,u]},B=function(n){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(e,(0,s.Z)((0,s.Z)({},t),{},{sourceType:"module",plugins:["jsx"],errorRecovery:!0}))}},R=a((function n(e,t,r,i){var a=this,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};l(this,n),this.options=(0,s.Z)((0,s.Z)({},Z),u);var m=this.options,h=m.jsxCommenter,g=m.monacoEditorManager,d=m.decoratorMapper;this.babelParse=B(t);var p=A(e,this.babelParse,r,i,this.options),f=(0,o.Z)(p,6),S=f[0],J=f[1],E=f[2],X=f[3],C=f[4],v=f[5];this.jsxCommenter=h||S,this.monacoEditorManager=g||J,this.parseJSXExpressionsPromise=E,this.getAstPromise=X,this.loc2Range=C,this.range2Loc=v,this.addJSXCommentCommand=this.jsxCommenter.addJSXCommentCommand,this.decoratorMapper=d||new k(i,this.loc2Range),this.decoratorMapperReset=function(){d.reset()},this.highlight=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return new Promise((function(t,o){var i=a.decoratorMapper,l=a.options,u={decoratorMapper:i,options:l,ast:n,jsxExpressions:[]};if(!n)return t(u);try{var s=e(n,r);return i.deltaJSXDecorations(s,l),u.jsxExpressions=s,t(u)}catch(c){return o(c)}}))},this.highlightCode=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(n){return n},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return n},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.getAstPromise,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(n){return n};return t().then((function(t){a.highlight(t).then(n).catch(e)})).catch(r)};var L=!1;this.isHighlightBoundToModelContentChanges=function(){return L},this.highlightOnDidChangeModelContent=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(n){return n},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(n){return n},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a.getAstPromise,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(n){return n},l=function(){return a.highlightCode(e,t,r,o)};l();var u=null,s={onDidChangeModelContentDisposer:i.onDidChangeModelContent((function(){clearTimeout(u),u=setTimeout(l,n)})),onDidChangeModelDisposer:i.onDidChangeModel((function(){l()})),dispose:function(){s.onDidChangeModelContentDisposer.dispose(),s.onDidChangeModelDisposer.dispose()}};L=!0;var c=function(){a.decoratorMapper.reset(),L&&(L=!1,s&&s.dispose(),s=null)};return i.onDidDispose((function(){a.decoratorMapper.reset(),s=null,L=!1})),c},this.highLightOnDidChangeModelContent=this.highlightOnDidChangeModelContent}))}}]);
//# sourceMappingURL=443.6a6ae147.chunk.js.map