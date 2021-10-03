import React from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const historico = [
  {id:'0', valor: ' 100 reais'},
  {id:'1', valor: ' 200 reais'}
]





export default function Historico() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList 
            data={historico}
            keyExtractor={item=>item.id}
            renderItem={({item})=><View><Text style={estilohis.item}>Valor:{item.valor}</Text></View>} 
        >


        </FlatList>
      </View>
    );
  }

  const estilohis = StyleSheet.create({
    item:{
        justifyContent: 'center', alignItems: 'center', backgroundColor:'#ccc,', widht: '100%', backgroundColor: '#009', padding: 10, marginHorizontal: 10, marginVertical: 10
    }
  })

