import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, 
        TouchableOpacity, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import { Icon } from 'react-native-elements';

// import console = require('console');

class NewQualificationScreen extends React.Component {
    state = { name: '', min: '', max: '', grades: '', description: '' }

    saveQualification = () => {

        const name = this.state.name;
        const min = this.state.min;
        const max = this.state.max;
        const grades = this.state.grades;
        const description = this.state.description;
        

        if (name !== '' && min !== '' && max !== '' && 
            grades !== '' && description !== '' ) {

            try {
                console.log('sucess');
                const dir = firebase.database().ref('/qualification').push();
                const primaryKey = dir.key;

                dir.set({
                    key: primaryKey,
                    name, 
                    minScore: min, 
                    maxScore: max, 
                    grades,
                    description
                });

                this.props.navigation.push('Qualification');
            }
            catch (error) {
                console.log(error);
            }

        }
        else {
            console.log('failed');
            ToastAndroid.show('Please enter all details needed!', ToastAndroid.SHORT);
        }
    }

    render() {
        const { containerStyle, headerStyle, bodyStyle, iconContainerStyle, 
                headerInputContainerStyle, headerInputStyle, textGroupContainerStyle,
                textGroupStyle, textHeaderStyle, textGroupStyle2, 
                buttonStyle, buttonTextStyle, buttonGroupStyle, bodyInputStyle,
                bodyInputStyle2 } = styles;

      return (
        <KeyboardAvoidingView style={containerStyle} behavior='padding' enabled >
            <View style={headerStyle}>
                <View style={iconContainerStyle}>
                    <Icon
                        name='chevron-left'
                        type='font-awesome'
                        color='white'
                        size={28}
                        containerStyle={{alignItems: 'flex-start'}}
                        onPress={() => this.props.navigation.navigate('Qualification')}
                    />
                </View>
                <View style={headerInputContainerStyle}>
                    <TextInput
                        style={headerInputStyle}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                        placeholder='Qualification Name'
                        autoFocus
                    />
                </View>
                
            </View>
            <View style={bodyStyle}>
                <View style={textGroupContainerStyle}>
                    <View style={textGroupStyle2}>
                        <View>
                            <Text style={textHeaderStyle}>Minimum Score</Text>
                            <View style={{ alignItems: 'stretch' }}>
                                <TextInput
                                    style={bodyInputStyle}
                                    onChangeText={min => this.setState({ min })}
                                    value={this.state.min}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'stretch' }}>
                            <Text style={textHeaderStyle}>Maximum Score</Text>
                            <View>
                                <TextInput
                                    style={bodyInputStyle}
                                    onChangeText={max => this.setState({ max })}
                                    value={this.state.max}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={textGroupStyle}>
                        <Text style={textHeaderStyle}>List of possible grades</Text>
                        <View>
                            <TextInput
                                style={bodyInputStyle2}
                                onChangeText={grades => this.setState({ grades })}
                                value={this.state.grades}
                            />

                        </View>
                            
                    </View>
                    <View style={textGroupStyle}>
                        <Text style={textHeaderStyle}>Description</Text>
                        <TextInput
                            style={bodyInputStyle2}
                            onChangeText={description => this.setState({ description })}
                            value={this.state.description}
                        />
                    </View>
                    <View style={buttonGroupStyle}>
                    <TouchableOpacity 
                        style={buttonStyle}
                        onPress={this.saveQualification}
                    >
                        <Text style={buttonTextStyle}>
                            Add
                        </Text>
                    </TouchableOpacity>

                </View>
                    
                </View>
            </View>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = {
      containerStyle: {
          flex: 1, 
          backgroundColor: '#34495e'
      }, 
      headerStyle: {
          flex: 3, 
          paddingTop: 20,
          backgroundColor: 'red'
      }, 
      bodyStyle: {
          flex: 7, 
          backgroundColor: 'white',
          paddingLeft: 40, 
          paddingRight: 40
      }, 
      iconContainerStyle: {
          backgroundColor: '#34495e', 
          justifyContent: 'flex-start', 
          padding: 10, 
          flex: 2
      }, 
      headerInputContainerStyle: {
          backgroundColor: '#34495e', 
          alignItems: 'stretch', 
          flex: 8, 
          justifyContent: 'center',
          paddingLeft: 15,
          paddingRight: 15
      }, 
      headerInputStyle: {
          marginLeft: 15, 
          marginRight: 15,
          height: 40, 
          borderColor: '#bdc3c7', 
          borderBottomWidth: 1, 
          fontSize: 30,
          textAlign: 'center', 
          color: 'white'
      },
      bodyInputStyle: {
        height: 40, 
        borderColor: '#bdc3c7', 
        borderWidth: 1, 
        fontSize: 15, 
        textAlign: 'center', 
        padding: 5,
        marginTop: 10
    },
    bodyInputStyle2: {
        height: 40, 
        borderColor: '#bdc3c7', 
        borderWidth: 1, 
        fontSize: 15, 
        padding: 5,
        marginTop: 10
    },
      textGroupContainerStyle: {
        flex: 7, 
        paddingTop: 15, 
        paddingBottom: 15, 
        justifyContent: 'center'
      }, 
      textGroupStyle: {
          paddingBottom: 5, 
          paddingTop: 5, 
          marginTop: 10, 
          marginBottom: 10
      }, 
      textHeaderStyle: {
          color: 'grey'
      }, 
      textStyle: {
          fontSize: 16, 
          padding: 5
      }, 
      textGroupStyle2: {
        paddingBottom: 5, 
        paddingTop: 5, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        marginBottom: 10
        },
    buttonStyle: {
        backgroundColor: '#2ecc71', 
        borderRadius: 40/2, 
        height: 40, 
        padding: 10, 
        margin: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
        },  
    buttonStyle2: {
        backgroundColor: '#e74c3c', 
        borderRadius: 40/2, 
        height: 40, 
        padding: 10, 
        margin: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    buttonTextStyle: {
        color: 'white', 
        fontSize: 15
    }, 
    buttonGroupStyle: {
        alignItems: 'stretch', 
        justifyContent: 'center', 
        flex: 3, 
        marginBottom: 20, 
    }, 
  }

  export { NewQualificationScreen };
