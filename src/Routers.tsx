import { BrowserRouter , Routes , Route } from 'react-router-dom'
import CardPage from './modules/card/page/CardPage'

type Props = {}

const Routers = (props: Props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<CardPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers