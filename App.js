import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display';

export default function App() {
  state = {
    displayValue: '0'
  }
function addDigit (n) {
 this.setState =  ({ displayValue: n})
}
function Clearmemory() {
  this.setState = ({ displayValue: '0'})
}
setOperation = operation =>{

}

return(
  <View style = {style.container}>
  <Display value={this.state.displayValue} />
  <View style={styles.button}>
    <Button label='AC' triple onClick={clearMemory} /> 
    <Button label='/' triple onClick={clearMemory} /> 
    <Button label='7' triple onClick={clearMemory} /> 
    <Button label='8' triple onClick={clearMemory} /> 
    <Button label='9' triple onClick={clearMemory} /> 
    <Button label='*' triple onClick={clearMemory} /> 
    <Button label='4' triple onClick={clearMemory} /> 
    <Button label='5' triple onClick={clearMemory} /> 
    <Button label='6' triple onClick={clearMemory} /> 
    <Button label='-' triple onClick={clearMemory} /> 
    <Button label='1' triple onClick={clearMemory} /> 
    <Button label='2' triple onClick={clearMemory} /> 
    <Button label='3' triple onClick={clearMemory} /> 
    <Button label='+' triple onClick={clearMemory} /> 
    <Button label='0' triple onClick={clearMemory} /> 
    <Button label='.' triple onClick={clearMemory} /> 
    <Button label='=' triple onClick={clearMemory} /> 
</View>
</View>
)

};
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
