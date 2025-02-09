const { helloWorld } = require('./index');
//Pablo de los Santos 2023-0244
describe('Prueba de helloWorld', () => {
  test('debe retornar "Hello World"', () => {
    expect(helloWorld()).toBe("Hello World");
  });
});
