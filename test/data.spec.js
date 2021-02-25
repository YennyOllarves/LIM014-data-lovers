import { orderZA, orderAZ, genderFemale, genderMale} from '../src/data.js';
import{datos, datosOrdenados, Female, Male} from '../test/datos.js'

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