import React, { useEffect } from 'react'
// import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { title, paragraf } from './styled'
import { Container } from '../../styles/globalstyles';
import axios from '../../services/axios';
import * as exampleActions from '../../store/modules/example/actions'

function Login() {
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadLogin() {
      await axios.get('/')
    }

    loadLogin()
  }, [])

  function handleClick(e) {
    e.preventDefault()

    dispatch(exampleActions.clicaBotaoRequest())
  }

  return (
    <Container>
      <title isRed={false} >Login
        <small>Ola</small>
      </title>
      <paragraf>Lorem5</paragraf>
      <button type="button" onClick={e => handleClick(e)} >Enviar</button>
    </Container>
  )
}
export default Login
