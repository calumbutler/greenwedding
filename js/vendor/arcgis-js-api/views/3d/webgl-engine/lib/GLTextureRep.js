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

define(["require","exports","./Util","../../../webgl/Texture","../../../webgl/enums"],function(t,e,i,r,s){var n=function(){function t(t){this._glTexture=null,this._refCount=0,this._glTexture=t}return t.prototype.incRefCnt=function(){++this._refCount},t.prototype.decRefCnt=function(){--this._refCount,i.assert(this._refCount>=0)},t.prototype.getRefCnt=function(){return this._refCount},t.prototype.setGLTexture=function(t){this._glTexture=t},t.prototype.getGLTexture=function(){return this._glTexture},t}(),o=function(){function t(t,e,i,r){this.NUM_PARALLEL=8,this.textures=t,this._programRepository=e,this.getViewportToRestore=i,this._rctx=r,this.NUM_PARALLEL=8,this.id2textureRef={},this.loading={},this._queue=[],this.listeners=[],this.afExt=r.extensions.textureFilterAnisotropic,this.maxMaxAnisotropy=this.afExt?r.parameters.maxMaxAnisotropy:1,this.maxAnisotropy=Math.min(8,this.maxMaxAnisotropy),this._needsRender=!0;var s=8;this._fallbackTextureData=new Uint8Array(s*s*4),this._fallbackTextureTransparentData=new Uint8Array(s*s*4);for(var n=0,o=this._fallbackTextureData.length;o>n;++n)this._fallbackTextureData[n]=255,this._fallbackTextureTransparentData[n]=(n+1)%4!==0?255:0;this._fallbackTextureDesc={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:s,height:s,maxAnisotropy:8}}return t.prototype.resetNeedsRender=function(){this._needsRender=!1},t.prototype.needsRender=function(){return this._needsRender},t.prototype.aquire=function(t,e,s,o){var a=this,u=this.id2textureRef[t];if(null==u){var h=this.textures[t];i.assert(void 0!==h),h.setUnloadFunc(this._unload.bind(this));var p=s===!0,f=this._createGLTextureDescription(h);if(u=new n(p?new r(this._rctx,this._fallbackTextureDesc,this._fallbackTextureTransparentData):new r(this._rctx,this._fallbackTextureDesc,this._fallbackTextureData)),i.assert(null==this.id2textureRef[t]),this.id2textureRef[t]=u,h.initializeThroughRender){var l=h.initializeThroughRender(this._rctx,f);u.setGLTexture(l),o&&o(u)}else h.deferredLoading()?this.getLoadingCount()<this.NUM_PARALLEL?this._loadImage(t,f,o):this._queue.push([t,f,o]):h.initializeThroughUpload(this._rctx,f,this._programRepository,this.getViewportToRestore(),function(t){u.setGLTexture(t),a._needsRender=!0,o&&o(u)});this._needsRender=!0}return u.incRefCnt(),u},t.prototype.release=function(t){var e=this.id2textureRef[t];void 0!==e&&(e.decRefCnt(),i.assert(e.getRefCnt()>=0))},t.prototype.getLoadingCount=function(){return Object.keys(this.loading).length},t.prototype.getIsLoaded=function(t){if(null==this.id2textureRef[t])return!1;if(void 0!==this.loading[t])return!1;for(var e=0,i=this._queue.length;i>e;++e)if(this._queue[e][0]===t)return!1;return!0},t.prototype.addTextureListener=function(t){i.assert(-1===this.listeners.indexOf(t)),this.listeners.push(t)},t.prototype.removeTextureListener=function(t){var e=this.listeners.indexOf(t);i.assert(-1!==e),this.listeners.splice(e,1)},t.prototype.getTexture=function(t){return this.textures[t]},t.prototype.getMaxAnisotropy=function(){return this.maxAnisotropy},t.prototype._unload=function(t){var e=this.id2textureRef[t];void 0!==e&&(e.getGLTexture().dispose(),delete this.id2textureRef[t]),this.next(t)},t.prototype._createGLTextureDescription=function(t){var e=t.params&&t.params.wrapClamp,i=this.afExt&&t.params&&t.params.mipmap&&!t.params.disableAnisotropy,r={target:3553,pixelFormat:6408,dataType:5121,maxAnisotropy:i?this.maxAnisotropy:void 0,wrapMode:e?33071:void 0};return r},t.prototype.next=function(t){if(t in this.loading){delete this.loading[t];var e=Object.keys(this.id2textureRef),i=Object.keys(this.loading);this.listeners.forEach(function(r){r(t,e,i)}),this.processQueue()}},t.prototype._loadImage=function(t,e,r){var s=this;i.assert(null==this.loading[t]),this.loading[t]=!0;var n=this.textures[t];i.assert(void 0!==n),setTimeout(function(){var i=s.id2textureRef[t];i&&i.getRefCnt()&&n.initializeThroughUpload(s._rctx,e,s._programRepository,s.getViewportToRestore(),function(e){s.next(t),s._needsRender=!0,i&&i.getRefCnt()&&(i.setGLTexture(e),r&&r(i))})},0)},t.prototype.processQueue=function(){for(var t=[],e=0,i=this._queue.length;i>e;++e){var r=this._queue[e],s=r[0],n=this.id2textureRef[s];if(void 0!==n){var o=n.getRefCnt();0===o?(n.getGLTexture().dispose(),delete this.id2textureRef[s]):t.push(this._queue[e])}}this._queue=t;for(var a=Math.min(this.NUM_PARALLEL-Object.keys(this.loading).length,this._queue.length),e=0;a>e;++e)this._loadImage(this._queue[e][0],this._queue[e][1],this._queue[e][2]);this._queue.splice(0,a)},t}();return o});