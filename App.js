import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from "./src/nav";
import Generator from "./src/generator"
import ListItem from './src/listitem'
import Input from './src/input'

export default class App extends Component {
 
  state = {
    nameOfApp: 'My awesome app',
    random:[20,837]
  }

  onAddRandom = () => {
   const random = Math.floor(Math.random()*100)+1
   this.setState(prevState => {
     return {
       random:[...prevState.random,random]
       }
    })
  }

  onItemDelete = (position) => {
    const newArray = this.state.random.filter((item,index)=>{
      return position != index
    })
    this.setState({
      random: newArray
    })
  }
 
  render() {
    return (
      <View style={styles.mainView}>
        {/* <Nav name={this.state.nameOfApp}/>

        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello guys</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Hello guys</Text>
        </View>

        <Generator add={this.onAddRandom}/>

        <ListItem 
          items={this.state.random}
          delete={this.onItemDelete}
        /> */}
        <Input />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%"
  },
  basicView:{
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
    color: 'white'
  },
  basicText:{
    fontSize: 20,
    color:'#ffffff',
    textAlign:'center',
    padding:20
  }
});

