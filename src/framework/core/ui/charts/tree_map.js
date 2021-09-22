import React from 'react';
import PropTypes from 'prop-types';
import { default as RDTreeMap }  from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import ResponsiveWrapper from 'core/ui/components/responsiveness';

const headerHeight = 45;

class TreeMap extends React.Component {
  render() {
    const { title, parentWidth, data, height } = this.props;

    var width = parentWidth;

    if (!data || data.children.length === 0) return <p>no data</p>

    return <div id="___" ref={this.ref}>
        <RDTreeMap  
          id="myTreeMap"
          width={width}
          height={height - headerHeight}
          data={data}
          levelsToDisplay={1}
          nodeStyle={{ paddingLeft: 5, paddingRight: 5 }}
        />
      </div>;
  }
}

TreeMap.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

TreeMap.defaultProps = {
  data: {},
  title: "title",
  height: 100,
};


export default ResponsiveWrapper(TreeMap)