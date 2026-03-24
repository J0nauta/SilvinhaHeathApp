import { React } from 'react';
import { Stack } from 'expo-router';
import { StatuBar } from 'expo-status-bar';

export default function Layou() {
  return (
  <>
    <StatuBar style='dark' />
    <Stack
      screenOptions={{
       headerStyle: {
          backgroudColor : '#f9f9f9',
      },
      headerTinterColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}    
    >
        <Stack.Screen
          name="index"
          options={{
            title: 'Silvinha Health App',
            headerShown: true
          }}
        />
    </Stack>
   </>
  )
}