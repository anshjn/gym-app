import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Tab = createBottomTabNavigator();

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#FA8072' }} />
  );

  const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#6495ED' }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });

export default function SwitchTabs() {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Monthly' },
        { key: 'second', title: 'Queaterly' },
        { key: 'third', title: 'Half Yearly' },
        { key: 'fourth', title: 'Yearly' },
    ]);

      return (
        <TabView
          renderTabBar={props => <TabBar {...props} 
                                        indicatorStyle={{ backgroundColor: 'blue', borderBottomWidth: 3, borderBottomColor:'blue' }} 
                                        renderLabel={({ route}) => (
                                            <Text style={{color: 'black'}}>
                                                {route.title}
                                            </Text>
                                        )}
                                        style={{ backgroundColor: 'white', borderBottomColor:'black', borderStyle: 'solid', borderBottomWidth: 4 }}
                                  />}
          navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: FirstRoute,
            fourth: SecondRoute,
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
