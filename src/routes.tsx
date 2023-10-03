import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Menu from 'components/Menu'
import Sobre from 'pages/Sobre'
import Footer from 'components/Footer'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';

export default function AppRouter(){
    return(
        <main className='container'>
            <Router> 
                <Menu />  {/* colocando o Menu em todas as páginas */}
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}> {/* só utliza o header, que está dentro de 'PaginaPadrao' quando está dentro de '/' ou '/cardapio' ou '/sobre' */}
                        <Route index element={<Inicio />}/> {/* se a rota só tiver o '/', cai aqui  */}
                        <Route path='cardapio' element={<Cardapio />}/> {/* se a rota só tiver o '/cardapio', cai aqui  */}
                        <Route path='sobre' element={<Sobre />} /> {/* se a rota só tiver o '/sobre', cai aqui  */}
                    </Route>
                    <Route path='prato/:id' element={<Prato/>} /> 
                    <Route path='*' element={<NotFound />} /> {/* se tiver qualquer coisa diferente dos mencionados acima('*'), cai numa pagina de 404 - not found  */}
                </Routes>
                <Footer />
            </Router>
        </main>
        
    )
}