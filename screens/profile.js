import React,{Component} from "react";
import {Text,Button,View,TextInput,TouchableOpacity,KeyboardAvoidingView,StyleSheet,Image} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase"


export default class Homescreen extends Component{
  constructor(){
    super();
    this.state={
      name:"",
      classno:"",
      school:"",
      phoneno:"",
      email:"",
      board:"",
      dob:""
    }
  }

async addProfile(){
  let profileData={
    name:this.state.name,
    board:this.state.board,
    phone:this.state.phoneno,
    class:this.state.classno,
    school:this.state.school,
    email:this.state.email,
    dob:this.state.dob
    };
    await firebase
    .database()
    .ref("profile")
    .set(profileData)

}
  render(){
     return(
      <KeyboardAvoidingView>
      <View>
      <View>
        <Image source={require("../asset/sample.png")} style={styles.image}/>
      </View>
        <TextInput
          style={styles.inputFont}
          onChangeText={name => this.setState({ name })}
          placeholder={"name"}
          placeholderTextColor="green"

          />
          <Image/>
      </View>
     <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={classno => this.setState({classno})}
          placeholder={"Class"}
          placeholderTextColor="green"
          />
      </View>
     <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={phoneno => this.setState({phoneno})}
          placeholder={"Phone no"}
          placeholderTextColor="green"
          />
      </View>
      <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={school => this.setState({school})}
          placeholder={"School Name"}
          placeholderTextColor="green"
          />
      </View>
      <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={board => this.setState({board})}
          placeholder={"Board"}
          placeholderTextColor="green"
          />
      </View>
           <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={email => this.setState({email})}
          placeholder={"Email"}
          placeholderTextColor="green"
          />
      </View>
             <View>
      <TextInput
          style={styles.inputFont}
          onChangeText={dob => this.setState({dob})}
          placeholder={"DOB"}
          placeholderTextColor="green"
          />
      </View>
      <View>
      <TouchableOpacity
      onPress={()=>this.addProfile()}
       style={styles.button}
      >
      <Text>Sumit</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
     )
  }
}

const styles=StyleSheet.create({
    inputFont: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "blue",
    fontFamily: "Bubblegum-Sans"
  },
  image: {
    width: 300,
    height: 100,
    marginLeft:20,
    borderLeftWidth:5,
    borderRightWidth:5
  },
  button:{
    width: "50%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F48D20",
    borderRadius: 15,
    marginLeft:80,
    marginTop:50
  }
})