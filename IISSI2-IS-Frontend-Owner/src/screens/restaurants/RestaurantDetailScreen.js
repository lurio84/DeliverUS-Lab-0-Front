/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text } from 'react-native'

export default function RestaurantDetailScreen ({ route }) {
  const { id } = route.params
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Restaurant details. Id: {id}</Text>
        </View>
  )
}
