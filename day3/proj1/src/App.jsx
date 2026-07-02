import './App.css'
import Footer from './Footer'
import Header from './Header'
import MyCustomHook from './MyCustomHook'


function App() {
  return (
    <>
      <Header />
      <MyCustomHook />
      {/* <WithoutMyCustomHook/> */}
      {/* <MyUseMemo/>
      {/* <MyUseCallBack/>
      {/* <MyUseReducer/> */}
      {/* <MyApp /> */}
      <Footer />
    </>
  )
}

export default App
