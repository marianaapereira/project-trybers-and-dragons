import Fighter from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

const MIN_POINT_NUMBER = 1;
const MAX_POINT_NUMBER = 10;

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(MIN_POINT_NUMBER, MAX_POINT_NUMBER);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(MIN_POINT_NUMBER, MAX_POINT_NUMBER);
    this._defense = getRandomInt(MIN_POINT_NUMBER, MAX_POINT_NUMBER);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(MIN_POINT_NUMBER, MAX_POINT_NUMBER),
    };
    this._name = name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    this._lifePoints -= (damage > 0) ? damage : 1;

    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    const increment = getRandomInt(MIN_POINT_NUMBER, MAX_POINT_NUMBER);

    this._maxLifePoints += increment;
    this._strength += increment;
    this._dexterity += increment;
    this._defense += increment;
    this._energy.amount = MAX_POINT_NUMBER;

    if (this._maxLifePoints > this.race.maxLifePoints) { 
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter): void;
}

export default Character;