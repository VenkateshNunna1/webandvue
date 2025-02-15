function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      countRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    attackMonster() {
      this.countRound++;
      const attackValue = randomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    specialAttackMonster() {
      this.countRound++;
      const attackValue = randomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.countRound++;
      const healValue = randomValue(10, 25);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", attackValue);
      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender() {
      this.playerHealth = 0;
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    mosterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.countRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(currentValue, previousValue) {
      //Currentvalue means this.playerHealth
      if (currentValue <= 0 && this.monsterHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (currentValue <= 0) {
        //player loose monster win
        this.winner = "monster";
      }
    },
    monsterHealth(value, value1) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //monster loose p-layer win
        this.winner = "player";
      }
    },
  },
});
app.mount("#game");
