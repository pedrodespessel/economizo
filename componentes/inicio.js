import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Inicio() {
    return (
      <View style={estilos.container}>

        <View>
            <Text style={estilos.economizo}>E c o n o m i z o</Text>
        </View>
        <View>
            <Text style={estilos.txt4}>Gastos = R$0,00</Text>
            <Text style={estilos.txt3}>Ganhos = R$0,00</Text>
            <Text style={estilos.total}>Total = R$0,00</Text>
        </View>
        <View style={estilos.flexdiv}>
        <Button title="+ Ganho" style={estilos.bt1} onPress={() => addGanho()}></Button>
        <Button title="+ Gasto" style={estilos.bt2}></Button>
        </View>

      </View>



    );
  }






  const estilos = StyleSheet.create({
    container:{
        justifyContent: 'center', alignItems: 'center', backgroundColor:'#ccc,', flexWrap: 'wrap', widht: '100%'
    },
    economizo:{
        fontSize:50,
        fontWeight:'bold',
        marginBottom: 40, flexWrap: 'wrap', widht: '100%'
    },
    txt3:{
        backgroundColor: "green", borderWidth: 1, fontSize:30, borderRadius:10, flexWrap: 'wrap', 
    },
    txt4:{
        backgroundColor: "red", borderWidth: 1, fontSize:30, borderRadius:10, flexWrap: 'wrap'
    },
    total:{
        backgroundColor: "gray", borderWidth: 1, fontSize:50, borderRadius:20, widht: '100%', flexWrap: 'wrap'
    },
    bt1:{
        width: '50%', flexWrap: 'wrap'
    },
    bt2:{
        widht:'50%', flexWrap: 'wrap'
    },
    flexdiv:{
        backgroundColor:'#ccc,', flexWrap: 'wrap', widht: '100%', flexDirection: 'row', justifyContent: 'space-around',

    }

  })