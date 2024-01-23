import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native"
import {useNavigation} from '@react-navigation/native'
import { style } from "./style"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import type { userProps } from "../../@types/nav"
import logo from "../../assets/github-mark.png"


export function Home() {

  const [myText, setText] = useState('')
  const [myProperties, setProperties] = useState<userProps>()
  const [imageStatus, setImageStatus] = useState(true)

  const navigator = useNavigation()

  function handleChanges(myText: any) {
    setText(myText)
  }

  async function handlePressButton() {
      try {

        console.log('clicked')
        const user = await axios.get(`https://api.github.com/users/${myText}`)
        .then((res) => {
          return res.data
        })

        setImageStatus(false)
        setProperties(
          {
            username: user.login,
            followers: user.followers,
            userUrlImage: user.avatar_url,
            bio: user.bio,
            following: user.following,
            name: user.name
            
          }
        )
      } catch (err) {
        if (err instanceof AxiosError) {
          setImageStatus(true)
          setProperties({
            username: "",
            followers: "",
            userUrlImage: "",
            bio: "",
            following: "",
            name: ""
          })

          Alert.alert('Erro de requisição!', 'O usuário que você procurou infelizmente não existe tente novamente', [
            {
              text: 'Ok',
            }
          ])
        }
      }
  }


  function handleUserProfile(){
    navigator.navigate('profile',{
      userData: myProperties
    })
  }

  return (
    <View style={style.container}>

      <Image
        style={style.gitImage}
        source={logo}
      />

      <View style={style.titleContainer}>
        <Text style={style.title}>GITHUB SEARCH</Text>
      </View>

      <View>
        <TextInput
          style={style.txtInput}
          placeholder="Insira aqui o nome do usuário que deseja encontrar!"
          placeholderTextColor={'#404040'}
          onChangeText={handleChanges}
        />
      </View>

      <TouchableOpacity style={style.buttonStyle} onPress={handlePressButton}>
        <Text style={style.btnText}>Search</Text>
      </TouchableOpacity>

      <View style={style.profileContainer}>
        {
          !imageStatus &&
          <TouchableOpacity onPress={handleUserProfile} disabled={imageStatus}>
            <Image
              style={style.imageStyle}
              source={{
                uri: `${myProperties?.userUrlImage}`
              }}
            />


          </TouchableOpacity>
        }

        <Text style={style.profileName}>{myProperties?.username}</Text>

      </View>
    </View>


  )
}