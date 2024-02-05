import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { COLORS, SIZES, images, icons } from '../constants'
import { Stack } from 'expo-router'
import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn } from '../components'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerTitle: "Bhasi App"
      }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home