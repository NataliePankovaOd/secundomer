import React from 'react';
import PropTypes from 'prop-types';
import setTimeFormat from '../script.js';

export const Controls = ({
  time,
  start,
  stop,
  reset,
  wait,
}) => (
  <>
    <div className="main">
        <div className="container">
            <button type="button" className="button" onClick={start}>Start</button>
            <button type="button" className="button" onClick={stop}>Stop</button>
            <button type="button" className="button" onClick={reset}>Reset</button>
            <button type="button" className="button" onClick={wait}>Wait</button>
        </div>
    </div>
  </>
);

Controls.propTypes = {
    time: PropTypes.number.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    wait: PropTypes.func.isRequired,
};
