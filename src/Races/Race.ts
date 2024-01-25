// Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
// Cada raça terá seu número máximo de instâncias, que será definido dentro de cada classe especializada;
// Na classe Race, o método deve lançar um erro com a mensagem Not implemented.

abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;