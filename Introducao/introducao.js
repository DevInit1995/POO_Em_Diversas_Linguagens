class Program {
    x = 1;
    y = 2;

    introducao = function() {
        alert('O resultado da soma é: ' + (x + y));
    }
    introducao;
}

chama = new Program();
chama.introducao;

//Classes 
Carro = class {
    constructor(){
        this.roda = "";
        this.volante = "";
        this.painel = "";
    }

    andar (){
        alert(this.nome);
    }

    parar (){
        alert(this.telefone);
    }

    static todosOsCarros() {
        return itens;
    }
    static itens = [];
}