import { orderZA, orderAZ, genderFemale, genderMale, genderUnknown, speciesHuman, speciesAlien,statusAlive,statusDead, tierraOrigin, Buscadorr} from '../src/data.js';
import{datos, datosOrdenados, Female, Male, Undknown, Human, Alien, Alive, Dead, Tierra, input, buscado} from '../test/datos.js'

describe('orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns `example`', () => {
    expect(orderZA(datos)).toEqual(datosOrdenados);
  });
});

describe('orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(orderAZ(datos)).toEqual(datos);
  });
});

describe('genderFemale', () => {
  it('is a function', () => {
    expect(typeof genderFemale).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(genderFemale(datos)).toEqual(Female);
  });
});

describe('genderMale', () => {
  it('is a function', () => {
    expect(typeof genderFemale).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(genderMale(datos)).toEqual(Male);
  });
});

describe('genderUndknown', () => {
  it('is a function', () => {
    expect(typeof genderUnknown).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(genderUnknown(datos)).toEqual(Undknown);
  });
});

describe('speciesHuman', () => {
  it('is a function', () => {
    expect(typeof speciesHuman).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(speciesHuman(datos)).toEqual(Human);
  });
});

describe('speciesAlien', () => {
  it('is a function', () => {
    expect(typeof speciesAlien).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(speciesAlien(datos)).toEqual(Alien);
  });
});

describe('statusAlive', () => {
  it('is a function', () => {
    expect(typeof statusAlive).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(statusAlive(datos)).toEqual(Alive);
  });
});

describe('statusDead', () => {
  it('is a function', () => {
    expect(typeof statusDead).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(statusDead(datos)).toEqual(Dead);
  });
});

describe('tierraOrigin', () => {
  it('is a function', () => {
    expect(typeof tierraOrigin).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(tierraOrigin(datos)).toEqual(Tierra);
  });
});

describe('Buscador', () => {
  it('is a function', () => {
    expect(typeof Buscadorr).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(Buscadorr(datos,input)).toEqual(buscado);
  });
});
