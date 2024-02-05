import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES, icons } from '../../constants'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

const JobDetails = () => {
   const params = useGlobalSearchParams()
   const router = useRouter()
   const [refresh, setRefresh] = useState(false)
   const onRefresh = () => { }
   const { data, isLoading = true, error, refetch } = useFetch('job-details', { job_id: params.id })
   const tabs = ['About', 'Qualifications', 'Responsibilities']
   const displayTabContent = () => {
      switch (activeTab) {
         case "Qualifications": return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ?? ['N/A']} />
         case "About": return <JobAbout info={data[0].job_description ?? "No data provided"} />
         case "Responsibilities": return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? ['N/A']} />
         default: break;
      }
   }
   const [activeTab, setActiveTab] = useState(tabs[0])
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
         }} />
         <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={
               <RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
               {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : error ? <Text>Something Went Wrong</Text> : data.length ?
                  <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                     <Company
                        companyLogo={data[0]?.employer_logo}
                        jobTitle={data[0]?.job_title}
                        companyName={data[0]?.employer_name}
                        location={data[0].job_country}
                     />
                     <JobTabs
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                     />
                     {displayTabContent()}
                  </View> : <Text>No Data</Text>}
            </ScrollView>
            <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'}/>
         </>
      </SafeAreaView>
   )
}

export default JobDetails