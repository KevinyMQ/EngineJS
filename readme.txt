Todas as edi��es de arquivos para criar um jogo ser�o feitas na pasta Game Files.
Para criar uma entidade v� em Game Files e crie uma classe javascript seguindo o padr�o dos exemplo RectObj1 e RectObj2.
Estas classes devem herdar da classe Object e inicializar o seu construtor que pede um transform.
Ap�s isso voc� poder� adicionar os componentes inclusos na engine (Renderer e Box Collider), al�m de quantos scripts customiz�veis desejar.

N�o esque�a nunca de chamar cada novo arquivo criado em Game.html, fazendo o import dos mesmos.
Na classe World voc� dever� inicializar seus objetos.

Todo o c�digo de intera��o poder� ser feita dentro da classe World (como um c�digo geral) ou dentro de cada objeto(usando o script customizado para isso)

A classe Utils oferece um m�todo para exibir textos.