import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class inPage extends React.Component {
  render() {
    return (
        <View>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Buzz App</Text>
        </View>
        <Text style={styles.mainText}>Instagram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: '#FFBFBD',
        alignContent: 'center',
        
    },
    headerText: {
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 50,
        fontWeight: 'bold',
    },
    mainText: {
        marginTop: 225,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000',
    }
});
