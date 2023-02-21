import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => { 

    test('debe de mostrar el children si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render( 
            
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
         )

         expect( screen.getByText('Ruta Pública')).toBeTruthy();
         screen.debug()

     })

     test('debe de navegar si está autenticado.', () => { 
        
      })

 })