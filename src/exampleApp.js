import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = (state) => {
  // console.log(state);
  return {
    store: state,
    app: state.app,
    films: state.statePage1.films
  };
};

const action = (payload) => ({
  type: 'FILMS_GET',
  payload,
});

const action2 = (payload) => ({
  type: 'APP2',
  payload,
});

const mapDispatch = {
  action,
  action2,
};

class App extends Component {

  state = {
    films: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then((data) => data.json())
      .then((data) => this.props.action(data));
  }

  render() {
    console.log('render');
    console.log(this.props.films);
    return (
      <>
        <button onClick={this.props.action}>123</button>;{' '}
        <button onClick={this.props.action2}>12122133</button>
      </>
    );
  }
}

export default connect(mapState, mapDispatch)(App);

// connect.js

// export const connect = (mapState, mapDispatch) => (Component) => {

//   const { app } = mapState;
//   const { action } = mapDispatch;
//
//   return <Component app={app} action={action} />;
// };
