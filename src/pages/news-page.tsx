import React, { useState, useRef, useEffect }  from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Button,
    ImageBackground,
    Animated,
    StatusBar,
    FlatList,
    ScrollView,
    Linking,
    ActivityIndicator,
    Alert
  } from 'react-native';
import axios from 'axios';
import { MaterialIcons, AntDesign, EvilIcons, Entypo, Ionicons } from '@expo/vector-icons'

type Props = { navigation: any }

const NewsPage: React.FC<Props> = ({ navigation }) => {

    const [mydata, setMyData] = useState([])




    useEffect(() => {
  
      axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-08-09&sortBy=publishedAt&apiKey=370c83ee097f4438b59685065c6daced').then(res => {
        console.log(res.data.articles)
        const data = res.data.articles
        setMyData(data);
      });
    })
  
    const handleOnPress = () => {
      Linking.openURL(`${mydata.url}`)
        .catch((error) => Alert.alert(error))
    }
    return (

        <View style={styles.container}>
         
           <ScrollView style={{ marginTop: '5%', height: '100%', marginLeft: 8 }}>
    
    
              {mydata.map(article => {
    
                return (
                  <View style={{ borderBottomColor: '#red', }}>
    
                    <TouchableOpacity style={{padding:0}} 
                    // onPress={() => {
                    // Linking.openURL(props.article.url)
                    // }}
                    >
                      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{article.title}</Text>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10,marginBottom:10 }}>{article.description}...</Text>
                      <Image source={{uri:article.urlToImage}}
                        style={{ width: "98%",height:200,marginBottom:20}} />
                    </TouchableOpacity>
    
                  </View>
                )
              }
    
              )}

            </ScrollView>
    
        </View>
    
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 0
    },
    ProfileImage: {
      width: 55,
      height: 55,
      borderRadius: 40
    },
    ProfileImageNotification: {
      height: 12,
      width: 12,
      backgroundColor: '#4853ef',
      borderRadius: 6,
      position: 'absolute',
      right: 6,
      borderWidth: 2,
      borderColor: '#000'
    },
    AddUser: {
      height: 140,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#0f9d58',
      borderRadius: 10,
      marginRight: 14
    },
    AddUserIconbg: {
      width: 70,
      height: 70,
      backgroundColor: '#000',
      borderRadius: 10,
      marginBottom: 10,
      justifyContent: 'center'
    },
    PanelHandle: {
      height: 6,
      width: 50,
      backgroundColor: '#3f84eb',
      borderRadius: 6,
      alignSelf: 'center',
      marginTop: 6
    },
    PanelItemContainer: {
      borderWidth: 0.4,
      borderColor: '#666',
      padding: 14,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    },
    PanelImage: {
      width: 30,
      height: 30,
      backgroundColor: '#000',
      borderRadius: 40
    },
    PanelButton: {
      padding: 14,
      width: 200,
      justifyContent: 'center',
      backgroundColor: '#1c1c1c',
      borderRadius: 10
    },
    PanelButtonText: {
      fontSize: 16,
      color: '#fff',
      alignSelf: 'center'
    }
  });
export default NewsPage;