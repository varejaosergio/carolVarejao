import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  //const [telefone, setTelefone] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, email);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="Email"
        label="Seu melhor e-mail"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      
      <FormControlLabel
        label="Promoções"
        control={<Switch onChange={(event) => {
            setPromocoes(event.target.checked)
        }} name="promocoes" defaultChecked={promocoes} color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch onChange={(event) => {
            setNovidades(event.target.checked)
        }} name="novidades" defaultChecked={novidades} color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default Form;