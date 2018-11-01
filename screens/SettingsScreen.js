import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import MovieDetail from '../components/MovieDetail';
import Header from '../components/Header';

export default class SettingsScreen extends React.Component {

  state = { movies: [] };

  static navigationOptions = {
    header: null,
  };

    componentWillMount() {
      axios.get('http://54.224.171.128:8001/')
      .then(response =>
        this.setState({ movies: response.data[3].products})
      );

    }

    renderMovies() {

      return this.state.movies.map(movie =>
        <MovieDetail key={movie} movie={movie} />
      );
    }



  render() {
      console.log(this.state.movies)
      return (


          <View style={styles.container}>
          <Header HeaderText='Add Products'/>
          <ScrollView>
            {this.renderMovies()}
          </ScrollView>
          </View>
        );
      }
}


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
