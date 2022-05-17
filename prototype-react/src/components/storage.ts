import localForage from 'localforage'

export const getInStorage = localForage.getItem
export const setInStorage = localForage.setItem
export const removeInStorage = localForage.removeItem

/**
 * token
 */
export interface GoogleOAuth2Token {
  accessToken: string
  tokenType: string
  expiresIn: number
  scope: string[]
}
export interface CustomToken {
  createdIn: number
}
export type GoogleToken = GoogleOAuth2Token & CustomToken
export const getGoogleToken = () => getInStorage('google.token') as Promise<GoogleToken | null>
export const setGoogleToken = (token: GoogleToken) => setInStorage('google.token', token)
export const removeGoogleToken = () => removeInStorage('google.token')

/**
 * userInfo
 */
export type UserInfo = { type: 'google' | 'raw', id?: string, username?: string, email?: string, imgSrc?: string }
export const getUserInfo = () => getInStorage('userInfo') as Promise<UserInfo | null>
export const setUserInfo = (userInfo: UserInfo) => setInStorage('userInfo', userInfo)