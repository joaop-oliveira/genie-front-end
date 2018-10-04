// @flow
import React from 'react';
import axios from 'axios';
import { ModuloMenu, ErpAxios, Http } from 'components';
import './Config/YupConfig';
import cadastro from './Routes/index';

const { error, log } = console;

type State = {
  envHasLoaded: boolean,
  user: string,
  admin: boolean,
};

type Props = {};
/**
 * @return {boolean}
 */

axios.defaults.headers.common = {};

class App extends React.Component<Props, State> {
  state = {
    envHasLoaded: false,
    user: '',
    admin: false,
  };

  componentDidMount() {
    this.loadEnv();
    log(process.env.MODULE_NAME);
    // navigate(`/${process.env.MODULE_NAME}`);
  }

  loadEnv = () => {
    if (process.env.mode === 'production') {
      ErpAxios.get('/env.json')
        .then(({ data }) => {
          sessionStorage.setItem('IP_ADDRESS', data.IP_ADDRESS);
          this.setState({ envHasLoaded: true });
        })
        .catch(err => {
          error(err);
        });
    } else {
      ErpAxios.get('http://localhost:7070/assets/env').then(data => {
        log(data);
        log(data);
        sessionStorage.setItem('IP_ADDRESS', data.IP_ADDRESS);
        const { get } = Http('shared');
        get({
          endPoint: 'auth',
          headers: { usuario: 'JP', senha: 'a', modulo: 'FORNECEDOR' },
        }).then(({ token }) => {
          sessionStorage.setItem('erpToken', token);
        });
        this.setState({ envHasLoaded: true });
      });
    }
  };

  render() {
    const { envHasLoaded, user, admin } = this.state;
    return envHasLoaded ? (
      <div>
        <ModuloMenu
          module="Fornecedor"
          path="/fornecedor"
          menuLista={cadastro}
          perfilAcesso={admin ? 'Administrador' : 'Usuario'}
          user={{ name: user }}
        />
      </div>
    ) : (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '30em',
          marginTop: '-3em',
          marginLeft: '-15em',
          textAlign: 'center',
          fontSize: '20px',
        }}
        className="environment-loading"
      >
        Estamos preparando o sistema para você!
      </div>
    );
  }
}

export default App;
