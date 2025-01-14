import './Auth.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { register, reset } from '../../slices/authSlice'
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Message } from '../../components/Message/Message'

export const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useAppDispatch();

  const {loading, error} = useSelector((state: any) =>state.auth)
  if (loading) {
    console.log("Carregando...");
  }
  
  if (error) {
    console.error("Erro:", error);
  }

  const handleSubmit = (e: any) =>{
    e.preventDefault();

    const user = {
      name, email, password, confirmPassword
    }

   dispatch(register(user))
  }

  useEffect(() =>{
    dispatch(reset());
  }, [dispatch])

  return (
    <div id='register'>
      <h2>BioCheck</h2>
      <p className='subtitle'>Cadastra-se</p>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Nome' 
        onChange={(e)=> setName(e.target.value)}
        value={name || ''}/>
        <input type="email" 
        placeholder='E-mail' 
        onChange={(e)=> setEmail(e.target.value)}
        value={email || ''}/>
        <input type="password"
         placeholder='Senha' 
         onChange={(e)=> setPassword(e.target.value)}
         value={password || ''}/>
        <input type="password"
         placeholder='Confirmar senha' 
         onChange={(e)=> setConfirmPassword(e.target.value)}
         value={confirmPassword || ''}/>
        
        {!loading && <input type='submit' value='Cadastrar'></input>}
        {loading && <input type='submit' value='Carregando...' disabled></input>}
        {error && <Message message={error} type='error'/>}

      </form>
      <p>Já tem uma conta? 
        <Link to='/login'> Clique aqui</Link>
      </p>
    </div>
  )
}
