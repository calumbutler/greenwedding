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

define(["dojo/Deferred","dojo/when","./TileUtils","./TerrainConst","./TileGeometryFactory","./TileRenderData","./ResourceCounter","./TileRenderer","../support/PreallocArray","../../../core/ObjectPool","../webgl-engine/lib/ShaderVariations","dojo/text!./TerrainMaterial.xml","../webgl-engine/materials/internal/MaterialUtil","../webgl-engine/lib/Util","../lib/glMatrix","../webgl-engine/lib/RenderPass","../webgl-engine/lib/RenderSlot","../webgl-engine/lib/tracer","../../webgl/Texture","../../webgl/VertexArrayObject","../../webgl/BufferObject","../../webgl/Program","../webgl-engine/lib/DefaultVertexAttributeLocations","../webgl-engine/lib/DefaultVertexBufferLayouts","../../webgl/Util"],function(e,t,r,i,n,a,s,o,l,d,f,u,c,h,m,v,g,p,T,R,b,y,E,x,D){var w,S=h.assert,A=m.vec2d,O=m.vec3d,_=m.vec4d,I=m.mat4d.identity(),N=4,U=[2,2],M=g.OPAQUE_TERRAIN,L=g.TRANSPARENT_TERRAIN,P=O.create(),G=7,j=10,C=A.create(),B=function(h,m){function g(){for(;De.length<De.data.length&&Se.length>0;){var e=Se.pop();De.push(e)}we=De.length}function A(){for(var e=0;e<De.length;e++){var t=De.data[e];Ae.release(t),t.callback(e>=we),t.callback=null}De.clear()}function B(e,t){var r=e.screenDepth,i=t.screenDepth;return i>r?-ue:r>i?ue:0}function V(e,t){return 0===e.tiles.length?-ue:0===t.tiles.length?ue:B(e.tiles.data[0],t.tiles.data[0])}function k(e,t){return void 0===t&&(t=oe.subdivisionReduceLevels),0===t?e:0>t?Math.floor((e-1)*(1<<-t))+1:Math.floor((e-1)/(1<<t))+1}function H(e){for(var t=e.extent,r=e.lij[0],i=0;we>i;){var n=De.data[i],a=n.extent;r>=n.minLevel&&r<=n.maxLevel&&a[0]<=t[2]&&a[2]>=t[0]&&a[1]<=t[3]&&a[3]>=t[1]?(De.swap(i,we-1),we--):i++}}m=m||256;var F,W,X,z,Y,q,Q,Z=!1,J=null,K=null,$=null,ee={},te=new d(a,function(){},!1),re=new l(10,function(){return{root:null,tiles:new l(300)}}),ie=new r.IteratorPreorder,ne=!0,ae=1,se=!0,oe={mode:"none",width:1.5,falloff:1.5,wireOpacity:1,surfaceOpacity:0,color:[1,1,1,0],subdivision:"geometry",subdivisionReduceLevels:0},le=!1,de=!1,fe=!1,ue=1,ce=!0,he=!0,me=null,ve=null,ge=null,pe=null,Te=[];this.updateTileBackground=function(t){var r=new e;if(ge&&ge.reject(r.promise),pe=t,ge=r,t){var i=new Image;t instanceof Image?i.src=t.src:i.src=t,i.complete?r.resolve(i):i.onload=function(){r.isFulfilled()||r.resolve(i)}}else r.resolve(null);return this.renderTileBackground(),r.promise};var Re=0,be=0,ye=0,Ee=0;this.resourceCounter=new s,this.castShadows=!1,this.clippingExtent=null,this.loaded=function(){};var xe=!1;this.needsRender=!0,this.didRender=!1,this.receiveShadows=!1;var De=new l(10),we=0,Se=new l(30),Ae=new d(function(){this.extent=_.create(),this.minLevel=0,this.maxLevel=0,this.callback=null},function(){},!1);this.renderTileBackground=function(){return W&&ge&&ve?ge.then(function(e){ve.setGridImage(e),J&&r.traverseTilesPreorder(J,function(e){ve.updateTileTexture(e)}.bind(this))}.bind(this)):void 0},this.initializeRenderContext=function(e){W=e.rctx,X=e.rctx.gl,Y=W.extensions.textureFilterAnisotropic,S(!w||w===Y.TEXTURE_MAX_ANISOTROPY_EXT,"contexts have different definitions afExt.TEXTURE_MAX_ANISOTROPY_EXT"),null!=Y&&(w=Y.TEXTURE_MAX_ANISOTROPY_EXT,q=W.parameters.maxMaxAnisotropy,Q=Math.min(8,q));var r=W.extensions.elementIndexUint;n.setSupportsUintIndices(!!r);var i=function(e){t(e).then(function(){Z=!0,this.setNeedsRender()}.bind(this)).otherwise(i)}.bind(this);i(this.renderTileBackground()),F=e.textureRep;var a=e.shaderSnippets,s=e.shaderRep,l=e.programRep;a.vsTerrain||a._parse(u),W.extensions.standardDerivatives;var d=new f("terrain",["vsTerrain","fsTerrain"],null,l,s,a,W);d.addDefine("Spherical","SPHERICAL"),d.addDefine("Overlay","OVERLAY"),d.addDefine("Atmosphere","ATMOSPHERE"),d.addDefine("Wireframe","WIREFRAME"),d.addDefine("TileBorders","TILE_BORDERS"),d.addBinaryShaderSnippetSuffix("Wireframe","Wireframe",[!1,!0]),d.addDefine("ReceiveShadows","RECEIVE_SHADOWS");var c=new f("terrainNormal",["vsTerrainNormal","fsNormal"],null,l,s,a,W);c.addDefine("Spherical","SPHERICAL"),c.addDefine("AlphaZero","ALPHA_ZERO"),$={depth:l.get("depth"),depthShadowMap:l.get("depthShadowMap"),depthOnly:new y(W,a.vsTerrainDepthOnly,a.fsTerrainDepthOnly,E.Default3D)},K={color:d,normal:c},this._updatePrograms(),ve=new o(W,m,l,this.resourceCounter,this.setNeedsRender.bind(this)),ge&&ge.then(function(e){ve.setGridImage(e)}),me=new T(W,{target:X.TEXTURE_2D,pixelFormat:X.RGBA,dataType:X.UNSIGNED_BYTE,samplingMode:X.NEAREST,width:4,height:4})},this.uninitializeRenderContext=function(e){null!=me&&(me.dispose(),me=null),ve&&(ve.dispose(),ve=null)},this._updatePrograms=function(){var e="spherical"===h,t="shader"===oe.mode;$.color=K.color.getProgram([e,!0,e&&he,t,le,t||le,this.receiveShadows]),$.normal=K.normal.getProgram([e,!0])},this.install=function(e){e.addExternalRenderer([M,L],this)},this.uninstall=function(e){e.removeExternalRenderer(this)},this.setRootTiles=function(e){J=e},this.isStencilEnabledLayerExtent=function(e){return Te.some(function(t){return e===t.id})},this.addStencilEnabledLayerExtent=function(e,t){Te.push({id:e,extent:[t[0],t[1],t[3],t[4]]})},this.removeStencilEnabledLayerExtent=function(e){for(var t=0;t<Te.length;t++)if(e===Te[t].id)return void Te.splice(t,1)},this.setTileSize=function(e){m=e,ve&&(ve.tileSize=e)},this.loadTile=function(e){S(null===e.renderData),e.renderData=te.acquire(),e.renderData.init();var t=this.getLocalOriginOfTile(e),r=e.createGeometry(e.renderData.updateGeometryState(e),t,"debug"===oe.mode,e.renderData.geometryInfo);e.renderData.localOrigin=t,this._setTileGeometry(e,r),ve.updateTileTexture(e)},this.queryVisibleLevelRange=function(e,t,r,i){var n=Ae.acquire();_.set(e,n.extent),t?n.minLevel=t:n.minLevel=-Number.MAX_VALUE,null!=r?n.maxLevel=r:n.maxLevel=Number.MAX_VALUE,n.callback=i,Se.push(n),this.setNeedsRender()},this.updateTileTexture=function(e){ve&&ve.updateTileTexture(e)},this.updateTileGeometryNeedsUpdate=function(e){return e.renderData.updateGeometryState(e).needsUpdate},this._updateTileGeometry=function(e){for(var t=e.renderData.geometryState,r=e.layerInfo[i.LayerClass.ELEVATION],n=0;n<r.length;n++)r[n].pendingUpdates&=~i.TileUpdateTypes.UPDATE_GEOMETRY;if(t.needsUpdate){e.renderData.vao&&this._releaseTileGeometry(e);var a=e.createGeometry(t,e.renderData.localOrigin,"debug"===oe.mode,e.renderData.geometryInfo);return this._setTileGeometry(e,a),!0}return!1},this.updateTileGeometry=function(e){return e.renderData.updateGeometryState(e),this._updateTileGeometry(e)},this.unloadTile=function(e){this._releaseTileGeometry(e),e.renderData.texture&&e.renderData.texture.dispose(),te.release(e.renderData),e.renderData=null},this.getLocalOriginOfTile=function(e){if(e.lij[0]>=j){for(;e.lij[0]>G;)e=e.parent;return e.centerAtSeaLevel}if("spherical"===h)return P;for(;e.parent;)e=e.parent;return e.centerAtSeaLevel},this.setVisibility=function(e){ne=e,this.setNeedsRender()},this.getStats=function(){return{numTilesRendered:be,numTilesCulled:ye,numTrianglesRendered:Re,numOriginsRendered:Ee}},this.setDisableRendering=function(e){de=!!e,this.setNeedsRender()},this.getOpacity=function(){return ae},this.getWireframeEnabled=function(){return"shader"===oe.mode},this.setWireframe=function(e){if(e&&e!==!0||(e={mode:e?"shader":"none"}),void 0!==e.mode&&oe.mode!==e.mode){var t="debug"===oe.mode,i="debug"===e.mode;oe.mode=e.mode,this._updatePrograms(),t!==i&&J&&r.traverseTilesPreorder(J,function(e){if(e.renderData){e.renderData.vao&&this._releaseTileGeometry(e);var t=e.createGeometry(e.renderData.updateGeometryState(e),e.renderData.localOrigin,i,e.renderData.geometryInfo);this._setTileGeometry(e,t)}}.bind(this)),this.setNeedsRender()}for(var n in e)oe.hasOwnProperty(n)&&(oe[n]=e[n]),this.setNeedsRender()},this.setOpacity=function(e){ae=e,this.setNeedsRender()},this.setDrawSkirts=function(e){se=e,this.setNeedsRender()},this.setCullBackFaces=function(e){fe=e,this.setNeedsRender()},this.setRenderOrder=function(e){ue=e,this.setNeedsRender()},this.setBorders=function(e){le!==e&&(le=e,"none"===oe.mode&&(oe.transitionTime=0),this._updatePrograms(),this.setNeedsRender())},this.setFrontMostTransparent=function(e){ce!==e&&(ce=e,this.setNeedsRender())},this.setVelvetOverground=function(e){he!==e&&(he=e,this._updatePrograms(),this.setNeedsRender())},this.setNeedsRender=function(){this.needsRender=!0,this.didRender=!1},this.resetNeedsRender=function(){this.didRender&&(this.needsRender=0!==Se.length,this.didRender=!1)};var Oe=O.create();this.isTransparent=function(){return 1>ae||"shader"===oe.mode&&(oe.wireOpacity<1||oe.surfaceOpacity<1)||!pe},this.render=function(e){if(Z&&!de&&ne&&J){var t=this.isTransparent(),r=t?L:M;if(e.slot===r){if(p.trace("# BEGIN RENDER TERRAIN"),re.clear(),z=null,this._renderCollectOrigins(),0!==ue){for(var i=0;i<re.length;i++)this._sortFrontToBack(re.data[i].tiles,B);this._sortFrontToBack(re,V)}var n,a=!1,s=!1,o=e.pass,l=e.camera;if(W.setBlendFunctionSeparate(X.SRC_ALPHA,X.ONE_MINUS_SRC_ALPHA,X.ONE,X.ONE_MINUS_SRC_ALPHA),W.setFaceCullingEnabled(fe),o===v.MATERIAL){s=t;var d=e.shadowMap&&e.shadowMap.getEnableState();if(this.receiveShadows!=d&&(this.receiveShadows=d,this._updatePrograms()),t&&ce){var f=$.depthOnly;W.bindProgram(f),W.setColorMask(!1,!1,!1,!1),W.setDepthTestEnabled(!0),this._renderTilesDepthOnly(l,W,f),W.setColorMask(!0,!0,!0,!0),W.setDepthFunction(X.EQUAL),W.setDepthWriteEnabled(!1)}n=$.color,a=!0,W.bindProgram(n),n.setUniform1f("opacity",ae),W.setBlendingEnabled(s),("shader"===oe.mode||le)&&(n.setUniform1f("wireframe.width",oe.width),n.setUniform1f("wireframe.falloff",Math.min(oe.width,oe.falloff)),n.setUniform1f("wireframe.wireOpacity",oe.wireOpacity*ae),n.setUniform1f("wireframe.surfaceOpacity",oe.surfaceOpacity*ae),n.setUniform4fv("wireframe.color",oe.color),n.setUniform1f("wireframe.near",l.near),n.setUniform1f("wireframe.far",l.far),"geometry"!==oe.subdivision&&"constant"!==oe.subdivision&&n.setUniform1f("wireframe.subdivision",k(oe.subdivision)))}else if(o===v.MATERIAL_DEPTH_SHADOWMAP&&this.castShadows||o===v.MATERIAL_DEPTH)n=o===v.MATERIAL_DEPTH_SHADOWMAP?$.depthShadowMap:$.depth,W.bindProgram(n),n.setUniformMatrix4fv("model",I),C[0]=l.near,C[1]=l.far,n.setUniform2fv("nearFar",C);else{if(o!==v.MATERIAL_NORMAL)return;n=$.normal,W.bindProgram(n)}e.shadowMap&&e.shadowMap.bind(n),e.ssaoHelper&&e.ssaoHelper.setUniforms(n),a&&(n.setUniform1i("tex",N),n.setUniform1i("overlayTex",N+1)),n.setUniformMatrix4fv("viewNormal",l.viewInverseTransposeMatrix),n.setUniformMatrix4fv("proj",l.projectionMatrix),n.setUniform3fv("lightDirection",e.lightingData.direction);var u=l.viewMatrix;for(O.set3(u[12],u[13],u[14],Oe),O.normalize(Oe),n.setUniform3fv("viewDirection",Oe),be=0,ye=0,Re=0,Ee=0,g(),i=0;i<re.length;i++){var h=re.data[i];n.setUniform3fv("origin",h.origin),c.bindView(h.origin,u,n),e.shadowMap&&e.shadowMap.bindView(n,h.origin),Ee++,this._renderTiles(h.tiles,n,a,e)}return s&&W.setBlendingEnabled(!1),t&&ce&&(W.setDepthFunction(X.LESS),W.setDepthWriteEnabled(!0)),fe&&W.setFaceCullingEnabled(!1),e.stencilRenderingHelper&&e.stencilRenderingHelper.getEnableState()&&e.stencilRenderingHelper.prepareStencilDisabledPass(),A(),be>0&&!xe&&(xe=!0,this.loaded&&this.loaded()),p.trace("# END RENDER TERRAIN"),!0}}},this._renderCollectOrigins=function(){for(var e=0;e<J.length;e++){var t=J[e],r=re.next();r.root=t,"spherical"===h?r.origin=P:r.origin=t.centerAtSeaLevel,r.tiles.clear(),this._renderCollectOriginsForRoot(r)}},this._renderCollectOriginsForRoot=function(e){for(ie.reset(e.root);!ie.done;){var t=ie.next(),r=t.renderData;if(!r||t.visible){var i=re.peek();if(t.lij[0]===G&&((i===e||0!==i.tiles.length)&&(i=re.next(),i.tiles.clear()),i.root=t,i.origin=t.centerAtSeaLevel),r){var n=t.lij[0];n>=j?re.peek().tiles.push(t):e.tiles.push(t),(null===z||z.lij[0]<n)&&(z=t),ie.skip()}}else ye++,ie.skip()}},this._sortFrontToBack=function(e,t){e.sort(t)},this._renderTilesDepthOnly=function(e,t,r){var i=e.viewMatrix;r.setUniformMatrix4fv("proj",e.projectionMatrix);for(var n=0;n<re.length;n++){var a=re.data[n];r.setUniform3fv("origin",a.origin),c.bindView(a.origin,i,r);for(var s=0;s<a.tiles.length;s++){var o=a.tiles.data[s],l=o.renderData;t.bindVAO(l.vao),D.assertCompatibleVertexAttributeLocations(l.vao,r);var d=l.vao.indexBuffer.size;se||(d=l.geometryInfo.numWithoutSkirtIndices),t.drawElements(X.TRIANGLES,d,l.vao.indexBuffer.indexType,0)}}t.bindVAO(null)},this._renderTiles=function(e,t,r,i){if(0!==e.length){var n=X.TRIANGLES;"debug"===oe.mode&&(n=X.LINES);var a,s,o="geometry"===oe.subdivision,l="constant"===oe.subdivision,d=z,f=!1;d?(a=d.lij[0],s=k(d.renderData.geometryInfo.numVertsPerRow)):(a=16,s=16),W.setDepthTestEnabled(!0),W.setBlendingEnabled(this.isTransparent());for(var u=0;u<e.length;u++){var c=e.data[u],h=c.renderData;if(i.stencilRenderingHelper&&i.stencilRenderingHelper.getEnableState()){for(var m=!1,v=0;v<Te.length;v++)if(c.intersectsExtent(Te[v].extent)){m=!0;break}m&&!f?(i.stencilRenderingHelper.prepareStencilReadPass(),f=!0):!m&&f&&(i.stencilRenderingHelper.prepareStencilDisabledPass(),f=!1)}if(p.trace("# RENDER TILE "+c.lij[0]+"/"+c.lij[1]+"/"+c.lij[2]+", screenDepth:"+c.screenDepth),r){t.setUniform2fv("texOffset",h.texOffset),t.setUniform1f("texScale",h.texScale);var g=h.textureReference||h.texture;if(W.bindTexture(g,N),h.overlayTexId?_e(t,h):(t.setUniform2fv("overlayTexOffset",U),W.bindTexture(me,N+1)),("shader"===oe.mode||le)&&(o||l))if(o)t.setUniform1f("wireframe.subdivision",k(h.geometryInfo.numVertsPerRow));else{var T=k(s,c.lij[0]-a);t.setUniform1f("wireframe.subdivision",T)}}var R=h.vao.indexBuffer.size;se||(R=h.geometryInfo.numWithoutSkirtIndices),W.bindVAO(h.vao),D.assertCompatibleVertexAttributeLocations(h.vao,t),W.drawElements(n,R,h.vao.indexBuffer.indexType,0),c.renderOrder=be,be++,Re+=R/3,H(c)}W.bindVAO(null)}};var _e=function(e,t){var r=t.overlayTexId,i=ee[r];i||(i=F.aquire(r).getGLTexture(),S(i),ee[r]=i),e.setUniform2fv("overlayTexOffset",t.overlayTexOffset),e.setUniform2fv("overlayTexScale",t.overlayTexScale),e.setUniform1f("overlayOpacity",t.overlayOpacity),W.bindTexture(i,N+1)},Ie=O.create(),Ne=O.create(),Ue=O.create(),Me=this.clippingExtent;this.intersect=function(e,t,i,n){if(J&&(!e.isSelection||!this.isTransparent())){O.subtract(i,t,Ie);var a=e.getMinResult(),s=e.getMaxResult();for(ie.reset(J);!ie.done;){var o=ie.next();if(null!==o.renderData){if(e.enableInvisibleTerrain){if(!o.visible&&Me&&!o.intersectsExtent(Me))continue}else if(!o.visible)continue;var l=o.renderData.geometryInfo.geometry,d=o.renderData.localOrigin;O.subtract(t,d,Ne),O.subtract(i,d,Ue),c.intersectTriangleGeometry(l,0,void 0,e,Ne,Ue,function(t,i,n){if((se||!(3*n>=o.renderData.geometryInfo.numWithoutSkirtIndices))&&t>=0&&(e.enableBackfacesTerrain||O.dot(i,Ie)<0)){var l;(void 0===a.dist||t<a.dist)&&(l=r.lij2str(o.lij[0],o.lij[1],o.lij[2]),a.set(void 0,l,t,i,void 0),a.setIntersector("terrain")),(void 0===s.dist||t>s.dist)&&(l=r.lij2str(o.lij[0],o.lij[1],o.lij[2]),s.set(void 0,l,t,i,void 0),s.setIntersector("terrain"))}})}}}},this._setTileGeometry=function(e,t){var r=e.renderData,i=t.geometry.getData(),a=i.getVertexAttr().terrain.data,s=i.getFaces()[0].indices.terrain;r.vao=new R(W,E.Default3D,{geometry:x.Pos3Tex},{geometry:b.createVertex(W,X.STATIC_DRAW,a)},b.createIndex(W,X.STATIC_DRAW,s)),r.geometryInfo.geometry&&n.releaseGeometry(r.geometryInfo.geometry),r.geometryInfo=t,this.setNeedsRender()},this._releaseTileGeometry=function(e){var t=e.renderData;t.vao.dispose(!0),t.vao=null,t.geometryInfo.geometry&&n.releaseGeometry(t.geometryInfo.geometry),t.geometryInfo.geometry=null,this.setNeedsRender()}};return B.TileRenderData=a,B});