import React from 'react';
import {connect} from "react-redux";
import {removeFeature} from '../actions';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carOnProps.features.length ? (
        <ol type="1">
          {props.carOnProps.features.map(item => (
            <AddedFeature key={item.id} removeFeature={removeFeature}feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
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

export default connect(mapStateToProps, {})(AddedFeatures);
