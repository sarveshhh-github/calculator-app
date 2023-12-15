import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import CustomBlackButton from './src/Buttons/CustomBlackButton';
import CustomGreyButton from './src/Buttons/CustomGreyButton';
import CustomOrangeButton from './CustomOrangeButton';
import React, { useState } from 'react';

const App2 = () => {
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
        {/* grey */}
        <CustomGreyButton value={'AC'} onPress={ACFunction} />
        <CustomGreyButton value={'+/-'} onPress={plusOrMinus} />
        <CustomGreyButton value={'%'} onPress={percentageFunction} />
        {/* orange */}
        <CustomOrangeButton
          value={'/'}
          textColor={{ color: 'white' }}
          onPress={() => handleOperator((opr = '/'))}
        />
        {/* black */}
        <CustomBlackButton
          value={'7'}
          onPress={() => handlePressNumbers({ digit: '7' })}
        />
        <CustomBlackButton
          value={'8'}
          onPress={() => handlePressNumbers({ digit: '8' })}
        />
        <CustomBlackButton
          value={'9'}
          onPress={() => handlePressNumbers({ digit: '9' })}
        />
        {/* orange */}
        <CustomOrangeButton
          value={'x'}
          onPress={() => handleOperator((opr = '*'))}
        />
        {/* black */}
        <CustomBlackButton
          value={'4'}
          onPress={() => handlePressNumbers({ digit: '4' })}
        />
        <CustomBlackButton
          value={'5'}
          onPress={() => handlePressNumbers({ digit: '5' })}
        />
        <CustomBlackButton
          value={'6'}
          onPress={() => handlePressNumbers({ digit: '6' })}
        />
        {/* orange */}
        <CustomOrangeButton
          value={'-'}
          onPress={() => handleOperator((opr = '-'))}
        />

        {/* black */}
        <CustomBlackButton
          value={'1'}
          onPress={() => handlePressNumbers({ digit: '1' })}
        />
        <CustomBlackButton
          value={'2'}
          onPress={() => handlePressNumbers({ digit: '2' })}
        />
        <CustomBlackButton
          value={'3'}
          onPress={() => handlePressNumbers({ digit: '3' })}
        />
        {/* orange */}
        <CustomOrangeButton
          value={'+'}
          onPress={() => handleOperator((opr = '+'))}
        />

        {/* black */}
        <CustomBlackButton
          value={'0'}
          Width={{ width: 150 }}
          onPress={() => handlePressNumbers({ digit: '0' })}
          textColor={{ color: 'white', textAlign: 'left' }}
        />
        <CustomBlackButton
          value={'.'}
          textColor={{ color: 'white' }}
          onPress={() => handlePressNumbers({ digit: '.' })}
        />
        <CustomOrangeButton
          value={'='}
          textColor={{ color: 'white' }}
          onPress={() => handleAnswer()}
        />
      </View>
    </SafeAreaView>
  );
};


export default App2;




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