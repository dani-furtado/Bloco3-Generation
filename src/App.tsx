import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/tema/listatemas/ListaTemas'
import FormularioTema from './components/tema/formulariotema/FormularioTema'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import ListaPostagens from './components/postagem/listapostagem/ListaPostagens'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem'
import FormPostagem from './components/postagem/formpostagem/FormPostagem'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import Perfil from './pages/perfil/Perfil'

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>

          <Navbar />

          <div className='min-h-[80vh]'>

            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>

          </div>

          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
