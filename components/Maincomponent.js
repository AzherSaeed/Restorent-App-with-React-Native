import React , {Component} from 'react';
import {View, Platform} from 'react-native'
import Menu from '../components/MenuComponent';
import DishDetail from './DishDetail'
import { createStackNavigator } from 'react-navigation';

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


class MainComponent extends Component {
    render(){
        return (
            <View style={{flex : 1 , paddingTop : Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight  }}>
            <MenuNavigator />
            </View>
        )
    }
}

export default MainComponent;