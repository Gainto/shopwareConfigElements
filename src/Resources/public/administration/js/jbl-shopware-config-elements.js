!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=(window.__sw__.assetPath + '/bundles/jblshopwareconfigelements/'),n(n.s="59sp")}({"59sp":function(t,e,n){"use strict";n.r(e);Shopware.Component.register("jbl-cta",{template:'<sw-container style="padding-bottom: 2em;border-bottom: 1px solid #c0c0c0;margin-bottom: 2em;">\n    <h2>{{ $tc(\'jbl-cta.title\') }}</h2>\n\n    <p v-html="$t(\'jbl-cta.text\')"></p>\n\n    <p style="margin-top:2em;">\n        <sw-button link="https://google.de">\n            <sw-icon name="default-action-external" color="#1abc9c"></sw-icon> {{ $tc(\'jbl-cta.button\') }}\n        </sw-button>\n    </p>\n</sw-container>'})}});