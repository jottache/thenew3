import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
border: 1px solid red;
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
`

export const Form = styled.form`
/* border: 1px solid blue; */
  margin: auto;
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-bottom: 1em;
`

export const Button = styled.button`
  width: 80%;
  height: 30px;
`

export const Text = styled.p`
  text-align: center;
`

export const Titulo = styled.h1`
  text-align: center;
  font-size: 2em;
`