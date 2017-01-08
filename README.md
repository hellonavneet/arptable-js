# arptable-js
NPM package that returns result of arp table in rich object, useful to identify active devices on the network

## how to install ##
npm install arptable-js 

## example ##

``` javascript
var arp = require('arptable-js');
arp.get(function(table){
  console.log(JSON.stringify(table));
});
```