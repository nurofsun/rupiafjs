function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Rupiaf=/*#__PURE__*/function(){"use strict";function a(b){_classCallCheck(this,a),this.number=b}return _createClass(a,[{key:"convert",value:function convert(){var a=Math.floor;this.number=this.number.toString().replace(/\./g,"");var b=3,c=this.number.length%b,d=a(this.number.length/b);if(this.number=this.number.split(""),0==c){if(1!=d){for(var e=0;e<d;e++)this.number.splice(this.number.length-b++,0,"."),b+=3;return this.number=this.number.join(""),this.number.substring(1)}return this.number.join("")}for(var f=0;f<d;f++)this.number.splice(this.number.length-b++,0,"."),b+=3;return this.number.join("")}},{key:"clean",value:function clean(){return this.number=this.number.replace(/\./g,""),parseInt(this.number)}}]),a}();