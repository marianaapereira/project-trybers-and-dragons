import Archetype from './Archetype';

import { EnergyType } from '../Energy';

const MAGE_ENERGY_TYPE = 'mana';

class Mage extends Archetype {
  private _energyType: EnergyType = MAGE_ENERGY_TYPE;
  private static _createdArchetypeInstances = 0;

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }
}

export default Mage;