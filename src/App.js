import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Outlet components  */}
        {/* the index props tells react to match the path of the home component to the navigation i.e(localhost:3000) should render both navigation and home components */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
