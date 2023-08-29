import React, { useContext } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Sistema from './components/pages/Sistema';
import Cadastro from './components/pages/Cadastro';
import HomePage from './components/pages/HomePage';

import { AuthProvider, AuthContext } from './components/contexts/Auth';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <div className='loading'>Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }

        return children
    }


    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={ <Sistema/> } />
                    <Route exact path='/cadastro' element={ <Cadastro/> } />
                    <Route exact path='/' element={ <Private> <HomePage/> </Private> } />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes