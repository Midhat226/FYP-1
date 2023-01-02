import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const MyDropdown = (props) => {
  const { items, onValueChange, value, placeholder } = props;

  return (
    <RNPickerSelect
      items={items}
      onValueChange={onValueChange}
      value={value}
      placeholder={placeholder}
      style={{
        inputIOS: {
          backgroundColor: 'transparent',
          fontSize: 16,
        },
        inputAndroid: {
          backgroundColor: 'transparent',
          fontSize: 16,
        },
        pickerWrapper: {
          backgroundColor: 'transparent',
        },
        modalWrapper: {
          backgroundColor: 'transparent',
        },
      }}
    />
  );
}

export default MyDropdown;
