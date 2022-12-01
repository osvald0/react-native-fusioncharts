import React from 'react';
import { ScrollView } from 'react-native';
import ReactNativeFusionCharts from './src/FusionCharts';

const App = (props) => {
  const {
    type,
    width,
    height,
    dataSource,
    dataFormat,
    dataJson,
    schemaJson,
    containerProps
  } = props.chartConfig;

  return (
    <ScrollView {...containerProps}>
      <ReactNativeFusionCharts
        type={type}
        width={width}
        height={height}
        dataSource={dataSource}
        dataFormat={dataFormat}
        dataJson={dataJson}
        schemaJson={schemaJson}
        modules={props.modules}
        events={props.events}
        {...props}
      />
    </ScrollView>
  );
}

export default App;