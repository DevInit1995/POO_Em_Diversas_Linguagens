using System;

namespace OrientacaoObjetosIntroducao
{
    //Classes
    public class Carro
    {
        public Carro()
        {

        }

        private string vprivate = "";

        public string roda {
            get { return "Jhon"; }
            set { vprivate = value + "Zlatan"}
        }
        this.volante = "";
        this.painel = "";
        
        static void Main(string[] args)
        {
            int x = 1;
            int y = 2;
            Console.WriteLine("O resultado da operação é: " + (x + y));
        }
    }
    
}