/*2bb53ed9870cf2962b5085b51da29ede0182048e*/Ext.define("merchant.util.encoding.Base64",{singleton:true,config:{keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},constructor:function(a){this.initConfig(a);this.callParent([a])},encode:function(f){var h="";var j,d,b,g,c,k,a;var e=0;f=this._utf8_encode(f);while(e<f.length){j=f.charCodeAt(e++);d=f.charCodeAt(e++);b=f.charCodeAt(e++);g=j>>2;c=((j&3)<<4)|(d>>4);k=((d&15)<<2)|(b>>6);a=b&63;if(isNaN(d)){k=a=64}else{if(isNaN(b)){a=64}}h=h+this.getKeyStr().charAt(g)+this.getKeyStr().charAt(c)+this.getKeyStr().charAt(k)+this.getKeyStr().charAt(a)}return h},decode:function(f){var h="";var j,d,b;var g,c,k,a;var e=0;f=f.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(e<f.length){g=this.getKeyStr().indexOf(f.charAt(e++));c=this.getKeyStr().indexOf(f.charAt(e++));k=this.getKeyStr().indexOf(f.charAt(e++));a=this.getKeyStr().indexOf(f.charAt(e++));j=(g<<2)|(c>>4);d=((c&15)<<4)|(k>>2);b=((k&3)<<6)|a;h=h+String.fromCharCode(j);if(k!=64){h=h+String.fromCharCode(d)}if(a!=64){h=h+String.fromCharCode(b)}}h=Base64._utf8_decode(h);return h},_utf8_encode:function(d){d=d.replace(/\r\n/g,"\n");var e="";for(var a=0;a<d.length;a++){var b=d.charCodeAt(a);if(b<128){e+=String.fromCharCode(b)}else{if((b>127)&&(b<2048)){e+=String.fromCharCode((b>>6)|192);e+=String.fromCharCode((b&63)|128)}else{e+=String.fromCharCode((b>>12)|224);e+=String.fromCharCode(((b>>6)&63)|128);e+=String.fromCharCode((b&63)|128)}}}return e},_utf8_decode:function(d){var b="";var e=0;var a=c1=c2=0;while(e<d.length){a=d.charCodeAt(e);if(a<128){b+=String.fromCharCode(a);e++}else{if((a>191)&&(a<224)){c2=d.charCodeAt(e+1);b+=String.fromCharCode(((a&31)<<6)|(c2&63));e+=2}else{c2=d.charCodeAt(e+1);c3=d.charCodeAt(e+2);b+=String.fromCharCode(((a&15)<<12)|((c2&63)<<6)|(c3&63));e+=3}}}return b}});