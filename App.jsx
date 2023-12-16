import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import CustomBtn from './src/Buttons/CustomBtn';

const App = () => {
  const [operator, setOperator] = useState(null);
  var [initialValue, setInitialValue] = useState('0');
  var [secondValue, setSecondValue] = useState('0');

  const handleOperator = opr => {
    setOperator(opr);
  };

  const handleAnswer = () => {
    switch (operator) {
      case '+': {
        var DivTempValue = parseFloat(initialValue) + parseFloat(secondValue);
        const DivCheckSlip = DivTempValue.toString().split('.')[1];
        if (DivCheckSlip == undefined) {
          setInitialValue(DivTempValue.toString());
        } else {
          setInitialValue(DivTempValue.toString());
          // setInitialValue(DivTempValue.toFixed(2));
        }
        break;
      }
      case '-': {
        var DivTempValue = initialValue - secondValue;
        DivCheckSlip = DivTempValue.toString().split('.')[1];
        if (DivCheckSlip == undefined) {
          setInitialValue(DivTempValue);
        } else {
          setInitialValue(DivTempValue.toFixed(2));
        }
        break;
      }
      case '*': {
        var DivTempValue = initialValue * secondValue;
        DivCheckSlip = DivTempValue.toString().split('.')[1];
        if (DivCheckSlip == undefined) {
          setInitialValue(DivTempValue);
        } else {
          setInitialValue(DivTempValue.toFixed(2));
        }
        break;
      }
      case '/': {
        var DivTempValue = initialValue / secondValue;
        DivCheckSlip = DivTempValue.toString().split('.')[1];
        if (DivCheckSlip == undefined) {
          setInitialValue(DivTempValue);
        } else {
          setInitialValue(DivTempValue.toFixed(2));
        }
        break;
      }
    }
    setSecondValue('0');
    setOperator(null);
  };

  const handlePressNumbers = ({ digit }) => {
    if (operator === null) {
      initialValue == '0'
        ? setInitialValue(parseFloat(digit))
        : digit == '.'
          ? setInitialValue(initialValue + '.')
          : setInitialValue(initialValue + digit);
    } else {
      secondValue == '0'
        ? setSecondValue(parseFloat(digit))
        : digit == '.'
          ? setSecondValue(secondValue + '.')
          : setSecondValue(secondValue + digit);
      // : setSecondValue(initialValue * 10 + digit);
    }
  };
  const ACFunction = () => {
    setInitialValue('0');
    setSecondValue('0');
    setOperator(null);
  };

  function plusOrMinus() {
    secondValue !== '0'
      ? setSecondValue(parseFloat(-+secondValue))
      : setInitialValue(parseFloat(-+initialValue));
  }

  function percentageFunction() {
    /// if the second value is given then the percentage will be initialvalue x secondvalue / 100
    // if there is no second value initial / 100

    secondValue !== '0'
      ? setSecondValue(parseFloat((initialValue * secondValue) / 100))
      : setSecondValue(parseFloat(initialValue / 100));
  }
  return (
    <SafeAreaView style={styles.mainviewContainer}>
      <View style={styles.upperArea}>
        <TextInput
          inputMode="none"
          style={styles.textInput}
          value={
            secondValue !== '0'
              ? secondValue.toString()
              : initialValue.toString()
          }
          cursorColor={'orange'}
          editable={false}
        />
      </View>
      <View style={styles.bottomArea}>
        <CustomBtn color={"black"} Title={"AC"} buttonBgColor={"grey"} onPress={ACFunction} />
        <CustomBtn color={"black"} Title={"+/-"} buttonBgColor={"grey"} onPress={plusOrMinus} />
        <CustomBtn color={"black"} Title={"%"} buttonBgColor={"grey"} onPress={percentageFunction} />

        <CustomBtn Title={"/"} color={"white"} buttonBgColor="#FFA500"
          onPress={
            () => {
              if (initialValue && secondValue && operator) {
                setOperator('/')
                handleAnswer()
              }
              else {

                handleOperator((opr = '/'))
              }

            }
          }
        />
        <CustomBtn color={"white"} Title={"7"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '7' })} />
        <CustomBtn color={"white"} Title={"8"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '8' })} />
        <CustomBtn color={"white"} Title={"9"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '9' })} />

        {/* black */}

        {/* orange */}
        <CustomBtn
          Title={"x"}
          color={"white"}
          buttonBgColor="#FFA500"
          onPress={
            () => handleOperator((opr = '*'))
          }
        />
        {/* black */}
        <CustomBtn color={"white"} Title={"4"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '4' })} />
        <CustomBtn color={"white"} Title={"5"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '5' })} />
        <CustomBtn color={"white"} Title={"6"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '6' })} />

        {/* orange */}
        <CustomBtn
          Title={"-"}
          color={"white"}
          buttonBgColor="#FFA500"
          onPress={
            () => handleOperator((opr = '-'))
          }
        />

        {/* black */}
        <CustomBtn color={"white"} Title={"1"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '1' })} />
        <CustomBtn color={"white"} Title={"2"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '2' })} />
        <CustomBtn color={"white"} Title={"3"} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '3' })} />

        {/* orange */}
        <CustomBtn
          Title={"x"}
          color={"white"}
          buttonBgColor="#FFA500"
          onPress={
            () => handleOperator((opr = '+'))
          }
        />

        {/* black */}
        <CustomBtn color={"white"} Title={"0"} buttonBgColor={"#333333"} Width={"42%"} onPress={() => handlePressNumbers({ digit: '0' })} />

        <CustomBtn color={"white"} Title={"."} buttonBgColor={"#333333"} onPress={() => handlePressNumbers({ digit: '.' })} />


        <CustomBtn
          Title={"="}
          color={"white"}
          buttonBgColor="#FFA500"
          onPress={
            handleAnswer}
        />
      </View>
    </SafeAreaView>
  );
};


export default App;




const styles = StyleSheet.create({
  mainviewContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperArea: {
    position: 'fixed',
    height: '30%',
    backgroundColor: 'black', // change it after it is done
    top: 0,
    justifyContent: 'flex-end',
  },
  textInput: {
    margin: 0,
    paddingRight: 10,
    padding: 0,
    fontSize: 100,
    color: 'white',
    width: '100%',
    textAlign: 'right',
  },



  bottomArea: {
    height: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
});