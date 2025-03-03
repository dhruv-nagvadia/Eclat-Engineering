import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function Calculator() {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleNum = (num) => {
      if (!operator) {
        setNum1(num1 + num.toString());
        setCalculation(num1 + num.toString());
      } else {
        setNum2(num2 + num.toString());
        setCalculation(num1 + operator + num2 + num.toString());
      }
    };

  const handleOperator = (op) => {
    if (num1) {
        setOperator(op);
        setCalculation(num1 + op);
      }
    };

  const handleResult = () => {
    let res;
        switch (operator) {
      case '+':
          res = Number(num1) + Number(num2);
          break;
        case '-':
          res = Number(num1) - Number(num2);
          break;
        case '*':
          res = Number(num1) * Number(num2);
          break;
        case '/':
          res = Number(num1) / Number(num2);
          break;
    }
      setResult(res.toString());
      setNum1('');
      setNum2('');
      setOperator('');
    setCalculation('');
  };

    const handleClear = () => {
      setResult('');
      setNum1('');
      setNum2('');
      setOperator('');
    setCalculation('');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.button2}>{calculation}</Text>
        <Text style={styles.button2}>{result}</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => handleNum('1')}><Text style={styles.button1}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('2')}><Text style={styles.button1}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('3')}><Text style={styles.button1}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperator('*')}><Text style={styles.button1}>*</Text></TouchableOpacity>
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => handleNum('4')}><Text style={styles.button1}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('5')}><Text style={styles.button1}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('6')}><Text style={styles.button1}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleOperator('-')}><Text style={styles.button1}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => handleNum('7')}><Text style={styles.button1}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('8')}><Text style={styles.button1}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('9')}><Text style={styles.button1}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('+')}><Text style={styles.button1}>+</Text></TouchableOpacity>
      </View>
        <View style={styles.button}>
            <TouchableOpacity onPress={() => handleClear()}><Text style={styles.button1}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => handleNum('0')}><Text style={styles.button1}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleResult()}><Text style={styles.button1}>=</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('/')}><Text style={styles.button1}>/</Text></TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
     justifyContent: "center",
     alignItems: "center",
   },
   button:{
    flexDirection:'row'
   },
   button1:{
    fontSize:30,
    margin:15,
   },
   button2:{
    fontSize:40
   }
  })



