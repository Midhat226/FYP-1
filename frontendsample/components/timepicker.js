import React from 'react';
import {View, Text} from 'react-native';
import TimePicker from 'react-native-datepicker';

const TimeInput = ({value, onChange}) => {
  return (
    <View>
      <TimePicker
        mode="time"
        date={value}
        placeholder="select time"
        format="HH:mm"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={onChange}
      />
      <Text>Selected Time: {value}</Text>
    </View>
  );
}

export default TimeInput;
