import React from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';


 const Arrow = ({direction, onClick, size}) => (
  <button
    onClick={onClick}
  >
    {
      direction === 'left' ?
        <ArrowBackIos style={{fontSize: size || 20 }}/>
        :
        <ArrowForwardIos style={{fontSize: size || 20  }}/>
    }

  </button>
);
export default Arrow
