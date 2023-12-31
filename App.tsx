import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import CustomBtn from './CustomBtn';

const App = () => {

  var [operator, setOperator] = useState<string | undefined>(undefined);
  var [initialValue, setInitialValue] = useState<string>('0');
  var [secondValue, setSecondValue] = useState<string>('0');
  var [btnFocus, setBtnFocus] = useState<undefined | number>(undefined)

  const handleOperator = (opr: string) => {
    if (initialValue && secondValue && operator) {
      handleAnswer()
      setOperator(opr);
    }
    else {
      setOperator(opr);

    }
  }


  const handleAnswer = () => {
    switch (operator) {
      case '+': {
        var Answer = parseFloat(initialValue) + parseFloat(secondValue);
        var FloatNum = Answer.toString().split('.')[1];
        if (FloatNum == undefined) {
          setInitialValue(Answer.toString());
        } else {
          setInitialValue(Answer.toFixed(2).toString());
        }
        break;
      }
      case '-': {
        var Answer = parseFloat(initialValue) - parseFloat(secondValue);
        var FloatNum = Answer.toString().split('.')[1];
        if (FloatNum == undefined) {
          setInitialValue(Answer.toString());
        } else {
          setInitialValue(Answer.toFixed(2).toString());
        }
        break;
      }
      case '*': {
        var Answer = parseFloat(initialValue) * parseFloat(secondValue);
        var FloatNum = Answer.toString().split('.')[1];
        if (FloatNum == undefined) {
          setInitialValue(Answer.toString());
        } else {
          setInitialValue(Answer.toFixed(2).toString());
        }
        break;
      }
      case '/': {
        var Answer = parseFloat(initialValue) / parseFloat(secondValue);
        var FloatNum = Answer.toString().split('.')[1];
        if (FloatNum == undefined) {
          setInitialValue(Answer.toString());
        } else {
          setInitialValue(Answer.toFixed(2).toString());
        }
        break;
      }
    }
    setSecondValue('0');
    setOperator(undefined);
  };


  // const handlePressNumbers = (digit: any) => {
  //   if (operator === undefined) {
  //     initialValue == '0' ?
  //       setInitialValue(digit)
  //       :
  //       digit == '.'
  //         ? setInitialValue(initialValue + '.')
  //         : setInitialValue(initialValue + digit)

  //   } else {
  //     secondValue == '0'
  //       ? setSecondValue(digit)
  //       : digit == '.'
  //         ? setSecondValue(secondValue + '.')
  //         : setSecondValue(secondValue + digit);
  //     // : setSecondValue(initialValue * 10 + digit);
  //   }
  // };

  const handlePressNumbers = (digit: any) => {
    if (operator == undefined) {
      //for initial value
      if (initialValue && digit == ".") {
        if (initialValue.includes(".")) {
          setInitialValue(initialValue)
        }
        else {
          setInitialValue(initialValue+ '.')
        }
      }
      else if (initialValue == "0" && digit != ".") {
        setInitialValue(digit)
      }
      else {
        setInitialValue(initialValue + digit)
      }

    }
    else {
      //for second value
      if (secondValue && digit == ".") {
        if (secondValue.includes(".")) {
          setSecondValue(secondValue)
        }
        else {
          setSecondValue(secondValue + '.')
        }
      }
      else if (secondValue == "0" && digit != ".") {
        setSecondValue(digit)
      }
      else {
        setSecondValue(secondValue + digit)
      }

    }
  }
  const clearValue = () => {

    if (secondValue !== "0") {
      setSecondValue('0');

    }
    else {
      setInitialValue('0');
      setOperator(undefined);
    }
    setBtnFocus(undefined)

  };

  const percentageFunction = () => {
    if (secondValue == "0") {
      var newValue = parseFloat(initialValue) / 100
      setInitialValue(newValue.toString())
    }
    else {
      var newValue = parseFloat(initialValue) * parseFloat(secondValue) / 100
      setSecondValue(newValue.toString())
    }
  }

  const plusOrMinus = () => {
    secondValue == '0' ?
      setInitialValue((-parseFloat(initialValue)).toString())
      :
      setSecondValue((-parseFloat(secondValue)).toString())
  }

  return (
    <SafeAreaView style={styles.mainviewContainer}>
      <View style={styles.upperArea}>
        <TextInput
          inputMode="none"
          style={styles.textInput}
          value={
            secondValue !== '0'
              ? secondValue
              : initialValue
          }
          cursorColor={'orange'}
          editable={false}
        />
      </View>
      <View style={styles.bottomArea}>
        <CustomBtn
          color={"black"}
          Title={"AC"}
          buttonBgColor={"grey"}
          onPress={clearValue} />

        <CustomBtn
          color={"black"}
          Title={"+/-"}
          buttonBgColor={"grey"}
          onPress={plusOrMinus} />

        <CustomBtn
          color={"black"}
          Title={"%"}
          buttonBgColor={"grey"}
          onPress={percentageFunction}
        />

        <CustomBtn
          Title={"/"}
          color={btnFocus == 1 ? "#FFa500" : "white"}
          buttonBgColor={btnFocus == 1 ? "white" : "#FFA500"}
          onPress={() => {
            handleOperator('/')
            setBtnFocus(1)

          }
          }
        />
        <CustomBtn
          color={"white"}
          Title={"7"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('7')} />

        <CustomBtn
          color={"white"}
          Title={"8"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('8')} />

        <CustomBtn
          color={"white"}
          Title={"9"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('9')} />

        <CustomBtn
          Title={"x"}
          color={btnFocus == 2 ? "#FFa500" : "white"}
          buttonBgColor={btnFocus == 2 ? "white" : "#FFA500"}
          onPress={
            () => {
              handleOperator('*')
              setBtnFocus(2)
            }}
        />
        <CustomBtn
          color={"white"}
          Title={"4"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('4')} />

        <CustomBtn
          color={"white"}
          Title={"5"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('5')} />

        <CustomBtn
          color={"white"}
          Title={"6"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('6')} />

        <CustomBtn
          Title={"-"}
          color={btnFocus == 3 ? "#FFa500" : "white"}
          buttonBgColor={btnFocus == 3 ? "white" : "#FFA500"}
          onPress={
            () => {
              handleOperator('-')
              setBtnFocus(3)
            }
          }
        />
        <CustomBtn
          color={"white"}
          Title={"1"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('1')} />

        <CustomBtn
          color={"white"}
          Title={"2"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('2')} />

        <CustomBtn
          color={"white"}
          Title={"3"}
          buttonBgColor={"#333333"}
          onPress={() => handlePressNumbers('3')} />

        <CustomBtn
          Title={"+"}
          color={btnFocus == 4 ? "#FFa500" : "white"}
          buttonBgColor={btnFocus == 4 ? "white" : "#FFA500"}
          onPress={
            () => {
              handleOperator('+')
              setBtnFocus(4)
            }
          }
        />
        <CustomBtn
          color={"white"}
          Title={"0"}
          buttonBgColor={"#333333"}
          Width={"42%"}
          onPress={() => handlePressNumbers('0')} />

        <CustomBtn
          color={"white"}
          Title={"."}
          buttonBgColor={"#333333"}
          onPress={() => {
            handlePressNumbers(".")
          }}
        />

        <CustomBtn
          Title={"="}
          color={btnFocus == 5 ? "#FFa500" : "white"}
          buttonBgColor={btnFocus == 5 ? "white" : "#FFA500"}
          onPress={() => {
            handleAnswer()
            setBtnFocus(5)

          }
          }
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  mainviewContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  upperArea: {
    height: '30%',
    backgroundColor: 'black', // change it after it is done
    top: 0,
    justifyContent: 'flex-end',
    padding: 10
  },
  textInput: {
    margin: 0,
    paddingRight: 10,
    padding: 0,
    fontSize: 70,
    color: 'white',
    width: '100%',
    textAlign: 'right',
  },
  bottomArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },
});
export default App