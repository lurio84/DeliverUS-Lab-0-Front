/* eslint-disable react/prop-types */
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function RestaurantsScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Random Restaurant</Text>
      <Button
        onPress={() => {
          navigation.navigate('RestaurantDetailScreen', { id: Math.floor(Math.random() * 100) })
        }}
        title="Go to Random Restaurant Details"
      />
    </View>
  )
}
