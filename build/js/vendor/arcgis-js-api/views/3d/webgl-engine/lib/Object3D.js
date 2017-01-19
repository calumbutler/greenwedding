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

define(["require","exports","./IdGen","./Util","./gl-matrix","./ModelContentType","./IntervalUtilities","./GeometryRecord"],function(e,t,r,o,i,n,a,s){var c=o.assert,d=i.mat4d,h=i.vec3d,l=o.VertexAttrConstants,g=function(){function e(t){void 0===t&&(t={}),this.hiddenIndexRanges={},this.visibleIndexRanges={},this._bvObjectSpace=new u,this._bvWorldSpace=new u,this._bvDirty=!0,this._hasVolatileTransformation=!1,this.id=e._idGen.gen(t.idHint),this.name=t.name,this.castShadow=null!=t.castShadow?t.castShadow:!0,this.metadata=t.metadata,this.objectTransformation=d.identity(),this._initializeGeometryRecords(t.geometries,t.materials,t.transformations,t.instanceParameters)}return e.prototype._initializeGeometryRecords=function(e,t,r,o){if(!Array.isArray(e))return this.geometryRecords=[],void(this.geometries=[]);c(t.length===e.length,"Object3D: materials don't match geometries"),c(r.length===e.length,"Object3D: transformations don't match geometries"),this.geometryRecords=new Array(e.length),this.geometries=e.slice();for(var i=0;i<e.length;i++)c(Array.isArray(t[i]),"Object3D: materials parameter must be array of array"),this.geometryRecords[i]=new s(e[i],t[i].slice(),d.create(r[i]),o?o.slice():null);this._hasVolatileTransformation=!1},e.prototype.getId=function(){return this.id},Object.defineProperty(e.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(e){c(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e},enumerable:!0,configurable:!0}),e.prototype.getParentLayer=function(){return this.parentLayer},e.prototype.addParentLayer=function(e){this.parentLayer=e},e.prototype.removeParentLayer=function(e){this.parentLayer=null},e.prototype.getNumGeometryRecords=function(){return this.geometryRecords.length},e.prototype.getFirstGeometryIndex=function(e){var t=this.geometries.indexOf(e);return c(t>-1,"Object3D.getFirstGeometryIndex: geometry not found"),t},e.prototype.findGeometryRecords=function(e){for(var t=[],r=0;r<this.geometries.length;r++)this.geometries[r]===e&&t.push(this.geometryRecords[r]);return t},e.prototype.getGeometryRecord=function(e){return c(e>=0&&e<this.geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range"),this.geometryRecords[e]},e.prototype.getGeometryRecords=function(){return this.geometryRecords},e.prototype.addGeometry=function(e,t,r,o,i,n){c(Array.isArray(t),"Object3D.addGeometry: materials must be array"),this.geometries.push(e);var a=new s(e,t.slice(),d.create(r),o,i,n);return this.geometryRecords.push(a),this._hasVolatileTransformation=this.geometryRecords.some(function(e){return!!e.customTransformation}),this._notifyDirty("objGeometryAdded",a),this._invalidateBoundingVolume(),a},e.prototype.hasGeometry=function(e){return this.geometries.indexOf(e)>-1},e.prototype.removeGeometry=function(e){var t=this.geometryRecords.splice(e,1)[0];return this._hasVolatileTransformation=this.geometryRecords.some(function(e){return!!e.customTransformation}),this.geometries.splice(e,1),this._notifyDirty("objGeometryRemoved",t),this._invalidateBoundingVolume(),t},e.prototype.replaceGeometry=function(e,t){c(e>=0&&e<this.geometryRecords.length,"Object3d.replaceGeometry: index out of range");var r=this.geometryRecords[e],o=s.replaceGeometry(r,t);return this.geometryRecords[e]=o,this.geometries[e]=t,this._notifyDirty("objGeometryReplaced",[r,o]),this._invalidateBoundingVolume(),r.geometry},e.prototype.replaceGeometryMaterials=function(e,t){c(e>=0&&e<this.geometryRecords.length,"Object3d.replaceGeometryMaterials: index out of range");var r=this.geometryRecords[e],o=r.materials,i=s.replaceMaterials(r,t);return this.geometryRecords[e]=i,this._notifyDirty("objGeometryReplaced",[r,i]),o},e.prototype.geometryVertexAttrsUpdated=function(e){this._notifyDirty("vertexAttrsUpdated",this.geometryRecords[e]),this._invalidateBoundingVolume()},e.prototype.geometryColorAttrsUpdated=function(e){this._notifyDirty("colorAttrsUpdated",this.geometryRecords[e])},e.prototype.getHiddenIndexRanges=function(e){return this.hiddenIndexRanges[e.getId()]},e.prototype.getVisibleIndexRanges=function(e){return this.visibleIndexRanges[e.getId()]},e.prototype.isAllHidden=function(){for(var e=0;e<this.geometryRecords.length;e++){var t=this.geometryRecords[e],r=t.geometry.data.faces.length,o=this.getVisibleIndexRanges(t);if(!o)return!1;for(var i=0;r>i;i++){var n=o[i];if(!n)return!1;if(n.length>0)return!1}}return!0},e.prototype.setFacerangeColors=function(e,t){var r=this.geometryRecords;if(1!==r.length)return void console.warn("face range colors currently support only one geometry record");var o=r[0].geometry,i=o.data.vertexAttributes;if(null!=o.originalColors||!e.every(function(e){return null==e.color})){if(null==o.originalColors){o.originalColors=i[l.COLOR].data;var n=o.originalColors.constructor;i[l.COLOR].data=new n(o.originalColors)}var a=i[l.COLOR].data;if(null!=a){for(var s=0;s<e.length;s++){var c=e[s],d=null==c.faceRanges?0:4*c.faceRanges[0]*3,h=null==c.faceRanges?a.length:4*(c.faceRanges[1]+1)*3;if(null!=c.color)if("blend"===t)for(var g=c.color[0],u=c.color[1],y=c.color[2],m=c.color[3],p=d;h>p;p+=4)a[p+0]=o.originalColors[p+0]*g,a[p+1]=o.originalColors[p+1]*u,a[p+2]=o.originalColors[p+2]*y,a[p+3]=o.originalColors[p+3]*m;else for(var g=255*c.color[0],u=255*c.color[1],y=255*c.color[2],m=255*c.color[3],p=d;h>p;p+=4)a[p+0]=g,a[p+1]=u,a[p+2]=y,a[p+3]=m;else for(var p=d;h>p;p++)a[p]=o.originalColors[p]}this.geometryColorAttrsUpdated(0)}}},e.prototype.isPartiallyHidden=function(){for(var e=0;e<this.geometryRecords.length;e++){var t=this.geometryRecords[e],r=t.geometry.data.faces.length,o=this.getHiddenIndexRanges(t);if(o)for(var i=0;r>i;i++){var n=o[i];if(n&&n.length>0)return!0}}return!1},e.prototype.hideFaceRange=function(e,t){var r=e.id;null==this.hiddenIndexRanges[r]&&(this.hiddenIndexRanges[r]=[],this.visibleIndexRanges[r]=[]);for(var o=0;o<e.geometry.data.faces.length;o++){null==this.hiddenIndexRanges[r][o]&&(this.hiddenIndexRanges[r][o]=[],this.visibleIndexRanges[r][o]=[]);var i=a.copyIntervals(t);a.convertFaceToIndexRange(i,3);var n=e.geometry.data.faces[o].componentRange;if(i=a.intersectIntervals(i,n),i=a.offsetIntervals(i,-n[0]),this.hiddenIndexRanges[r][o]=this.hiddenIndexRanges[r][o].concat(i),this.hiddenIndexRanges[r][o]=a.mergeIntervals(this.hiddenIndexRanges[r][o]),0===this.hiddenIndexRanges[r].length)delete this.visibleIndexRanges[r],delete this.hiddenIndexRanges[r];else{var s=e.geometry.data.faces[o].indices.position.length;this.visibleIndexRanges[r][o]=a.invertIntervals(this.hiddenIndexRanges[r][o],s-1)}}this._notifyDirty("hideFaceRange",e)},e.prototype.hideAllFaceRanges=function(){this.hiddenIndexRanges={},this.visibleIndexRanges={};for(var e=0;e<this.geometryRecords.length;e++){var t=this.geometryRecords[e],r=t.getId();this.hiddenIndexRanges[r]=[],this.visibleIndexRanges[r]=[];for(var o=t.geometry.data.faces.length,i=0;o>i;i++){var n=t.geometry.data.faces[i].indices.position.length;this.hiddenIndexRanges[r][i]=[[0,n-1]],this.visibleIndexRanges[r][i]=[]}this._notifyDirty("hideFaceRange",t)}return!0},e.prototype.unhideAllFaceRange=function(){this.hiddenIndexRanges={},this.visibleIndexRanges={},this._notifyDirty("unhideAllFaceRange")},e.prototype.getFaceRangeIndexFromTriangleNr=function(e){var t=this.metadata.faceRanges;if(null!=t)for(var r=0;r<t.length;r++)if(t[r][0]<=e&&t[r][1]>=e)return r},e.prototype.getFaceRangeFromTriangleNr=function(e){var t=this.getFaceRangeIndexFromTriangleNr(e),r=this.metadata.faceRanges;return t?[r[t]]:null},e.prototype.setGeometryTransformation=function(e,t){c(e>=0&&e<this.geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var r=this.geometryRecords[e],o=new s(r.geometry,r.materials,d.create(t));this.geometryRecords[e]=o,this._notifyDirty("objGeometryReplaced",[r,o]),this._invalidateBoundingVolume()},e.prototype.getObjectTransformation=function(){return d.create(this.objectTransformation)},e.prototype.setObjectTransformation=function(e){d.set(e,this.objectTransformation),this._invalidateBoundingVolume(),this._notifyDirty("objTransformation")},e.prototype.getCombinedStaticTransformation=function(e,t){return t=t||d.create(),d.multiply(this.objectTransformation,e.getStaticTransformation(),t),t},e.prototype.getCombinedShaderTransformation=function(e,t){return t=t||d.create(),d.multiply(this.objectTransformation,e.getShaderTransformation(),t),t},e.prototype.hasVolativeTransformation=function(){return this._hasVolatileTransformation},e.prototype.getCastShadow=function(){return this.castShadow},e.prototype.setCastShadow=function(e){this.castShadow=e},e.prototype.getMetadata=function(){return this.metadata},e.prototype.getName=function(){return this.name},e.prototype.getBBMin=function(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin},e.prototype.getBBMax=function(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax},e.prototype.getCenter=function(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.center:this._bvWorldSpace.center},e.prototype.getBSRadius=function(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius},e.prototype._validateBoundingVolume=function(){if(this._bvDirty||this._hasVolatileTransformation){this._bvObjectSpace.init(),this._bvWorldSpace.init();for(var e=h.create(),t=h.create(),r=0;r<this.geometryRecords.length;++r)for(var o=this.geometries[r],i=this.geometryRecords[r].getShaderTransformation(),n=0,a=o.getNumGroups();a>n;++n){var s=o.getBoundingInfo(n);d.multiplyVec3(i,s.getBBMin(),e),d.multiplyVec3(i,s.getBBMax(),t);for(var c=0;3>c;++c)this._bvObjectSpace.bbMin[c]=Math.min(this._bvObjectSpace.bbMin[c],e[c],t[c]),this._bvObjectSpace.bbMax[c]=Math.max(this._bvObjectSpace.bbMax[c],e[c],t[c]);d.multiplyVec3(this.objectTransformation,e),d.multiplyVec3(this.objectTransformation,t);for(var c=0;3>c;++c)this._bvWorldSpace.bbMin[c]=Math.min(this._bvWorldSpace.bbMin[c],e[c],t[c]),this._bvWorldSpace.bbMax[c]=Math.max(this._bvWorldSpace.bbMax[c],e[c],t[c])}h.lerp(this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5,this._bvObjectSpace.center),h.lerp(this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5,this._bvWorldSpace.center);for(var l=e,g=t,u=this._getScaleFactor(this.objectTransformation),r=0;r<this.geometryRecords.length;++r)for(var o=this.geometries[r],i=this.geometryRecords[r].getShaderTransformation(),y=this._getScaleFactor(i),n=0,a=o.getNumGroups();a>n;++n){var s=o.getBoundingInfo(n);d.multiplyVec3(i,s.getCenter(),l);var m=h.dist(l,this._bvObjectSpace.center),p=s.getBSRadius()*y;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,m+p),d.multiplyVec3(this.objectTransformation,l,g);var f=h.dist(g,this._bvWorldSpace.center),b=p*u;this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,f+b)}this._bvDirty=!1}},e.prototype._getScaleFactor=function(e){var t=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),r=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),o=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return Math.max(Math.max(t,r),o)},e.prototype._invalidateBoundingVolume=function(){this._bvDirty=!0,this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,this._bvWorldSpace)},e.prototype._notifyDirty=function(e,t,r,o){if(this._parentLayer){r=r||n.OBJECT;var i=o||this;this._parentLayer.notifyDirty(e,t,r,i)}},e._idGen=new r,e}(),u=function(){function e(){this.bbMin=h.create(),this.bbMax=h.create(),this.center=h.create(),this.bsRadius=0}return e.prototype.init=function(){h.set3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,this.bbMin),h.set3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,this.bbMax),h.set3(0,0,0,this.center),this.bsRadius=0},e.prototype.getCenter=function(){return this.center},e.prototype.getBSRadius=function(){return this.bsRadius},e}();return g});