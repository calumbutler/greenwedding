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

define([],function(){var e={};e.defaultNoDataValue=-3.4027999387901484e38,e.decode=function(l,s){s=s||{};var r=s.encodedMaskData||null===s.encodedMaskData,o=a(l,s.inputOffset||0,r),f=null!=s.noDataValue?s.noDataValue:e.defaultNoDataValue,u=t(o,s.pixelType||Float32Array,s.encodedMaskData,f,s.returnMask),m={width:o.width,height:o.height,pixelData:u.resultPixels,minValue:o.pixels.minValue,maxValue:o.pixels.maxValue,noDataValue:f};return u.resultMask&&(m.maskData=u.resultMask),s.returnEncodedMask&&o.mask&&(m.encodedMaskData=o.mask.bitset?o.mask.bitset:null),s.returnFileInfo&&(m.fileInfo=i(o),s.computeUsedBitDepths&&(m.fileInfo.bitDepths=n(o))),m};var t=function(e,t,i,n,a){var s=0,r=e.pixels.numBlocksX,o=e.pixels.numBlocksY,f=Math.floor(e.width/r),u=Math.floor(e.height/o),m=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null);var d,g;d=new t(e.width*e.height),a&&i&&(g=new Uint8Array(e.width*e.height));for(var c,h,k=new Float32Array(f*u),x=0;o>=x;x++){var w=x!==o?u:e.height%o;if(0!==w)for(var p=0;r>=p;p++){var y=p!==r?f:e.width%r;if(0!==y){var V,v,B,U=x*e.width*u+p*f,D=e.width-y,M=e.pixels.blocks[s];M.encoding<2?(0===M.encoding?V=M.rawData:(l(M.stuffedData,M.bitsPerPixel,M.numValidPixels,M.offset,m,k,e.pixels.maxValue),V=k),v=0):B=2===M.encoding?0:M.offset;var b;if(i)for(h=0;w>h;h++){for(7&U&&(b=i[U>>3],b<<=7&U),c=0;y>c;c++)7&U||(b=i[U>>3]),128&b?(g&&(g[U]=1),d[U++]=M.encoding<2?V[v++]:B):(g&&(g[U]=0),d[U++]=n),b<<=1;U+=D}else if(M.encoding<2)for(h=0;w>h;h++){for(c=0;y>c;c++)d[U++]=V[v++];U+=D}else for(h=0;w>h;h++){for(c=0;y>c;c++)d[U++]=B;U+=D}if(1===M.encoding&&v!==M.numValidPixels)throw"Block and Mask do not match";s++}}}return{resultPixels:d,resultMask:g}},i=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:this.noDataValue}}},n=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;t>n;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},a=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8));l=new DataView(e,t,n.mask.numBytes);var r=l.getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else if(0===(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)){var s=new Uint8Array(Math.ceil(n.width*n.height/8));n.mask.bitset=s}l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,d=n.pixels.numBlocksY,g=m+(n.width%m>0?1:0),c=d+(n.height%d>0?1:0);n.pixels.blocks=new Array(g*c);for(var h=1e9,k=0,x=0;c>x;x++)for(var w=0;g>w;w++){var p=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var v=l.getUint8(0);if(p++,V.encoding=63&v,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==v&&2!==v){if(v>>=6,V.offsetType=v,2===v)V.offset=l.getInt8(1),p++;else if(1===v)V.offset=l.getInt16(1,!0),p+=2;else{if(0!==v)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),p+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(v=l.getUint8(p),p++,V.bitsPerPixel=63&v,v>>=6,V.numValidPixelsType=v,2===v)V.numValidPixels=l.getUint8(p),p++;else if(1===v)V.numValidPixels=l.getUint16(p,!0),p+=2;else{if(0!==v)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(p,!0),p+=4}}if(t+=p,3!=V.encoding){var B,U;if(0===V.encoding){var D=(n.pixels.numBytes-1)/4;if(D!==Math.floor(D))throw"uncompressed block has invalid length";B=new ArrayBuffer(4*D),U=new Uint8Array(B),U.set(new Uint8Array(e,t,4*D));for(var M=new Float32Array(B),b=0;b<M.length;b++)h=Math.min(h,M[b]);V.rawData=M,t+=4*D}else if(1===V.encoding){var I=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),P=Math.ceil(I/4);B=new ArrayBuffer(4*P),U=new Uint8Array(B),U.set(new Uint8Array(e,t,I)),V.stuffedData=new Uint32Array(B),t+=I}}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},l=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,d=0,g=Math.ceil((s-n)/a),c=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*c,r=0;i>r;r++){if(0===d&&(f=e[m++],d=32),d>=t)o=f>>>d-t&u,d-=t;else{var h=t-d;o=(f&u)<<h&u,f=e[m++],d=32-h,o+=f>>>d}l[r]=g>o?n+o*a:s}return l};return e});