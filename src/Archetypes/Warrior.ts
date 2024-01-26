import Archetype from './Archetype';

import { EnergyType } from '../Energy';

const WARRIOR_ENERGY_TYPE = 'stamina';

class Warrior extends Archetype {
  private _energyType: EnergyType = WARRIOR_ENERGY_TYPE;
  private static _createdArchetypeInstances = 0;

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }
}

export default Warrior;