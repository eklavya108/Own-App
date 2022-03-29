import React,{Component} from "react";
import {Text,Button,View,StyleSheet,Image} from "react-native"
import PDFReader from "rn-pdf-reader-js"

export default class HomeScreen extends Component{
  render(){
     return(
        <PDFReader
               source={{
               uri: "http://www.africau.edu/images/default/sample.pdf",
               }}
          />
     )
  }
}

