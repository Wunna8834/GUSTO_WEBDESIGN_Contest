import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Landing } from './pages/Landing'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Productdetails } from './pages/Productdetails'
import { Payment } from './pages/Payment'
import { Products } from './pages/Products'
import { MainNav } from './components/navBars/MainNav'
import { CreateSellPost } from './pages/CreateSellPost'
import { Profile } from './pages/Profile'
import { MyProfile } from './pages/MyProfile'
import { PostedPage } from './pages/PostedPage'
import { SignUp } from './features/SignUp'
import { Wallet } from './features/Wallet'
import { Successful } from './pages/Successful'
import { Token } from './features/Token'
import { PaymentSuccessful } from './features/PaymentSuccessful'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/main' element={<Home />}/>
        <Route path='/products' element={<Products />}/> 
        <Route path='/create' element={<CreateSellPost />}/> 
        <Route path='/profile' element={<Profile />}/> 
        <Route path='/myprofile' element={<MyProfile />}/> 
        <Route path='/main/product_details/:id' element={<Productdetails />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/posted' element={<PostedPage />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/wallet' element={<Wallet />}/>
        <Route path='/successful' element={<Successful />}/>
        <Route path='/token' element={<Token />}/>
        <Route path='/payment-success' element={<PaymentSuccessful />}/>


      </Routes>
    </div>
  )
}

export default App
