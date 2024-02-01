import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES, icons } from '../../constants'
import { Company, JobTabs, ScreenHeaderBtn } from '../../components'

const JobDetails = () => {
   const params = useGlobalSearchParams()
   const router = useRouter()
   const [refresh, setRefresh] = useState(false)
   const onRefresh = () => { }
   // const { data, isLoading=true, error, refetch } = useFetch('job-details', { job_id: params.id })
   console.log(isLoading,error);
   return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
         <Stack.Screen options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => <ScreenHeaderBtn
               iconUrl={icons.left}
               dimension="60%"
               handlePress={() => router.back()} />,
            headerRight: () => <ScreenHeaderBtn
               iconUrl={icons.share}
               dimension="60%"
               handlePress={() => router.back()} />,
            headerTitle: data[0]?.job_title
         }}>
            <>
            <Text>hi</Text>
            
            </>
         </Stack.Screen>
      </SafeAreaView>
   )
}

export default JobDetails