import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Tab = createBottomTabNavigator();

const FirstRoute = () => (
    <View style={{ flex: 1 }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1}} />
  );

  const ThirdRoute = () => (
    <View style={{ flex: 1}} />
  );

  const FourthRoute = () => (
    <View style={{ flex: 1 }} />
  );

  const FifthRoute = () => (
    <View style={{ flex: 1 }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

export default function SwitchHeader() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Tracker' },
        { key: 'second', title: 'Workouts' },
        { key: 'third', title: 'Programs' },
        { key: 'fourth', title: 'Teachers' },
        { key: 'fifth', title: 'brands' },
    ]);
  
      return (
        <TabView
          renderTabBar={props => <TabBar {...props} 
                                        indicatorStyle={{borderBottomWidth: 3, borderBottomColor:'white' }} 
                                        style={{backgroundColor:''}}
                                        renderLabel={({ route}) => (
                                            <Text style={{color: 'white'}}>
                                                {route.title}
                                            </Text>
                                        )}
                                  />}
          navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: FirstRoute,
            fourth: SecondRoute,
            fifth: FifthRoute,
        })}
        />
      );
}


const styles = StyleSheet.create({
    tabs: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#949494',
    },
    header_tab: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
        fontWeight: 600,
        paddingBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: '#000000'
    },
    active: {
        color: '#4067eb',
        marginBottom: -2,
        borderBottomWidth: 3,
        borderBottomColor: '#4067eb',
    },
});
