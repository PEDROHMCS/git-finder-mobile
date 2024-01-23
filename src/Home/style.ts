import { StyleSheet, TextInput } from "react-native";


export const style = StyleSheet.create({
  container: {
    backgroundColor: '#191919',
    flex: 1,
    justifyContent: 'center',
    gap: 30
  },

  titleContainer: {
    alignItems: 'center'
  },

  title: {
    color: '#fff',
    fontSize: 26,
  },

  txtInput: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 20,
    borderRadius: 4
  },
  buttonStyle: {
    color: '#fff',
    backgroundColor: 'green',
    width: 120,
    height: 40,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4
  },
  btnText:{
    color: '#fff',
    fontSize: 16
  },
  profileContainer: {
    alignItems: 'center'
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center'
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 999,
  }
})