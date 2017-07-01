// this is just for testing of loading as npm module
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

class ModButton extends Component {

  constructor(props) {

    super(props);

    this.state = {
      msg: 'this is a message'
    };
    
    this.update = this.update.bind(this);

  }

  update(e){
    this.setState({
      msg: 'this s a message update'
    });
  }

  render(){
    return(
      <button className={styles.button} onClick={this.update}>{this.props.children}</button>
    );
  }

}

export default ModButton;