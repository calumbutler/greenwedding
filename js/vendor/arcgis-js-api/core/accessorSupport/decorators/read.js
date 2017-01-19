// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./property"],function(r,o,a){function e(r,o,e){var t,n;return void 0===o||Array.isArray(o)?(n=r,e=o,t=[void 0]):(n=o,t=Array.isArray(r)?r:[r]),function(r,o,i){var c=r.constructor.prototype;t.forEach(function(t){var i=a.propertyJSONMeta(r,t,n);i.read=c[o],e&&(i.readFrom=(i.readFrom||[]).concat(e))})}}o.read=e});