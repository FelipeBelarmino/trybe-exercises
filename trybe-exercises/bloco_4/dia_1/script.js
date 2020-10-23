<!DOCTYPE html>
<html>
<body>

<!--
   Informações importantes!
   - Use o botão 'Run >>' para executar o código.
-->

<h2>The JavaScript typeof Operator</h2>

<p>The typeof operator returns the type of a variable, object, function or expression.</p>

<p id="valOne"><span>Tipo atual da variável valueOne: </span></p>
<p id="valTwo"><span>Tipo atual da variável valueTwo: </span></p>
<p id="valThree"><span>Tipo atual da variável valueThree: </span></p>
<p id="valFour"><span>Tipo atual da variável valueFour: </span></p>
<p id="valFive"><span>Tipo atual da variável valueFive: </span></p>
<p id="valSix"><span>Tipo atual da variável valueSix: </span></p>
<p id="valSeven"><span>Tipo atual da variável valueSeven: </span></p>
<p id="valEight"><span>Tipo atual da variável valueEight: </span></p>

<p id="valNewTwo"></p>
<p id="valNewEight"></p>

<script>
	
    // Aqui vemos algumas declarações de variáveis e seus tipos sendo exibidos `document....innerHTML`.

	let valueOne = "lucas";
    let valueTwo = "tunico";
    let valueThree = 3.14;
    let valueFour = NaN;
    let valueFive = false;
    let valueSix = undefined;
    let valueSeven = function() {};
    let valueEight = null;
  	
	
    document.getElementById("valOne").innerHTML +=  typeof valueOne;
    document.getElementById("valTwo").innerHTML += typeof valueTwo;
    // Exiba o valor de valueThree
    // Exiba o valor de valueFour
    document.getElementById("valFive").innerHTML += typeof valueFive;
    document.getElementById("valSix").innerHTML += typeof valueSix;
    document.getElementById("valSeven").innerHTML += typeof valueSeven;
    document.getElementById("valEight").innerHTML += typeof valueEight;
    
    // Agora vamos fazer a mudança de tipo para ver como funciona a tipagem dinâmica.
    
    // Troque o valor de valueTwo para um number e depois exiba seu novo tipo na linha comentada a baixo.
    //document.getElementById("valNewTwo").innerHTML =
    
    // Troque o valor de valueEight por um boolean e depois exiba seu novo tipo na linha comentada a baixo.
    //document.getElementById("valNewEight").innerHTML =

</script>
</body>
</html>

