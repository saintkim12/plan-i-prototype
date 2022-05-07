import localForage from 'localforage'
import { Component } from 'react'
import { storeToken } from '/src/components/GoogleAuthentication'


export default class LoginPopup extends Component {
  async componentDidMount() {
    const result = await storeToken(window.location.hash)
    if (result) {
      // alert('setToken')
    }
    window.close()
  }
  render() {
    return (
      <div></div>
    )
  }
}