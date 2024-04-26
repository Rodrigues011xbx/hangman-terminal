# Instituto Federal de Alagoas - IFAL / Campus Maceió
## Curso Técnico em Desenvolvimento de Sistemas
### Disciplina de Programação Orientada a Objetos
#### Prof. MSc. Ricardo Nunes
#### ricardo@ifal.edu.br

---

## Laboratório 06 - Jogo Advinhação
### Jogo da "Adivinhação de Palavras Estilizado"

Desenvolva um jogo de console em JavaScript que seja uma variação do tradicional jogo da forca, chamado de "Adivinhação de Palavras Estilizado". Neste jogo, os jogadores têm a tarefa de adivinhar uma palavra oculta escolhida aleatoriamente a partir de uma lista predefinida de palavras.

### Regras e Funcionalidades:

1. **Seleção de Palavras:**
   - O jogo deve incluir uma lista de palavras pré-definidas no código. Pode-se considerar palavras relacionadas a temas específicos, como animais, alimentos, países, etc.

2. **O Jogo:**
   - Ao iniciar, o jogo escolhe aleatoriamente uma palavra da lista.
   - A palavra escolhida é apresentada ao jogador na forma de espaços em branco ou sublinhado, onde cada espaço representa uma letra da palavra oculta.

3. **Adivinhação de Letras:**
   - O jogador pode adivinhar uma letra por vez, inserindo-a pelo console.
   - Se a letra estiver presente na palavra, as ocorrências são reveladas nas posições corretas.
   - Caso contrário, o jogo informa que a letra não está na palavra e registra um erro.

4. **Controle de Erros:**
   - O jogador tem um número limitado de tentativas para adivinhar a palavra completa.
   - A cada letra incorreta, um elemento gráfico (por exemplo, uma forca estilizada) é desenhado no console.

5. **Feedback ao Jogador:**
   - O jogo deve fornecer feedback constante sobre o estado atual da palavra (letras corretas adivinhadas, erros cometidos) e a condição do jogador (ganhou, perdeu).

6. **Vitória ou Derrota:**
   - O jogador ganha se conseguir adivinhar a palavra dentro do número máximo de tentativas permitidas.
   - O jogador perde se exceder o número máximo de erros permitidos.

7. **Interface Console:**
   - Toda a interação com o jogador deve ocorrer por meio do console. Mensagens amigáveis e claras devem ser exibidas para orientar o jogador.

8. **Orientação a Objetos:**
   - Implemente o jogo utilizando princípios de programação orientada a objetos. Considere classes como "Jogo", "Palavra", "Jogador", "Forca" e outras que possam representar entidades relevantes.

9. **Diferenciação:**
   - Adicione uma característica única ao jogo que o diferencie do tradicional jogo da forca. Isso pode ser uma mecânica especial, uma pontuação extra para adivinhar rapidamente, ou qualquer outra ideia criativa.

Lembre-se de manter o código organizado, modular e bem comentado, seguindo as práticas recomendadas de programação orientada a objetos em JavaScript. O objetivo é proporcionar uma experiência divertida e desafiadora para o jogador enquanto pratica os conceitos de POO com JavaScript.
