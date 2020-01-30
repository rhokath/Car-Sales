import React from 'react';
import { removeFeature} from '../actions';
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e)=>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  console.log('state', state)
  return{
    carOnProps: state.car,
    additionalPrice: state.additionalPrice,
    StoreOnProps: state.store

  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);
