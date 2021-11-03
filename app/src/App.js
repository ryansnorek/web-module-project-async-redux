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
      <button onClick={handleClick}>Bark</button>
      <img src={data} alt="dog"></img>
    </div>
  );
}
const mapStateToProps = state => {
  return { 
    data: state.data,
    isFetching: state.isFetching,
    errors: state.errors
  }
};
export default connect(mapStateToProps)(App);
