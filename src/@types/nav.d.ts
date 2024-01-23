
export interface userProps {
  username: string,
  userUrlImage: string,
  followers: string,
  name: string,
  bio: string,
  following: string
}



export declare global {
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined,
      profile: {
        userData: userProps | undefined
      }
      repositories: {
        username: string
      }
    }
  }
}