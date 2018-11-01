import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.HeaderText}</Text>
    <Text style={styles.textStyle2}>Welcome</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#0A7A06',
    justifyContent: 'center', //Posicion vertical
    alignItems: 'center', //Posicion Horizontal
    height: 120, //Altura
    marginTop: 0,
    paddingTop: 0, //Separacion TOP
    shadowColor: '#000', //Sombra
    shadowOffset: { width: 0, height: 2 }, //Sombra
    shadowOpacity: 0.2, //Sombra
    elevation: 2, // Discutura despues
    position: 'relative' // Discutura despues
  },
  textStyle: {
    marginTop: 65,
    fontSize: 20,
    color:'#FFF',
  },
  textStyle2: {
    fontSize: 15,
    color:'#FFF',
  },
};

export default Header;
