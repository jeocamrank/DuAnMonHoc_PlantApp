import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AppLoading, Asset } from 'expo';

import navigation from './navigation';
import { Block } from './components';
import * as constans from './constants';
import Navigation from './navigation';

// import all used images
const images = [
  require('./assets/images/back.png'),
  require('./assets/images/plants.png'),
  require('./assets/images/seeds.png'),
  require('./assets/images/flowers.png'),
  require('./assets/images/sprayers.png'),
  require('./assets/images/pots.png'),
  require('./assets/images/fertilizers.png'),
  require('./assets/images/plant_1.png'),
  require('./assets/images/plant_2.png'),
  require('./assets/images/plant_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async () => {
    // 
    const cacheImages = images.map(img => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  }
  
  render() {
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      <AppLoading
        startAsync={this.handleResourcesAsync}
        onError={error => console.warn(error)}
        onFinish={() => this.setState({ isLoadingComplete: true })}
      />
    }
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
