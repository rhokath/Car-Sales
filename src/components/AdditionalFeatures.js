import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {addNewFeature} from '../actions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.storeOnProps.length ? (
        <ol type="1">
          {props.storeOnProps.map(item => (
            <AdditionalFeature key={item.id} addNewFeature={addNewFeature}feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  console.log('state', state)
  return{
    carOnProps: state.car,
    storeOnProps: state.store,
    additionalPrice: state.additionalPrice

  }
}

export default connect(mapStateToProps, {addNewFeature})(AdditionalFeatures);
