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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","./Bucket","./Geometry","./style/StyleLayer","./Placement","./GeometryUtils","./TextShaping","dojox/string/BidiEngine"],function(e,t,r,i,n,a,o,s,h,l,m){var f=function(){function e(){}return e}(),u=function(){function e(e,t,r,i){this.line=t,this.shaping=e,this.iconMosaicItem=r,this.anchor=i}return e}(),x=(function(){function e(){}return e}(),function(e){function t(t,r,i,n,a,o,s,h){e.call(this,t,r),this._markerRatio=1,this._markerVertexBuffer=i,this._markerIndexBuffer=n,this._textVertexBuffer=a,this._textIndexBuffer=o,this._placementEngine=s,this._workerTileHandler=h}return r(t,e),Object.defineProperty(t.prototype,"markerIndexStart",{get:function(){return this._markerTriangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"markerIndexCount",{get:function(){return this._markerTriangleElementsNum},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textIndexStart",{get:function(){return this._textTriangleElementsStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textIndexCount",{get:function(){return this._textTriangleElementsNum},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"sdfMarker",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.copy=function(e,r,i,n,a){var o=new t(this.layer,this.zoom,e,r,i,n,a,this._workerTileHandler);return o.layerIndex=this.layerIndex,o.layerExtent=this.layerExtent,o._markerVertexStart=e.index,o._markerTriangleElementsStart=r.index,o._textVertexStart=i.index,o._textTriangleElementsStart=n.index,o._markerTriangleElementsNum=0,o._textTriangleElementsNum=0,o._symbolInstances=this._symbolInstances,o._glyphItems=this._glyphItems,o._textLayout=this._textLayout,o._markerLayout=this._markerLayout,o._isLinePlacement=this._isLinePlacement,o._avoidEdges=this._avoidEdges,o},t.prototype.getResources=function(e,r,i){var n=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);for(var o=n.getLayoutValue("icon-image",a),s=n.getLayoutValue("text-field",a),h=n.getLayoutValue("text-font",a),l=n.getLayoutValue("text-transform",a),m=[],u=0,x=this._features;u<x.length;u++){var c=x[u],d=c.getGeometry(e);if(d&&0!==d.length){var y=void 0;o&&(y=this._replaceKeys(o,c.values),y&&r.add(y));var g=void 0,_=!1;if(s){switch(g=this._replaceKeys(s,c.values),l){case 2:g=g.toLowerCase();break;case 1:g=g.toUpperCase()}if(t._bidiEngine.hasBidiChar(g)){var p=t._bidiEngine.checkContextual(g),v=void 0;v="rtl"===p?"IDNNN":"ICNNN",g=t._bidiEngine.bidiTransform(g,v,"VLYSN"),_=!0}var b=g.length;if(b>0){var I=i[h];I||(I=i[h]=new Set);for(var E=0;b>E;E++){var k=g.charCodeAt(E);I.add(k)}}}if(y||g){var z=new f;z.sprite=y,z.label=g,z.rtl=_,z.geometry=d,m.push(z)}}}this._symbolFeatures=m},t.prototype.processFeatures=function(e,r){e&&e.setExtent(this.layerExtent);var i,n=this.layer,a=this.zoom,m=8,f=24,x=this._isLinePlacement=1===n.getLayoutValue("symbol-placement",a),c=this._avoidEdges=n.getLayoutValue("symbol-avoid-edges",a)&&!x,d=n.getLayoutValue("symbol-spacing",a)*m,y=n.getLayoutValue("icon-image",a),g=n.getLayoutValue("text-field",a),_=this._workerTileHandler;y&&(this._markerLayout=new o.IconLayout(n,a,x),i=_.getSpriteItems());var p,v;if(g){var b=this._textLayout=new o.TextLayout(n,a,x),I=void 0;b.font&&b.font.length&&(I=b.font[0]);var E=.5;switch(b.anchor){case 5:case 1:case 7:E=0;break;case 6:case 2:case 8:E=1}var k=.5;switch(b.anchor){case 5:case 3:case 6:k=0;break;case 7:case 4:case 8:k=1}var z=.5;switch(b.justify){case 0:z=0;break;case 2:z=1}var T=b.letterSpacing*f,S=x?0:b.maxWidth*f,N=b.lineHeight*f,L=[b.offset[0]*f,b.offset[1]*f];p=_.getGlyphItems(I),v=new l(p,S,N,T,L,E,k,z)}this._markerVertexStart=this._markerVertexBuffer.index,this._markerTriangleElementsStart=this._markerIndexBuffer.index,this._textVertexStart=this._textVertexBuffer.index,this._textTriangleElementsStart=this._textIndexBuffer.index,this._markerTriangleElementsNum=0,this._textTriangleElementsNum=0;var V=[];this._symbolInstances=V,this._glyphItems=p;var P=this._textLayout,w=1;P&&P.size&&(w=P.size/f);for(var M=4096,B=P?P.maxAngle*h.C_DEG_TO_RAD:0,C=P?P.size*m:0,A=0,F=this._symbolFeatures;A<F.length;A++){var j=F[A],Y=void 0;j.sprite&&(Y=i[j.sprite]);var H=void 0,O=j.label,G=0;if(O&&(H=v.getShaping(O,j.rtl),H&&H.length>0)){for(var R=1e30,q=-1e30,D=0,K=H;D<K.length;D++){var U=K[D];R=Math.min(R,U.x),q=Math.max(q,U.x)}G=(q-R+2*f)*w*m}for(var W=0,J=j.geometry;W<J.length;W++){var Q=J[W],X=void 0;if(x){if(H&&H.length>0&&P&&P.size){var Z=P.size*m*(2+Math.min(2,4*Math.abs(P.offset[1])));t._smoothVertices(Q,Z)}X=t._findAnchors(Q,d,G)}else X=[new s.Anchor(Q[0].x,Q[0].y)];for(var $=0,ee=X;$<ee.length;$++){var te=ee[$],re=te.x<0||te.x>M||te.y<0||te.y>M;re||x&&G>0&&0===P.rotationAlignment&&!t._honorsTextMaxAngle(Q,te,G,B,C)||V.push(new u(H,Q,Y,te))}}}for(var ie=0,ne=V;ie<ne.length;ie++){var ae=ne[ie];this._processFeature(ae,p,c)}},t.prototype.updateSymbols=function(){this._markerVertexStart=this._markerVertexBuffer.index,this._markerTriangleElementsStart=this._markerIndexBuffer.index,this._textVertexStart=this._textVertexBuffer.index,this._textTriangleElementsStart=this._textIndexBuffer.index,this._markerTriangleElementsNum=0,this._textTriangleElementsNum=0;for(var e=this._glyphItems,t=this._avoidEdges,r=0,i=this._symbolInstances;r<i.length;r++){var n=i[r];this._processFeature(n,e,t)}},t.prototype._replaceKeys=function(e,t){return e.replace(/{([^{}]+)}/g,function(e,r){return r in t?t[r]:""})},t.prototype._processFeature=function(e,t,r){var i=e.line,n=e.iconMosaicItem,o=e.shaping,s=e.anchor,l=8,m=this._markerLayout,f=m&&!!n,u=!0,x=1;if(f){var c=1/this._markerRatio,d=m.size/c;x=l*d,u=m.optional||!n}var y=this._textLayout,g=y&&o&&o.length>0,_=24,p=1,v=p,b=!0;g&&(p=y.size/_,v=l*p,b=y.optional||!o||0===o.length);var I,E=new a.Point(0,-17);if(f){if(I=this._placementEngine.getIconPlacement(s,n,x,i,m,r),I.footprint.minzoom===h.C_INFINITY&&!u)return;s.minzoom>I.footprint.minzoom&&(I.footprint.minzoom=s.minzoom)}var k;if(g&&(k=this._placementEngine.getTextPlacement(s,E,o,t,v,i,y,r))){if(k.footprint.minzoom===h.C_INFINITY&&!b)return;s.minzoom>k.footprint.minzoom&&(k.footprint.minzoom=s.minzoom)}if(!b&&!u||!u&&k&&k.footprint.minzoom!==h.C_INFINITY||!b&&I&&I.footprint.minzoom!==h.C_INFINITY){var z=Math.max(I.footprint.minzoom,k.footprint.minzoom);I.footprint.minzoom=z,k.footprint.minzoom=z}k&&k.footprint.minzoom!==h.C_INFINITY&&(y.ignorePlacement||this._placementEngine.add(k),this._addPlacedSymbols(k.shapes,k.footprint.minzoom,this.zoom,!1)),I&&I.footprint.minzoom!==h.C_INFINITY&&(m.ignorePlacement||this._placementEngine.add(I),this._addPlacedSymbols(I.shapes,I.footprint.minzoom,this.zoom,!0))},t.prototype._addPlacedSymbols=function(e,t,r,i){for(var n=Math.max(r+h.log2(t),0),a=0,o=e;a<o.length;a++){var s=o[a],l=Math.max(r+h.log2(s.minzoom),n),m=Math.min(r+h.log2(s.maxzoom),25);if(!(l>=m)){var f=s.tl,u=s.tr,x=s.bl,c=s.br,d=s.mosaicRect,y=-s.labelAngle,g=s.anchor,_=i?this._markerVertexBuffer:this._textVertexBuffer,p=i?this._markerIndexBuffer:this._textIndexBuffer,v=_.index,b=d.x,I=d.y,E=b+d.width,k=I+d.height;_.add(g.x,g.y,f.x,f.y,b,I,y,l,m,n),_.add(g.x,g.y,u.x,u.y,E,I,y,l,m,n),_.add(g.x,g.y,x.x,x.y,b,k,y,l,m,n),_.add(g.x,g.y,c.x,c.y,E,k,y,l,m,n),p.add(v+0,v+1,v+2),p.add(v+1,v+2,v+3),i?this._markerTriangleElementsNum+=6:this._textTriangleElementsNum+=6}}},t._findAnchors=function(e,t,r){t+=r;for(var i=0,n=e.length-1,o=0;n>o;o++)i+=a.Point.distance(e[o],e[o+1]);var l=r||t;if(l*=.5,l>=i)return[];var m=l/i;t=i/Math.max(Math.round(i/t),1);for(var f=0,u=-t/2,x=[],c=e.length-1,o=0;c>o;o++){for(var d=e[o],y=e[o+1],g=y.x-d.x,_=y.y-d.y,p=Math.sqrt(g*g+_*_),v=void 0;f+p>u+t;){u+=t;var b=(u-f)/p,I=h.interpolate(d.x,y.x,b),E=h.interpolate(d.y,y.y,b);void 0===v&&(v=Math.atan2(_,g)),x.push(new s.Anchor(I,E,v,o,m))}f+=p}return x},t.deviation=function(e,t,r){var i=(t.x-e.x)*(r.x-t.x)+(t.y-e.y)*(r.y-t.y),n=(t.x-e.x)*(r.y-t.y)-(t.y-e.y)*(r.x-t.x);return Math.atan2(n,i)},t._honorsTextMaxAngle=function(e,t,r,i,n){for(var o=0,s=r/2,h=new a.Point(t.x,t.y),l=t.segment+1;o>-s;){if(--l,0>l)return!1;o-=a.Point.distance(e[l],h),h=e[l]}o+=a.Point.distance(e[l],e[l+1]);for(var m=[],f=0,u=e.length;s>o;){var x=e[l],c=l,d=void 0;do{if(++c,c===u)return!1;d=e[c]}while(d.isEqual(x));var y=c,g=void 0;do{if(++y,y===u)return!1;g=e[y]}while(g.isEqual(d));var _=this.deviation(x,d,g);for(m.push({deviation:_,distToAnchor:o}),f+=_;o-m[0].distToAnchor>n;)f-=m.shift().deviation;if(Math.abs(f)>i)return!1;o+=a.Point.distance(d,g),l=c}return!0},t._smoothVertices=function(e,t){var r=1e-6;if(!(0>=t)){var i=e.length;if(!(3>i)){var n=[],o=0;n.push(0);for(var s=1;i>s;s++)o+=a.Point.distance(e[s],e[s-1]),n.push(o);t=Math.min(t,.2*o);var h=[];h.push(e[0].x),h.push(e[0].y);var l=e[i-1].x,m=e[i-1].y,f=a.Point.sub(e[0],e[1]);f.normalize(),e[0].x+=t*f.x,e[0].y+=t*f.y,f.assignSub(e[i-1],e[i-2]),f.normalize(),e[i-1].x+=t*f.x,e[i-1].y+=t*f.y;for(var s=1;i>s;s++)n[s]+=t;n[i-1]+=t;for(var u=.5*t,s=1;i-1>s;s++){for(var x=0,c=0,d=0,y=s-1;y>=0&&!(n[y+1]<n[s]-u);y--){var g=u+n[y+1]-n[s],_=n[y+1]-n[y],p=n[s]-n[y]<u?1:g/_;if(Math.abs(p)<r)break;var v=p*p,b=p*g-.5*v*_,I=p*_/t,E=e[y+1],k=e[y].x-E.x,z=e[y].y-E.y;x+=I/b*(E.x*p*g+.5*v*(g*k-_*E.x)-v*p*_*k/3),c+=I/b*(E.y*p*g+.5*v*(g*z-_*E.y)-v*p*_*z/3),d+=I}for(var y=s+1;i>y&&!(n[y-1]>n[s]+u);y++){var g=u-n[y-1]+n[s],_=n[y]-n[y-1],p=n[y]-n[s]<u?1:g/_;if(Math.abs(p)<r)break;var v=p*p,b=p*g-.5*v*_,I=p*_/t,E=e[y-1],k=e[y].x-E.x,z=e[y].y-E.y;x+=I/b*(E.x*p*g+.5*v*(g*k-_*E.x)-v*p*_*k/3),c+=I/b*(E.y*p*g+.5*v*(g*z-_*E.y)-v*p*_*z/3),d+=I}h.push(x/d),h.push(c/d)}h.push(l),h.push(m);for(var s=0,y=0;i>s;s++)e[s].x=h[y++],e[s].y=h[y++]}}},t._bidiEngine=new m,t}(n));return x});