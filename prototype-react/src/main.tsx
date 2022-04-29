import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// React Class Component의 HMR을 위한 코드 적용
// https://github.com/vitejs/vite/issues/1747
if (import.meta.hot) {
  import.meta.hot.accept()
}
