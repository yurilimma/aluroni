import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Menu from 'components/Menu'
import Sobre from 'pages/Sobre'

import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter(){
    return(
        <main>
            <Router> 
                <Menu />  {/* colocando o Menu em todas as páginas */}
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}> {/* só utliza o header, que está dentro de 'PaginaPadrao' quando está dentro de '/' ou '/cardapio'  */}
                        <Route index element={<Inicio />}/>
                        <Route path='cardapio' element={<Cardapio />}/>
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                </Routes>
            </Router>
        </main>
        
    )
}