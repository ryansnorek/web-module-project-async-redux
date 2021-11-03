import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';

function App(props) {

  const { dispatch, data, isFetching, errors } = props;

  useEffect(() => {
    dispatch(getData())
  }, [])

  const handleClick = () => {
      dispatch(getData())
  };

  return (
    <div className="App">
     <h1>React Redux App</h1>
     <button onClick={handleClick}>Click</button>


    </div>
  );
}
const mapStateToProps = state => {
  return { 
    data: state.data,
    isFetching: state.isFetching,
    errors: state.error
  }
};
export default connect(mapStateToProps)(App);
