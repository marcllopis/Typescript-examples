import React from 'react';
import Proptypes from 'prop-types';

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.isVisible &&
      <h1>The number {props.num}</h1>
    }
  </div>
)

Header.propTypes = {
  title: Proptypes.string,
  isVisible: Proptypes.bool,
  num: Proptypes.number
}

Header.defaultProps = {
  isVisible: true,
  num: 22222
}

export default Header;
