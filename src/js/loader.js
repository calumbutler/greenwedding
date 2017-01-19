import React from 'react';
import ReactDom from 'react-dom';
import babelPolyfill from 'babel-polyfill'
import Container from 'shared/container';

if (!_babelPolyfill) {
	console.log('Error: babel-polyfill could not be detected');
}

let initializeApp = () => {
	console.log('main init')
  //ReactDom.render(<Header/>, document.getElementById('header'));
	ReactDom.render(<Container />, document.getElementById('container'));
};

if (document.readyState === 'loaded') {
   initializeApp()
} else {
  window.onload = initializeApp;
}
