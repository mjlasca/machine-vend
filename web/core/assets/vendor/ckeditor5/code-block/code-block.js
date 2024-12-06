!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Code block":"Code block","Entering %0 code snippet":"Entering %0 code snippet","Entering code snippet":"Entering code snippet","Insert code block":"Insert code block","Leaving %0 code snippet":"Leaving %0 code snippet","Leaving code snippet":"Leaving code snippet","Plain text":"Plain text"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={535:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var o=n(935),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,".ck-content pre{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code{background:unset;border-radius:0;padding:0}.ck.ck-editor__editable pre{position:relative}.ck.ck-editor__editable pre[data-language]:after{content:attr(data-language);position:absolute}:root{--ck-color-code-block-label-background:#757575}.ck.ck-editor__editable pre[data-language]:after{background:var(--ck-color-code-block-label-background);color:#fff;font-family:var(--ck-font-face);font-size:10px;line-height:16px;padding:var(--ck-spacing-tiny) var(--ck-spacing-medium);right:10px;top:-1px;white-space:nowrap}.ck.ck-code-block-dropdown .ck-dropdown__panel{max-height:250px;overflow-x:hidden;overflow-y:auto}",""]);const r=i},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(i[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&i[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},591:(e,t,n)=>{"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],s=t.base?r[0]+t.base:r[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=a(d),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(c[u].references++,c[u].updater(g)):c.push({identifier:d,updater:h(g,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function g(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,t){var n,o,i;if(t.singleton){var r=m++;n=p||(p=l(t)),o=g.bind(null,n,r,!1),i=g.bind(null,n,r,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=a(n[o]);c[i].references--}for(var r=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}n=r}}}},331:(e,t,n)=>{e.exports=n(237)("./src/clipboard.js")},782:(e,t,n)=>{e.exports=n(237)("./src/core.js")},783:(e,t,n)=>{e.exports=n(237)("./src/engine.js")},507:(e,t,n)=>{e.exports=n(237)("./src/enter.js")},311:(e,t,n)=>{e.exports=n(237)("./src/ui.js")},584:(e,t,n)=>{e.exports=n(237)("./src/utils.js")},237:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};(()=>{"use strict";n.r(o),n.d(o,{CodeBlock:()=>L,CodeBlockEditing:()=>w,CodeBlockUI:()=>_});var e=n(782),t=n(507),i=n(783),r=n(331),c=n(584);function a(e){const t=e.t,n=e.config.get("codeBlock.languages");for(const e of n)"Plain text"===e.label&&(e.label=t("Plain text")),void 0===e.class&&(e.class=`language-${e.language}`);return n}function s(e,t,n){const o={};for(const i of e)if("class"===t){o[i[t].split(" ").shift()]=i[n]}else o[i[t]]=i[n];return o}function l(e){return e.data.match(/^(\s*)/)[0]}function d(e){const t=e.document.selection,n=[];if(t.isCollapsed)return[t.anchor];const o=t.getFirstRange().getWalker({ignoreElementEnd:!0,direction:"backward"});for(const{item:t}of o){let o=t.is("$textProxy")?t.textNode:t;const i=o.parent;if(!i.is("element","codeBlock")||o.is("element","softBreak"))continue;for(;o.previousSibling&&!o.previousSibling.is("element","softBreak");)o=o.previousSibling;const r=o.is("$text")?o.startOffset+l(o).length:o.startOffset,c=e.createPositionAt(i,r);n.every((e=>!e.isEqual(c)))&&n.push(c)}return n}function u(e){const t=(0,c.first)(e.getSelectedBlocks());return!!t&&t.is("element","codeBlock")}function g(e,t){return!t.is("rootElement")&&!e.isLimit(t)&&e.checkChild(t.parent,"codeBlock")}function f(e,t,n,o){const i=s(t,"language","label"),r=n.getAttribute("language");if(r in i){const t=i[r];return e("enter"===o?"Entering %0 code snippet":"Leaving %0 code snippet",t)}return e("enter"===o?"Entering code snippet":"Leaving code snippet")}function p(e,t){for(e.textNode&&(e=t.createPositionBefore(e.textNode));e.nodeBefore&&!e.nodeBefore.is("element","softBreak");)e=t.createPositionBefore(e.nodeBefore);const n=e.nodeAfter;return n&&n.is("$text")?n:null}class m extends e.Command{constructor(e){super(e),this._lastLanguage=null}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor,n=t.model,o=n.document.selection,i=a(t)[0],r=Array.from(o.getSelectedBlocks()),c=null==e.forceValue?!this.value:e.forceValue,s=function(e,t,n){if(e.language)return e.language;if(e.usePreviousLanguageChoice&&t)return t;return n}(e,this._lastLanguage,i.language);n.change((e=>{c?this._applyCodeBlock(e,r,s):this._removeCodeBlock(e,r)}))}_getValue(){const e=this.editor.model.document.selection,t=(0,c.first)(e.getSelectedBlocks());return!!!(!t||!t.is("element","codeBlock"))&&t.getAttribute("language")}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,n=(0,c.first)(e.getSelectedBlocks());return!!n&&g(t,n)}_applyCodeBlock(e,t,n){this._lastLanguage=n;const o=this.editor.model.schema,i=t.filter((e=>g(o,e)));for(const t of i)e.rename(t,"codeBlock"),e.setAttribute("language",n,t),o.removeDisallowedAttributes([t],e),Array.from(t.getChildren()).filter((e=>!o.checkChild(t,e))).forEach((t=>e.remove(t)));i.reverse().forEach(((t,n)=>{const o=i[n+1];t.previousSibling===o&&(e.appendElement("softBreak",o),e.merge(e.createPositionBefore(t)))}))}_removeCodeBlock(e,t){const n=t.filter((e=>e.is("element","codeBlock")));for(const t of n){const n=e.createRangeOn(t);for(const t of Array.from(n.getItems()).reverse())if(t.is("element","softBreak")&&t.parent.is("element","codeBlock")){const{position:n}=e.split(e.createPositionBefore(t)),o=n.nodeAfter;e.rename(o,"paragraph"),e.removeAttribute("language",o),e.remove(t)}e.rename(t,"paragraph"),e.removeAttribute("language",t)}}}class h extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((t=>{const n=d(e);for(const o of n){const n=t.createText(this._indentSequence);e.insertContent(n,o)}}))}_checkEnabled(){return!!this._indentSequence&&u(this.editor.model.document.selection)}}class b extends e.Command{constructor(e){super(e),this._indentSequence=e.config.get("codeBlock.indentSequence")}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model;e.change((()=>{const t=d(e);for(const n of t){const t=v(e,n,this._indentSequence);t&&e.deleteContent(e.createSelection(t))}}))}_checkEnabled(){if(!this._indentSequence)return!1;const e=this.editor.model;return!!u(e.document.selection)&&d(e).some((t=>v(e,t,this._indentSequence)))}}function v(e,t,n){const o=p(t,e);if(!o)return null;const i=l(o),r=i.lastIndexOf(n);if(r+n.length!==i.length)return null;if(-1===r)return null;const{parent:c,startOffset:a}=o;return e.createRange(e.createPositionAt(c,a+r),e.createPositionAt(c,a+r+n.length))}function k(e,t,n=!1){const o=s(t,"language","class"),i=s(t,"language","label");return(t,r,c)=>{const{writer:a,mapper:s,consumable:l}=c;if(!l.consume(r.item,"insert"))return;const d=r.item.getAttribute("language"),u=s.toViewPosition(e.createPositionBefore(r.item)),g={};n&&(g["data-language"]=i[d],g.spellcheck="false");const f=o[d]?{class:o[d]}:void 0,p=a.createContainerElement("code",f),m=a.createContainerElement("pre",g,p);a.insert(u,m),s.bindElements(r.item,p)}}const B="paragraph";class w extends e.Plugin{static get pluginName(){return"CodeBlockEditing"}static get requires(){return[t.ShiftEnter]}constructor(e){super(e),e.config.define("codeBlock",{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"}],indentSequence:"\t"})}init(){const e=this.editor,t=e.model.schema,n=e.model,o=e.editing.view,c=a(e);e.commands.add("codeBlock",new m(e)),e.commands.add("indentCodeBlock",new h(e)),e.commands.add("outdentCodeBlock",new b(e)),this.listenTo(o.document,"tab",((t,n)=>{const o=n.shiftKey?"outdentCodeBlock":"indentCodeBlock";e.commands.get(o).isEnabled&&(e.execute(o),n.stopPropagation(),n.preventDefault(),t.stop())}),{context:"pre"}),t.register("codeBlock",{allowWhere:"$block",allowChildren:"$text",disallowChildren:"$inlineObject",allowAttributes:["language"],allowAttributesOf:"$listItem",isBlock:!0}),t.addAttributeCheck(((e,n)=>{const o=e.getItem(e.length-2);if(t.getAttributeProperties(n).isFormatting&&o&&"codeBlock"==o.name)return!1})),e.editing.downcastDispatcher.on("insert:codeBlock",k(n,c,!0)),e.data.downcastDispatcher.on("insert:codeBlock",k(n,c)),e.data.downcastDispatcher.on("insert:softBreak",function(e){return(t,n,o)=>{if("codeBlock"!==n.item.parent.name)return;const{writer:i,mapper:r,consumable:c}=o;if(!c.consume(n.item,"insert"))return;const a=r.toViewPosition(e.createPositionBefore(n.item));i.insert(a,i.createText("\n"))}}(n),{priority:"high"}),e.data.upcastDispatcher.on("element:code",function(e,t){const n=s(t,"class","language"),o=t[0].language;return(e,t,i)=>{const r=t.viewItem,c=r.parent;if(!c||!c.is("element","pre"))return;if(t.modelCursor.findAncestor("codeBlock"))return;const{consumable:a,writer:s}=i;if(!a.test(r,{name:!0}))return;const l=s.createElement("codeBlock"),d=[...r.getClassNames()];d.length||d.push("");for(const e of d){const t=n[e];if(t){s.setAttribute("language",t,l);break}}l.hasAttribute("language")||s.setAttribute("language",o,l),i.convertChildren(r,l),i.safeInsert(l,t.modelCursor)&&(a.consume(r,{name:!0}),i.updateConversionResult(l,t))}}(0,c)),e.data.upcastDispatcher.on("text",((e,t,{consumable:n,writer:o})=>{let i=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.findAncestor("codeBlock"))return;n.consume(t.viewItem);const r=t.viewItem.data.split("\n").map((e=>o.createText(e))),c=r[r.length-1];for(const e of r)if(o.insert(e,i),i=i.getShiftedBy(e.offsetSize),e!==c){const e=o.createElement("softBreak");o.insert(e,i),i=o.createPositionAfter(e)}t.modelRange=o.createRange(t.modelCursor,i),t.modelCursor=i})),e.data.upcastDispatcher.on("element:pre",((e,t,{consumable:n})=>{const o=t.viewItem;if(o.findAncestor("pre"))return;const i=Array.from(o.getChildren()),r=i.find((e=>e.is("element","code")));if(r)for(const e of i)e!==r&&e.is("$text")&&n.consume(e,{name:!0})}),{priority:"high"}),this.listenTo(e.editing.view.document,"clipboardInput",((t,o)=>{let r=n.createRange(n.document.selection.anchor);if(o.targetRanges&&(r=e.editing.mapper.toModelRange(o.targetRanges[0])),!r.start.parent.is("element","codeBlock"))return;const c=o.dataTransfer.getData("text/plain"),a=new i.UpcastWriter(e.editing.view.document);o.content=function(e,t){const n=e.createDocumentFragment(),o=t.split("\n"),i=o.reduce(((t,n,i)=>(t.push(n),i<o.length-1&&t.push(e.createElement("br")),t)),[]);return e.appendChild(i,n),n}(a,c)})),e.plugins.has("ClipboardPipeline")&&e.plugins.get(r.ClipboardPipeline).on("contentInsertion",((n,o)=>{const i=e.model,r=i.document.selection;r.anchor.parent.is("element","codeBlock")&&i.change((e=>{const n=e.createRangeIn(o.content);for(const o of[...n.getItems()])o.is("node")&&!t.checkChild(r.anchor,o)&&e.remove(o)}))})),this.listenTo(n,"getSelectedContent",((e,[o])=>{const i=o.anchor;!o.isCollapsed&&i.parent.is("element","codeBlock")&&i.hasSameParentAs(o.focus)&&n.change((n=>{const r=e.return;if(i.parent.is("element")&&(r.childCount>1||o.containsEntireContent(i.parent))){const t=n.createElement("codeBlock",i.parent.getAttributes());n.append(r,t);const o=n.createDocumentFragment();return n.append(t,o),void(e.return=o)}const c=r.getChild(0);t.checkAttribute(c,"code")&&n.setAttribute("code",!0,c)}))}))}afterInit(){const e=this.editor,t=e.commands,n=t.get("indent"),o=t.get("outdent");n&&n.registerChildCommand(t.get("indentCodeBlock"),{priority:"highest"}),o&&o.registerChildCommand(t.get("outdentCodeBlock")),this.listenTo(e.editing.view.document,"enter",((t,n)=>{e.model.document.selection.getLastPosition().parent.is("element","codeBlock")&&(function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),c=r.nodeAfter;if(t||!o.selection.isCollapsed||!r.isAtStart)return!1;if(!x(c))return!1;return e.model.change((t=>{e.execute("enter");const n=o.selection.anchor.parent.previousSibling;t.rename(n,B),t.setSelection(n,"in"),e.model.schema.removeDisallowedAttributes([n],t),t.remove(c)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e,t){const n=e.model,o=n.document,i=e.editing.view,r=o.selection.getLastPosition(),c=r.nodeBefore;let a;if(t||!o.selection.isCollapsed||!r.isAtEnd||!c||!c.previousSibling)return!1;if(x(c)&&x(c.previousSibling))a=n.createRange(n.createPositionBefore(c.previousSibling),n.createPositionAfter(c));else if(C(c)&&x(c.previousSibling)&&x(c.previousSibling.previousSibling))a=n.createRange(n.createPositionBefore(c.previousSibling.previousSibling),n.createPositionAfter(c));else{if(!(C(c)&&x(c.previousSibling)&&C(c.previousSibling.previousSibling)&&c.previousSibling.previousSibling&&x(c.previousSibling.previousSibling.previousSibling)))return!1;a=n.createRange(n.createPositionBefore(c.previousSibling.previousSibling.previousSibling),n.createPositionAfter(c))}return e.model.change((t=>{t.remove(a),e.execute("enter");const n=o.selection.anchor.parent;t.rename(n,B),e.model.schema.removeDisallowedAttributes([n],t)})),i.scrollToTheSelection(),!0}(e,n.isSoft)||function(e){const t=e.model,n=t.document;let o;const i=p(n.selection.getLastPosition(),t);i&&i.is("$text")&&(o=l(i));e.model.change((t=>{e.execute("shiftEnter"),o&&t.insertText(o,n.selection.anchor)}))}(e),n.preventDefault(),t.stop())}),{context:"pre"}),this._initAriaAnnouncements()}_initAriaAnnouncements(){const{model:e,ui:t,t:n}=this.editor,o=a(this.editor);let i=null;e.document.selection.on("change:range",(()=>{const r=e.document.selection.focus.parent;t&&i!==r&&r.is("element")&&(i&&i.is("element","codeBlock")&&t.ariaLiveAnnouncer.announce(f(n,o,i,"leave")),r.is("element","codeBlock")&&t.ariaLiveAnnouncer.announce(f(n,o,r,"enter")),i=r)}))}}function C(e){return e&&e.is("$text")&&!e.data.match(/\S/)}function x(e){return e&&e.is("element","softBreak")}var S=n(311),y=n(591),A=n.n(y),E=n(535),P={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};A()(E.A,P);E.A.locals;class _ extends e.Plugin{static get pluginName(){return"CodeBlockUI"}init(){const t=this.editor,n=t.t,o=t.ui.componentFactory,i=a(t),r=this._getLanguageListItemDefinitions(i),c=t.commands.get("codeBlock");o.add("codeBlock",(o=>{const i=(0,S.createDropdown)(o,S.SplitButtonView),a=i.buttonView,s=n("Insert code block");return a.set({label:s,tooltip:!0,icon:e.icons.codeBlock,isToggleable:!0}),a.bind("isOn").to(c,"value",(e=>!!e)),a.on("execute",(()=>{t.execute("codeBlock",{usePreviousLanguageChoice:!0}),t.editing.view.focus()})),i.on("execute",(e=>{t.execute("codeBlock",{language:e.source._codeBlockLanguage,forceValue:!0}),t.editing.view.focus()})),i.class="ck-code-block-dropdown",i.bind("isEnabled").to(c),(0,S.addListToDropdown)(i,r,{role:"menu",ariaLabel:s}),i})),o.add("menuBar:codeBlock",(o=>{const i=new S.MenuBarMenuView(o);i.buttonView.set({role:"menuitem",label:n("Code block"),icon:e.icons.codeBlock}),i.bind("isEnabled").to(c);const a=new S.MenuBarMenuListView(o);a.set({ariaLabel:n("Insert code block")});for(const e of r){const n=new S.MenuBarMenuListItemView(o,i),r=new S.MenuBarMenuListItemButtonView(o);r.bind(...Object.keys(e.model)).to(e.model),r.set({isToggleable:!0,role:"menuitemcheckbox"}),r.delegate("execute").to(i),r.on("execute",(()=>{t.execute("codeBlock",{language:e.model._codeBlockLanguage,forceValue:c.value!=e.model._codeBlockLanguage}),t.editing.view.focus()})),n.children.add(r),a.items.add(n)}return i.panelView.children.add(a),i}))}_getLanguageListItemDefinitions(e){const t=this.editor.commands.get("codeBlock"),n=new c.Collection;for(const o of e){const e={type:"button",model:new S.ViewModel({_codeBlockLanguage:o.language,label:o.label,role:"menuitemradio",withText:!0})};e.model.bind("isOn").to(t,"value",(t=>t===e.model._codeBlockLanguage)),n.add(e)}return n}}class L extends e.Plugin{static get requires(){return[w,_]}static get pluginName(){return"CodeBlock"}}})(),(window.CKEditor5=window.CKEditor5||{}).codeBlock=o})();