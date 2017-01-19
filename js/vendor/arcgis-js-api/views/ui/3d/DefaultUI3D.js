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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../DefaultUI","dojo/_base/lang"],function(e,t,r,o,n,s,i){var a=function(e){function t(){e.call(this)}return r(t,e),t.prototype.getDefaults=function(){return i.mixin(this.inherited(arguments),{components:["attribution","zoom","navigation-toggle","compass"]})},t=o([n.subclass("esri.views.ui.3d.DefaultUI3D")],t)}(n.declared(s));return a});