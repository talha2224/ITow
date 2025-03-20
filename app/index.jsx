import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import logo from '../assets/images/logo.png'
import { router } from 'expo-router'

const Splash = () => {

    useEffect(()=>{
        setTimeout(() => {
            router.push("/onboarding");
        }, 2000);
    },[])

  return (


    <View style={{flex:1,backgroundColor:"#526CCB",justifyContent:"center",alignItems:"center"}}>

        <Image source={logo}/>

    </View>


  )
}

export default Splash