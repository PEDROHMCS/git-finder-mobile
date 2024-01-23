import { StyleSheet } from "react-native";


export const style =  StyleSheet.create({
  container: {
    flex: 1
  },

  infosWrapper:{
    width: '100%',
    alignItems: 'center',
    marginTop: 60
  },
  imageStyle: {
    width: 140,
    height: 140,
    borderRadius: 999,
  },

  mainName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#303036"
  },
  subName: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: "#303036"
  },
  followData: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 40
  },
  bioStyle: {
    width: '100%',
    padding: 20,
    textAlign: 'justify',
    fontSize: 18
  },
  followText: {
    fontSize: 16
  }
})