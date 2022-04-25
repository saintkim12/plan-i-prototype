import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


function PageA() {
  return (
    <div>
      PageA
    </div>
  )
}
function PageB() {
  return (
    <div>
      PageB
    </div>
  )
}

console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
