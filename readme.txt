Todas as edições de arquivos para criar um jogo serão feitas na pasta Game Files.
Para criar uma entidade vá em Game Files e crie uma classe javascript seguindo o padrão dos exemplo RectObj1 e RectObj2.
Estas classes devem herdar da classe Object e inicializar o seu construtor que pede um transform.
Após isso você poderá adicionar os componentes inclusos na engine (Renderer e Box Collider), além de quantos scripts customizáveis desejar.

Não esqueça nunca de chamar cada novo arquivo criado em Game.html, fazendo o import dos mesmos.
Na classe World você deverá inicializar seus objetos.

Todo o código de interação poderá ser feita dentro da classe World (como um código geral) ou dentro de cada objeto(usando o script customizado para isso)

A classe Utils oferece um método para exibir textos.