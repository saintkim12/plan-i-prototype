import React from 'react'
import { Provider } from 'react-redux'
import { store } from '/src/store'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// React Class Component의 HMR을 위한 코드 적용
// https://github.com/vitejs/vite/issues/1747
if (import.meta.hot) {
  import.meta.hot.accept()
}
