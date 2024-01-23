import { StyleSheet, TextInput } from "react-native";


export const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  gitImage: {
    width: 90,
    height: 90
  },

  titleContainer: {
    alignItems: 'center'
  },

  title: {
    color: '#191919',
    fontSize: 32,
    lineHeight: 42,
    fontWeight: '900'
  },

  txtInput: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    color: "#191919",
    borderColor: '#303036',
    borderWidth: 2
  },
  buttonStyle: {
    color: '#fff',
    backgroundColor: '#FC5130',
    width: 128,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 4
  },
  btnText:{
    color: '#FFFAFF',
    fontSize: 16,
    fontWeight: "bold"
  },
  profileContainer: {
    alignItems: 'center'
  },
  profileName: {
    color: '#303036',
    fontSize: 26,
    fontWeight: "600",
    textAlign: 'center',
    marginTop: 24
  },
  imageStyle: {
    width: 180,
    height: 180,
    borderRadius: 999,
  }
})