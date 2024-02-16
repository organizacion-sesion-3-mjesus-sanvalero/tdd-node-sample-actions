// Ejemplo de test utilizando la librería should

// Cargar la librería should
var should = require('should');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función producto', function() {
  operaciones.multi.should.be.a.Function();
  should.equal(operaciones.multi(7,4), 8);
  should.equal(operaciones.multi(6,3), 18);
	should.equal(operaciones.multi(1,3), 3);
});



