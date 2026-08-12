import { useState } from "react";
import "./register.css";
import axios from "axios";

function Registrar() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const manipularNome = (e) => {
        setNome(e.target.value);
    };

    const manipularIdade = (e) => {
        setIdade(e.target.value);
    };

    const manipularEmail = (e) => {
        setEmail(e.target.value);
    };

    const manipularSenha = (e) => {
        setSenha(e.target.value);
    };

    const manipularBotao = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://template-server-5gb9.onrender.com/registrar',
                {
                    nome: nome,
                    idade: idade,
                    email: email,
                    senha: senha,
                }
            );

            console.log(response.data);
            alert('Usuário cadastrado com sucesso!');

        } catch (e) {
            console.error(e);
            alert('Erro ao cadastrar usuário.');
        }
    };

    return (
        <form className="formRegistro" onSubmit={manipularBotao}>
            Registrar novo usuário

            <label className="labelRegistro">Nome</label>
            <input
                className="inputRegistro"
                onChange={manipularNome}
            />
            <label className="labelRegistro">Idade</label>
            <input
                className="inputRegistro"
                type="number"
                onChange={manipularIdade}
            />
            <label className="labelRegistro">E-mail</label>
            <input
                className="inputRegistro"
                type="email"
                onChange={manipularEmail}
            />
             <label className="labelRegistro">Senha</label>
            <input
                className="inputRegistro"
                type="password"
                onChange={manipularSenha}
            />
             <button className="buttonRegistro" type="submit">
                Enviar
            </button>
        </form>
    );
}

export default Registrar;
