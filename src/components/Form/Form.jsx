import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";




function Form({onSubmit}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  //const [telefone, setTelefone] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);  

  return (
    <form className="Form"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({nome, email, promocoes, novidades});
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

        helperText="Exemplo de e-mail: sv@carolvarejao.com"
        id="Email"
        label="Seu melhor e-mail"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"            
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"            
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"            
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form >
  );
}

export default Form;
