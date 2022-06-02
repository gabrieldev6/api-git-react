
import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

 function App() {
  const history = useHistory()
  const [ usuario , setUsuario ] = useState('')
  const [ erro, setErro ] = useState(false)
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data
      const repositoriesName = []

      repositories.map((repository) =>{
        return repositoriesName.push(repository.name)
      })

        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        setErro(false)
        history.push('/repositories')
    }).catch(err => {
      setErro(true)
    })
  }
 
  return (
    <S.Container>
      <h1>Digite o Nome do seu usuario Github</h1>
      <S.Input className='usuarioInput' placeholder='Usuario' value={usuario} onChange={e => setUsuario(e.target.value)}></S.Input>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      {erro ? <S.ErrorMsg>Ocorreu um erro. tente novamente</S.ErrorMsg> : ''}
    </S.Container>

  );
}
export default App;

