import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {IRepository} from './types';
import api from './services/api';
import {createLike} from './services/httpFunction';

import styles from './styles';

const App = () => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    const loadRepostories = async () => {
      const response = await api.get('/repositories');
      setRepositories(response.data);
    };

    loadRepostories();
  }, []);

  async function handleAddLike(respositorieId: string) {
    await createLike(respositorieId);
    const findIndexLike = repositories.findIndex(
      (repository) => repository.id === respositorieId,
    );
    if (findIndexLike >= 0) {
      const auxRepositories: IRepository[] = repositories;
      auxRepositories[findIndexLike].likes =
        repositories[findIndexLike].likes + 1;
      setRepositories([...auxRepositories]);
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
          <FlatList
            data={repositories}
            keyExtractor={(repository) => repository.id}
            renderItem={({item}) => (
              <View key={item.id} style={styles.containerRepository}>
                <View>
                  <Text style={styles.repository}>{item.title}</Text>
                  {item.techs.map((tech, index) => (
                    <Text key={index} style={styles.tech}>
                      {tech}
                    </Text>
                  ))}
                </View>
                <TouchableHighlight
                  onPress={() => handleAddLike(item.id)}
                  activeOpacity={0.6}>
                  <View style={styles.lineButton}>
                    <Text style={styles.countLikes}>{item.likes}</Text>
                    <Icon name="like2" size={24} color="#121212" />
                  </View>
                </TouchableHighlight>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
