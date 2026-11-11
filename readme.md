# Movimento

Minha ideia para este projeto era criar uma composição interativa como peixinhos no mar fugindo de algo, mas de uma forma mais simplificada.

Inicialmente, experimentei criar linhas contínuas formando ondas, mas senti que nao era o que pretendia já que elas continuavam "paradas" de um lado a outro da tela e não davam o efeito de "fugir" do rato. Por isso decidi refazer todo o código fazendo linhas individuais e aleatórias, para que tivessem um movimento mais livre pela tela.


Durante o desenvolvimento, tive dificuldades em organizar o código e perceber a ordem em que as instruções e os cálculos deveriam ser aplicados, especialmente no movimento das linhas e na interação com o rato. Portanto recorri ao ChatGPT para me ajudar a compreender algumas equações, organizar o código e resolver erros, principalmente com pontuações já que constantemente haviam erros que davam tela branca ao executar o "Go Live", dos quais eu não conseguia perceber onde havia errado. Então fui testando e adaptando as sugestões ao longo do processo.

A minha composição permite alterar as cores através da posição do rato indo para esquerda e direita e invertendo as cores, desviar as linhas quando o cursor se aproxima, adicionar novas linhas através da tecla espaço e com a tecla x/X todas as linhas se apagam.