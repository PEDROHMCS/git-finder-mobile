import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native"
import { style } from "./style"
import { useState } from "react"
import axios, { AxiosError } from "axios"

interface userProps {
  username: string,
  userUrlImage: string,
  followers: string
}

export function Home() {

  const [myText, setText] = useState('')
  const [myProperties, setProperties] = useState<userProps>()
  const [imageStatus, setImageStatus] = useState(false)


  function handleChanges(myText: any) {
    setText(myText)
  }

  async function handlePressButton() {
    try {
      const user = await axios.get(`https://api.github.com/users/${myText}`)
        .then((res) => {
          return res.data
        })

      setImageStatus(false)
      setProperties(
        {
          username: user.login,
          followers: user.followers,
          userUrlImage: user.avatar_url
        }
      )
    } catch (err) {
      if (err instanceof AxiosError) {
        setImageStatus(true)
        setProperties({
          username: '',
          followers: '',
          userUrlImage: ''
        })


        Alert.alert('Erro de requisição!', 'O usuário que você procurou infelizmente não existe tente novamente', [
          {
            text: 'Ok',
          }
        ])
      }
    }


  }

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.title}>Github search</Text>
      </View>

      <View>
        <TextInput
          style={style.txtInput}
          placeholder="Insira aqui o nome do usuário que deseja encontrar!"
          placeholderTextColor={'#191919'}
          onChangeText={handleChanges}
        />
      </View>

      <TouchableOpacity style={style.buttonStyle}>
        <Text style={style.btnText} onPress={handlePressButton}>Search</Text>
      </TouchableOpacity>

      <View style={style.profileContainer}>
        {
          !imageStatus &&
          <TouchableOpacity onPress={() => { console.log('imagem clicada!') }} disabled={imageStatus}>
            <Image
              style={style.imageStyle}
              source={{
                uri: `${myProperties?.userUrlImage}`
              }}
            />


          </TouchableOpacity>
        }

        <Text style={style.profileName}>{myProperties?.username}</Text>
        {
          myProperties?.followers !== '' && myProperties && <Text style={style.profileName}>{myProperties && myProperties.followers} Seguidor(es)</Text>
        }

      </View>
    </View>


  )
}