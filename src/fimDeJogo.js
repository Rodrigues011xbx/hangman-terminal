class FimDeJogo {
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async venceu() {
    const c = () => {
      const cor = ['red', 'yellow', 'blue', 'green'];
      const confete = ["´", "`", ".", ",", "'", "*", "•", "‛", "’", "‘"];

      const corNum = parseInt(Math.random() * cor.length);
      const confNum = parseInt(Math.random() * confete.length);

      return confete[confNum][cor[corNum]];
    }

    let emote1 =
      `   .     .        .     .\n` +
      `       .    O .      .   \n` +
      ` .        ./|\\        . \n` +
      `     .     / \\    .      \n` +
      `   .    .     .      .   \n` +
      "░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
      "░█▀▀░█▀█░█▀█░█░█░█▀█░█░█░\n" +
      "░█░█░█▀█░█░█░█▀█░█░█░█░█░\n" +
      "░▀▀▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░\n" +
      "░░░░░░░░░░░░░░░░░░░░░░░░░\n\n\n";

    let emote2 =
      `     .     .       .     \n` +
      `   .     . \\O/   .   .   \n` +
      `       .    | .      .   \n` +
      ` .       . / \\  .      . \n` +
      `    .       .      .     \n` +
      "░░░░░░░░░░░░░░░░░░░░░░░░░\n" +
      "░█▀▀░█▀█░█▀█░█░█░█▀█░█░█░\n" +
      "░█░█░█▀█░█░█░█▀█░█░█░█░█░\n" +
      "░▀▀▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░\n" +
      "░░░░░░░░░░░░░░░░░░░░░░░░░\n\n\n";

      emote1 = emote1.replace(/\./g, c)
        .replace(/░/g, "░".yellow);

      emote2 = emote2.replace(/\./g, c)
        .replace(/█/g, "█".yellow)
        .replace(/▀/g, "▀".yellow);

    await this.print(emote1, emote2);
  }

  async perdeu() {
    const emote1 =
      "         +-----------+\n" +
      "         |    ___    |\n" +
      "         |   / + \\   |\n" +
      "         |   \\ | /   |\n" +
      "         |    \\_/    |\n" +
      "         |           |\n" +
      "         +-----------+\n" +
      "\n" +
      " ____              _\n" +
      "|  _ \\ ___ _ __ __| | ___ _   _\n" +
      "| |_) / _ \\ '__/ _` |/ _ \\ | | |\n" +
      "|  __/  __/ | | (_| |  __/ |_| |\n" +
      "|_|   \\___|_|  \\__,_|\\___|\\__,_|\n\n\n";

    const emote2 = emote1.red;

    await this.print(emote1, emote2);
  }

  async print(emote1, emote2) {
    for (let i = 0; i <= 3; i++) {
      console.clear();
      console.log(emote1);

      await this.delay(300);

      console.clear();
      console.log(emote2);

      await this.delay(300);
    }
  }
}

module.exports = FimDeJogo;