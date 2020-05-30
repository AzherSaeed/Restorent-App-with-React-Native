import React , {Component} from 'react';
import {View, Platform} from 'react-native';
import Home from './HomeComponent'
import Menu from '../components/MenuComponent';
import DishDetail from './DishDetail'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: DishDetail }
},
{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: "white"     
        }
    }
}
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
},
{
    
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#512DA8"
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            color: "white"            
        }
    }
}
);

const MainNavigator = createDrawerNavigator({
    Home: 
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },
    Menu: 
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        }, 
      }
}, {
  drawerBackgroundColor: '#D1C4E9'
});


class MainComponent extends Component {
    render(){
        return (
            <View style={{flex : 1 , paddingTop : Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight  }}>
            <MainNavigator />
            <Home/>
            </View>
        )
    }
}

export default MainComponent;