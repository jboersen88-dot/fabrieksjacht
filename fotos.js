/* Onthulvolgorde per foto: [x, y, breedte, hoogte] in vakjes van 100 px (foto is 12 x 16 vakjes, staand 1200 x 1600).
   shortcut: tijdelijk een standaard raster van 4 x 4 tegels in een vaste willekeurige volgorde; vervangen door een
   eigen volgorde (eerst piepkleine teasers, herkenbare delen als laatste) zodra de echte foto's er zijn. */
var VOL = [0, 0, 12, 16];
var FOTOS = (function () {
  var r = {};
  for (var f = 1; f <= 6; f++) {
    var t = [], s = f * 9301;
    for (var x = 0; x < 4; x++) for (var y = 0; y < 4; y++) t.push([x * 3, y * 4, 3, 4]);
    for (var i = t.length - 1; i > 0; i--) { s = (s * 49297 + 233280) % 233280; var j = Math.floor(s / 233280 * (i + 1)), h = t[i]; t[i] = t[j]; t[j] = h; }
    t.push(VOL); r[f] = t;
  }
  return r;
})();
