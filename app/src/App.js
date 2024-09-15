import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, adopt, removeAdoption } from './actions';
import { v4 as uuidv4 } from 'uuid';

function App(props) {

  const { dispatch, 
          data, 
          adoptions,
          isFetching, 
          errors } = props;

  useEffect(() => {
    dispatch(getData())
  }, [])

  if (errors) {
    return <h1>Error loading</h1>
  }
  if (isFetching) {
    return <h1>...Loading...</h1>
  }

  const handleClick = () => {
      dispatch(getData())
  };
  const handleAdopt = () => {
      dispatch(adopt(data))
      dispatch(getData())
  };
  const handleAdoptClick = e => {
    dispatch(removeAdoption(e.target.id))
    console.log(e.target.id)
  };

  console.log(adoptions)

  return (
    <div className="App">
      <div className="dogs">
        <button className="nope" onClick={handleClick}>Nope</button>
        <img src={data} alt="dog"></img>
        <button className="add" onClick={handleAdopt}>Adopt</button>
      </div>
      <div className="my-adoptions">
        {adoptions[0] ? <h2>My Adoptions</h2> : <h2>Adopt a dog</h2>}
        {adoptions.map(adoption => {
        return (
          <img className="adoption" 
               src={adoption} 
               alt="adoption"
               onClick={handleAdoptClick}
               >
          </img>
          )
        })}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return { 
    data: state.data,
    adoptions: state.adoptions,
    isFetching: state.isFetching,
    errors: state.errors
  }
};
export default connect(mapStateToProps)(App);
