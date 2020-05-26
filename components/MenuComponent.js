import React , { Compoenent } from 'react';
import {View , FlatList , Text } from 'react-native';
import { ListItem } from 'react-native-elements';

function MenuComponent (props) {

    const renderMenuItem = ({index , item}) => {
        return(
            <ListItem key={index} title={item.name} subtitle={item.description} hideChevron={true} 
            leftAvatar = {{source : require('./images/buffet.png')}} />
        )
    }
    return (
        <FlatList data={props.dishes} renderItem={renderMenuItem} keyExtractor={item => item.id.toString()} />
    )
}

export default MenuComponent;