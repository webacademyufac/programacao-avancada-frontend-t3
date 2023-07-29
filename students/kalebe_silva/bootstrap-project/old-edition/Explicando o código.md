---
marp: true
---

# Gerador de progress bar

by kalebe silva

---

## Explicando o código

Criando as variáveis que nós usaremos para criar o progress bar:

```js
htmlIdArray = ["circleA", "circleB", "circleC", "circleD"];
circleInternSizeNumber = [200, 66, 4, 222, 60];

```

---

### Gerador de progress bar

Chamando a função:

```js
createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber);
```

Função que gera os progress bar:

```js
function createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber) {
    for (let i = 0; i < htmlIdArray.length; i++) {
      activeCircle(
        returnNewProgressBarObj(returnHtmlElementId(htmlIdArray[i]), circleInternSizeNumber[i])
      );
    }
}
```

De forma simplificada:

```js
escreveCirculoUsandoProgressBar(objetoProgressConfigurado));
```

---

### Retorna o ID do HTML

Retorna o ID do documento html:

```js
function returnHtmlElementId(name) {
  return document.getElementById(name);
}
```

---

### Retorna um novo progress bar

Retorna um novo objeto do tipo __ProgressBar__:

```js
function returnNewProgressBarObj(circleName, internSize) {
  return new ProgressBar.Circle(circleName, returnCircleObj(internSize));
}
```

---

### O objeto usado na função anteior

Retorna o objeto usado pelo ProgressBar para gerar o circulo:

```js
function returnCircleObj(internSize){
    return {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#333", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
            circle.path.setAttribute("stroke-width", state.width);
      
            let value = Math.round(circle.value() * internSize);
            if (value === 0) {
              circle.setText("");
            } else {
              circle.setText(value);
            }
          }}   
}   
```
---

### Voltado para nossa função principal

Chamando a função:

```js
createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber);
```

Função que gera os progress bar:

```js
function createCirclesUsingArrays(htmlIdArray, circleInternSizeNumber) {
    for (let i = 0; i < htmlIdArray.length; i++) {
      activeCircle(
        returnNewProgressBarObj(returnHtmlElementId(htmlIdArray[i]), circleInternSizeNumber[i])
      );
    }
}
```

---

### Escreve o círculo na tela

Utiliza o obj ProgressBar para escrever o círculo na tela:

```js
function activeCircle(progressBar) {
    progressBar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    progressBar.text.style.fontSize = "2rem";
    progressBar.animate(1.0); // Number from 0.0 to 1.0
  }
  
```

---

## Obrigado pela atenção :)
