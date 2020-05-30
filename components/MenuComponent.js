import React , { Compoenent, Component } from 'react';
import {View , FlatList , Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';



class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };
    render(){
        
        const renderMenuItem = ({index , item}) => {
            return(
                <ListItem key={index} title={item.name} subtitle={item.description} hideChevron={true} 
                leftAvatar = {{source : require('./images/buffet.png')}} onPress={() => navigate('Dishdetail' , {dishId : item.id})} />
            )
        }
        const { navigate } = this.props.navigation;
        return (
            <FlatList data={this.state.dishes} renderItem={renderMenuItem} keyExtractor={item => item.id.toString()} />
        )
    }

  
   
}

export default MenuComponent;