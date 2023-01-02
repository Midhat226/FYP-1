import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';

function MyDatePicker() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <View>
      <Button
        title="Select a date"
        onPress={() => {
          setShowCalendar(true);
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showCalendar}
        onRequestClose={() => {
          setShowCalendar(false);
        }}
      >
        <Calendar
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            setShowCalendar(false);
          }}
          markedDates={{
            [selectedDate]: { selected: true },
          }}
        />
      </Modal>
      {selectedDate && (
        <Text>You selected: {selectedDate}</Text>
      )}
    </View>
  );
}

export default MyDatePicker;
