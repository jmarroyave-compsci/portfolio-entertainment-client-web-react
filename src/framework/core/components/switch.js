import React from 'react';
import UIComponent from 'core/components/ui_component';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';


const styles = [];

class UISwitch extends UIComponent {
  constructor() {
    super();
    this.state = {
    }

    this.triggerOnChange = this.triggerOnChange.bind(this);
  }

  getDefaults(){
    const defaults = {
      className : '',      
      checked: false,
      onChange: '',
    }    
    return defaults;
  }
  
  triggerOnChange(e, value){
    const $this = this;
    this.setState({checked: value}, function(){
      if($this.props.onChange)
        $this.props.onChange(value);      
    })
  }

  render() {
    return (
      <Switch checked={this.state.checked} className={this.state.className} onChange={this.triggerOnChange}/>
    );
  }
}

export default withStyles(styles)(UISwitch);