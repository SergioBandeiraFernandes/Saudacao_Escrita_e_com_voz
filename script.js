function mostrarSaudacao() 
{
    const nome = document.getElementById('nome').value;
    const hora = parseInt(document.getElementById('hora').value,10);
    const mensagem = document.getElementById('mensagem');
    /*Guarda o texto da saudação em uma variável*/
    const textoSaudacao = saudacaoPersonalizada(nome, hora);

    /*Exibe o texto na tela (seu código original)*/
    mensagem.innerHTML = textoSaudacao;

    /*Executa a fala se o texto não estiver vazio*/
    if (textoSaudacao !== "") {
        falarTexto(textoSaudacao);
    }
}

function saudacaoPersonalizada(nome,hora) 
{
    if(hora < 12)
    {
        return "Bom dia, " + nome + "!";
    }
    else if(hora > 12 && hora < 18)
    {
        return "Boa tarde, " + nome + "!";
    }
    else if(hora > 18)
    {
        return "Boa noite, " + nome + "!";
    }
    else 
    {
        return "";
    }
}

/*Nova função auxiliar isolada para gerenciar a voz*/
function falarTexto(texto)
{
    const falar = new SpeechSynthesisUtterance(texto);
    falar.lang = "pt-BR";
    falar.rate = 1.0; // Velocidade normal
    window.speechSynthesis.speak(falar);
}

function limparCampos() 
{
    const nome = document.getElementById('nome').value = "";
    const hora = document.getElementById('hora').value ="";
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = "";
}
