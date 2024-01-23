import { Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { userProps } from "../../@types/nav";
import { style } from "./style";

interface userData{
  userData: userProps
}

export function Profile(){

  const route = useRoute()
  const {userData} = route.params as userData

  return(
    <View style={style.container}>
      <View style={style.infosWrapper}>
        <Image
          style={style.imageStyle}
          source={{
            uri: `${userData.userUrlImage}`
          }}
        />
        <Text style={style.mainName}>{userData.name}</Text>
        <Text style={style.subName}>{userData.username}</Text>
        <Text style={style.bioStyle}>{userData.bio}</Text>

        <View style={style.followData}>
          <Text style={style.followText}>Seguidores: {userData.followers}</Text>
          <Text style={style.followText}>Seguindo: {userData.following}</Text>
        </View>

      </View>
    </View>
  )
}