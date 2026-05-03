import * as functions from '../code-to-unit-test/unit-test-me.js';

describe('Unit tests for validation functions', () => {

  // isPhoneNumber
  test('isPhoneNumber - valid 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('isPhoneNumber - valid 2', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('isPhoneNumber - invalid 1', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false); //all together
  });
  test('isPhoneNumber - invalid 2', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false); //letters
  });

  // isEmail
  test('isEmail - valid 1', () => {
    expect(functions.isEmail('antonio@gmail.com')).toBe(true);
  });
  test('isEmail - valid 2', () => {
    expect(functions.isEmail('email2@yahoo.edu')).toBe(true);
  });
  test('isEmail - invalid 1', () => {
    expect(functions.isEmail('thisisntanemail')).toBe(false);
  });
  test('isEmail - invalid 2', () => {
    expect(functions.isEmail('test@com')).toBe(false);
  });

  // isStrongPassword
  test('isStrongPassword - valid 1', () => {
    expect(functions.isStrongPassword('Abcd1234')).toBe(true);
  });
  test('isStrongPassword - valid 2', () => {
    expect(functions.isStrongPassword('Xyz_9876')).toBe(true);
  });
  test('isStrongPassword - invalid 1', () => {
    expect(functions.isStrongPassword('12345678')).toBe(false);
  });
  test('isStrongPassword - invalid 2', () => {
    expect(functions.isStrongPassword('Abcd!@#$')).toBe(false);
  });

  // isDate
  test('isDate - valid 1', () => {
    expect(functions.isDate('02/29/2024')).toBe(true);
  });
  test('isDate - valid 2', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
  });
  test('isDate - invalid 1', () => {
    expect(functions.isDate('2025-01-01')).toBe(false); //bad format
  });
  test('isDate - invalid 2', () => {
    expect(functions.isDate('February 29, 2024')).toBe(false); //bad format
  });

  // isHexColor
  test('isHexColor - valid 1', () => {
    expect(functions.isHexColor('#FF0000')).toBe(true); //hex code
  });
  test('isHexColor - valid 2', () => {
    expect(functions.isHexColor('#123')).toBe(true); //hex code
  });
  test('isHexColor - invalid 1', () => {
    expect(functions.isHexColor('1234')).toBe(false); //not enough to be a hex code
  });
  test('isHexColor - invalid 2', () => {
    expect(functions.isHexColor('#GGGGGG')).toBe(false); //theres no g in hex
  });

});

