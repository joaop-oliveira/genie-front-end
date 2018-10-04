import GridFornecedor from '../Pages/Fornecedor/Consultar';
import CadastrarFornecedor from '../Pages/Fornecedor/Cadastrar';
import VincularClassFornecedor from '../Pages/VincularClassificacao/Cadastrar';

const cadastro = [
  {
    component: GridFornecedor,
    path: 'consultar/fornecedor',
    menu: 'cadastro',
    name: 'Fornecedor',
  },
  {
    component: CadastrarFornecedor,
    path: 'cadastrar/fornecedor',
    menu: 'cadastro',
    name: 'Cadastrar Fornecedor',
  },
  {
    component: VincularClassFornecedor,
    path: 'vincular/fornecedor/classificacao',
  },
];
export default cadastro;
