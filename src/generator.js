import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

// const generate = () => {
//     return (
//        <Button
//        title="add one"
//        onPress={()=> alert('trigger')}
//        />

//     )
// }

const generate = (props) => {
    return (
      <TouchableHighlight
        style={styles.generate}
        onPress={() => props.add()}
        //onLongPress={() => alert('trigger')}
        //onPressIn={() => alert("trigger")}
        //onPressOut={()=> alert('trigger')}
        //delayLongPress={3000}
      >
        <Text style={{ color: "#fff" }}>Add number</Text>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    generate: {
        backgroundColor: '#00bcd4',
        alignItems: 'center',
        padding: 10,
        width: '100%'
    }
})

export default generate;