import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => (
  <Card>
    <CardSection>
      <View style={styles.headerContentStyle}>
        <Text>{props.movie.name}</Text>
      </View>
    </CardSection>
    <CardSection style={styles.rowStyle}>
      <View>
        <TouchableOpacity>
          <Image
          style={styles.posterStyle}
          source={{ uri: `${props.movie.image.thumbnailx300}` }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{props.movie.descriptionShort}</Text>
      </View>
      <View style={styles.textContainer2}>

          <TouchableOpacity>
            <Text style={styles.textStyle2}>+</Text>
          </TouchableOpacity>

          <View style={styles.textContainer}>
          </View>

          <TouchableOpacity>
            <Text style={styles.textStyle2}>-</Text>
          </TouchableOpacity>

      </View>
    </CardSection>
  </Card>
);

// https://image.tmdb.org/t/p/w500/

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifeContent: 'space-around',
    alignItems: 'center'
  },
  posterStyle: {
    height: 150,
    width: 150
  },
  rowStyle: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  },
  textContainer: {
    flex: 1,
    height: 150,
    width: 200, // Trick to fill the avaible space
    flexDirection: 'row',
    justifeContent: 'space-around',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 0,
    paddingRight: 5,
    paddingLeft: 5,
  },
  textStyle: {
    flexDirection: 'column',
    numberOfLines: 3,
    fontSize: 12,
    ellipsizeMode: 'head',
    textAlign: 'justify',
  },
  textStyle2: {
    width: 60,
    backgroundColor: '#FFF',
    flexDirection: 'center',
    fontSize: 30,
    textAlign: 'center',
  },
  textContainer2: {
    flex: 2,
    flexDirection: 'row',
    justifeContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingRight: 5,
    paddingLeft: 5,
  },

};

export default MovieDetail;
