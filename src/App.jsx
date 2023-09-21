import React from 'react'
import Layout from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
            <Route path='/' element={<Layout />}/>
            {/* <Route path='/total' element={<TotalData />} /> */}
        </Routes>
      </Provider>
      <ToastContainer />
    </div>
  )
}

export default App