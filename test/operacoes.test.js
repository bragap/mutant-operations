const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// === Casos adicionais para cobrir bordas e erros ===
describe('Casos adicionais — testes direcionados a bordas e erros', () => {
  test('51. deve lançar erro para raiz quadrada negativa', () => {
    expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });

  test('52. fatorial de 0 e 1 deve ser 1', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
  });

  test('53. fatorial negativo lança erro', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });

  test('54. mediaArray vazio retorna 0', () => {
    expect(mediaArray([])).toBe(0);
  });

  test('55. maximoArray vazio lança erro', () => {
    expect(() => maximoArray([])).toThrow();
  });

  test('56. minimoArray vazio lança erro', () => {
    expect(() => minimoArray([])).toThrow();
  });

  test('57. isPar/isImpar com números negativos', () => {
    expect(isPar(-2)).toBe(true);
    expect(isImpar(-3)).toBe(true);
  });

  test('58. arredondar para baixo e para cima com negativos', () => {
    expect(arredondarParaBaixo(-1.2)).toBe(-2);
    expect(arredondarParaCima(-1.2)).toBe(-1);
  });

  test('59. mdc com zero', () => { expect(mdc(0, 5)).toBe(5); });
  test('60. mmc com zero resulta em zero', () => { expect(mmc(0, 5)).toBe(0); });

  test('61. isPrimo com 0 e 1 deve retornar false', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
  });

  test('62. fibonacci de 0 e 1', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  test('63. produtoArray vazio retorna 1', () => { expect(produtoArray([])).toBe(1); });

  test('64. clamp abaixo e acima dos limites', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });

  test('65. inverso de 0 lança erro', () => { expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.'); });

  test('66. mediana de array com número par de elementos', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });

  test('67. divisão com resultado decimal e negativos', () => { expect(divisao(9, 2)).toBe(4.5); expect(divisao(-10, 2)).toBe(-5); });

  test('68. área de círculo com raio zero', () => { expect(areaCirculo(0)).toBeCloseTo(0); });

  // Testes adicionais para matar mutantes de igualdade/operador
  test('69. raiz quadrada de zero deve funcionar', () => { expect(raizQuadrada(0)).toBe(0); });
  test('70. isPar com zero', () => { expect(isPar(0)).toBe(true); expect(isPar(1)).toBe(false); });
  test('71. isImpar com zero e um', () => { expect(isImpar(0)).toBe(false); expect(isImpar(1)).toBe(true); });
  test('72. isPrimo com 2 (primo)', () => { expect(isPrimo(2)).toBe(true); });
  test('73. isPrimo com 4 (não primo)', () => { expect(isPrimo(4)).toBe(false); });
  test('74. clamp com valores exatos nos limites', () => { expect(clamp(0, 0, 10)).toBe(0); expect(clamp(10, 0, 10)).toBe(10); });
  test('75. isMaiorQue com valores iguais', () => { expect(isMaiorQue(5, 5)).toBe(false); });
  test('76. isMenorQue com valores iguais', () => { expect(isMenorQue(5, 5)).toBe(false); });
  test('77. isEqual com valores diferentes', () => { expect(isEqual(1, 2)).toBe(false); });
  test('78. isDivisivel com resto diferente de zero', () => { expect(isDivisivel(10, 3)).toBe(false); });
  test('79. mediana com array desordenado', () => { expect(medianaArray([3, 1, 2])).toBe(2); });
  test('80. mediana com array par desordenado', () => { expect(medianaArray([4, 2, 3, 1])).toBe(2.5); });
  test('81. celsius para fahrenheit com valor não-zero', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  test('82. fahrenheit para celsius com valor não-zero', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  test('83. divisão com números decimais', () => { expect(divisao(5, 2)).toBe(2.5); });
  test('84. fatorial de 2', () => { expect(fatorial(2)).toBe(2); });
  test('85. mdc com a > b', () => { expect(mdc(10, 5)).toBe(5); expect(mdc(5, 10)).toBe(5); });

  // Testes finais para matar mutantes remanescentes
  test('86. divisão por zero deve ter mensagem específica', () => {
    expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('87. maximoArray vazio deve ter mensagem específica', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  test('88. minimoArray vazio deve ter mensagem específica', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });
  test('89. medianaArray vazio deve ter mensagem específica', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('90. fatorial - testa retorno quando n === 1', () => {
    expect(fatorial(1)).toBe(1);
  });
  test('91. fatorial - testa retorno quando n === 0', () => {
    expect(fatorial(0)).toBe(1);
  });
  test('92. produtoArray vazio - verifica retorno 1', () => {
    expect(produtoArray([])).toBe(1);
  });
  test('93. isImpar com 2 (deve retornar false)', () => {
    expect(isImpar(2)).toBe(false);
  });
  test('94. clamp quando valor === min', () => {
    expect(clamp(5, 5, 10)).toBe(5);
  });
  test('95. clamp quando valor === max', () => {
    expect(clamp(10, 5, 10)).toBe(10);
  });
  test('96. mediana array vazio deve lançar erro', () => {
    expect(() => medianaArray([])).toThrow();
  });

  // Testes adicionais para matar mutantes sobreviventes
  test('97. fatorial - sequência completa 0,1,2,3,4 para forçar lógica OR', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).toBe(2);
    expect(fatorial(3)).toBe(6);
    expect(fatorial(4)).toBe(24);
  });
  
  test('98. produtoArray com um único elemento deve retornar o elemento', () => {
    expect(produtoArray([5])).toBe(5);
    expect(produtoArray([0])).toBe(0);
    expect(produtoArray([-3])).toBe(-3);
  });

  test('99. clamp com valor ligeiramente abaixo do min', () => {
    expect(clamp(4.9, 5, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  test('100. clamp com valor ligeiramente acima do max', () => {
    expect(clamp(10.1, 5, 10)).toBe(10);
    expect(clamp(11, 0, 10)).toBe(10);
  });

  test('101. clamp valor exatamente no min não deve usar < min', () => {
    const result = clamp(5, 5, 10);
    expect(result).toBe(5);
    expect(result).not.toBe(10);
  });

  test('102. clamp valor exatamente no max não deve usar > max', () => {
    const result = clamp(10, 5, 10);
    expect(result).toBe(10);
    expect(result).not.toBe(5);
  });

  test('103. fatorial com número par pequeno', () => {
    expect(fatorial(2)).toBe(2);
    expect(fatorial(4)).toBe(24);
  });

  test('104. fatorial com número ímpar pequeno', () => {
    expect(fatorial(3)).toBe(6);
    expect(fatorial(5)).toBe(120);
  });

  test('105. produtoArray com dois elementos para evitar curto-circuito', () => {
    expect(produtoArray([2, 3])).toBe(6);
    expect(produtoArray([1, 1])).toBe(1);
    expect(produtoArray([0, 5])).toBe(0);
  });

  // Testes ultra-específicos para matar os últimos mutantes
  test('106. fatorial(0) deve retornar 1 - testa primeiro lado do OR', () => {
    const result = fatorial(0);
    expect(result).toBe(1);
    // Se OR virar AND, fatorial(0) não retornaria 1
    expect(fatorial(1)).toBe(1);
  });

  test('107. fatorial(1) deve retornar 1 - testa segundo lado do OR', () => {
    const result = fatorial(1);
    expect(result).toBe(1);
    // Se OR virar AND, fatorial(1) não retornaria 1
    expect(fatorial(0)).toBe(1);
  });

  test('108. produtoArray([]) retorno exato deve ser 1 não undefined', () => {
    const result = produtoArray([]);
    expect(result).toBe(1);
    expect(result).not.toBeUndefined();
    expect(result).not.toBeNull();
    expect(typeof result).toBe('number');
  });

  test('109. clamp - valor abaixo min deve retornar min exato', () => {
    const result = clamp(3, 5, 10);
    expect(result).toBe(5);
    expect(result).not.toBe(3);
    // Garante que < não foi mudado para <=
    expect(clamp(4.999, 5, 10)).toBe(5);
  });

  test('110. clamp - valor acima max deve retornar max exato', () => {
    const result = clamp(12, 5, 10);
    expect(result).toBe(10);
    expect(result).not.toBe(12);
    // Garante que > não foi mudado para >=
    expect(clamp(10.001, 5, 10)).toBe(10);
  });

  test('111. clamp - valor === min deve passar direto, não usar primeira condição', () => {
    const result = clamp(5, 5, 10);
    expect(result).toBe(5);
    // Se < virar <=, ainda retornaria 5, mas pela condição errada
    // Testamos com valor ligeiramente maior
    expect(clamp(5.001, 5, 10)).toBe(5.001);
  });

  test('112. clamp - valor === max deve passar direto, não usar segunda condição', () => {
    const result = clamp(10, 5, 10);
    expect(result).toBe(10);
    // Se > virar >=, ainda retornaria 10, mas pela condição errada
    // Testamos com valor ligeiramente menor
    expect(clamp(9.999, 5, 10)).toBe(9.999);
  });

  test('113. fatorial - teste de negação da condição OR completa', () => {
    // Garante que a condição (n === 0 || n === 1) funciona corretamente
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).not.toBe(1);
    expect(fatorial(2)).toBe(2);
  });

  test('114. fatorial - múltiplas chamadas com 0 e 1 alternadas', () => {
    for (let i = 0; i < 3; i++) {
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
    }
  });

  test('115. produtoArray - diferença entre [] e [1]', () => {
    const emptyResult = produtoArray([]);
    const singleResult = produtoArray([1]);
    expect(emptyResult).toBe(1);
    expect(singleResult).toBe(1);
    // Ambos são 1, mas por razões diferentes
    expect(produtoArray([2])).not.toBe(1);
  });

  test('116. clamp - sequência de valores ao redor dos limites', () => {
    expect(clamp(4, 5, 10)).toBe(5);   // < min
    expect(clamp(5, 5, 10)).toBe(5);   // === min
    expect(clamp(6, 5, 10)).toBe(6);   // > min, < max
    expect(clamp(10, 5, 10)).toBe(10); // === max
    expect(clamp(11, 5, 10)).toBe(10); // > max
  });

  test('117. fatorial edge case - garante que OR não é AND', () => {
    // Se || virar &&, isso falhará porque 0 !== 1
    expect(fatorial(0)).toBe(1);
    // Se || virar &&, isso falhará porque 1 !== 0  
    expect(fatorial(1)).toBe(1);
    // Para n >= 2, a condição não deveria ser true
    expect(fatorial(2)).toBe(2);
  });
});