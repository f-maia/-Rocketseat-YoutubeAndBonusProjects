import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

export default () => Composed => 
  class extends Component {
    static getInitialProps(ctx){
      return loadGetInitialProps(Composed, ctx);
    }

    componentDidMount(){
      console.log("Page view");

      ReactGA.initialize('ID_ANALYTICS');
      ReactGA.pageview(window.location.pathname);
    }

    render(){
      return <Composed {...this.props} />;
    }
  }
    