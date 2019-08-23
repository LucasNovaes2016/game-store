import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ store: { alert } }) => {
  return (
    <div>
      {alert !== null ? <div className={`alert ${alert.type} alert-dismissible fade show`} role="alert">
        {alert.message}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> : null}
    </div>

  )
}

Alert.propTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(
  mapStateToProps
)(Alert);
