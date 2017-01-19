
import Header from 'shared/header';
import Footer from 'shared/footer';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        {this.props.children}

        <Footer />
      </div>
    );
  }
}
