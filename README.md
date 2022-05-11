
# Builders - Weather Challenge

Aplicativo desenvolvido utilizando a biblioteca do **React Native** e também **Expo**.
Esta aplicação tem como principal objetivo mostrar a localização do usuário, assim
como as codiões climáticas.


## Screenshot

![App Screenshot](https://github.com/caiocrespo/builders-weather-challenge/blob/master/assets/app_captura.png?raw=true)
## Utilização / Exemplo

Para inicializar este projeto em sua máquina local você precisa ter instalado
em seu sistema a biblioteca do **React Native**, assim como o **Expo**.

Ao clonar o repositório você deverá instalar as dependencias, e então,
inicializar o projeto. Utilize esses comandos:

```javascript
expo install
```

E depois:

```javascript
expo start
```

## Arquitetura

A arquitetura deste projeto foi feita utilizando componentes simples da
biblioteca react native, assim como as funcionalidades de localização do
Expo.cli.

O projeto se divide nos seguintes pontos:


- Screens (Folder)
- Components (Folder)
- App.js
- Navigator.js
- GlobalStyle.js
- GlobalService.js

### Screens

Esta pasta contém todas as telas a serem renderizadas no aplicativo. Cada
tela deve estar contida dentro de uma pasta com os seguintes arquivos:

- **index.jsx** - Utilizado como renderizador principal
- **styles.js** - Utilizado para guardar todos os estilos da tela
- **service.js** - As funcionalidades assim como a comunicação com API's fica aqui.

### Components

Esta pasta deve concentrar todos os componentes utilizados pelas telas.
A estrutura é parecida com o da pasta screens, a diferença está em não
conter um arquivo de serviços para os componentes (service.js) visto que
estas funcionalidades são para as telas. Dessa maneira a estrutura fica
da seguinte forma:

- **index.jsx** - Utilizado como renderizador principal
- **styles.js** - Utilizado para guardar todos os estilos da tela

### App.js

Este arquivo se encontra na raiz do projeto. Nele, encontra-se todas as 
principais funcionalidades que acontecem na inicialização do projeto.
Utilize este espaço para definir toda a lógica que deve acontecer antes
da inicialização do app.

### Navigator.js

Este arquivo cumpre com 2 principais responsabilidades. A primeira é de
disponibilizar um sistema de navegação entre as telas. Para inserir novas
telas, importe a página no arquivo, então invoke dentro da classe
`Navigator.pageList` da seguinte maneira:

```javascript
import Page from './screens/home';

export default class Navigator {
    pageList = {
        "home": (<Page navigator={this} />),
    }
}
```

Após essa importação, a página estará disponível em todas as telas do app
ao invocar `navigator.go('page')`.

A segunda responsabilidade é de transportar as variáveis globais que
pode ser invocada da seguinte forma:

```javascript
// solicitar variável
navigator.globalVariables.get('variableName');

// armazenar variável
navigator.globalVariables.set('variableName', variable);
```

### GlobalStyle.js

Este arquivo contém o controle principal do estilo do app. Nele definimos
styles que podem ser utilizados globalmente nas telas do app, assim como
a paleta de cores principais que possui a seguinte estrutura:

```javascript
export const palette = {
    primaryColor: "#F9F68E",
    secondaryColor: "#F887B3",
    accentColor: '#ABBBFE',
    midColor: '#F69F87',
    grayColor: "#707070",
    darkColor: "#212121",
    lightGrayColor: "#a2a2a2",
    lightColor: "#F5F5F5",
}
```

Também é possível exportar outras variáveis de controle geral, como tamanho
de bordas, arredontamento, etc...

### GlobalService.js

Assim como o GlobalStyles, o GlobalService contém os métodos que são utilizados
por toda aplicação. Ele também é o principal controle na comunicação com API's
externas.
## Authors

- [@caiocrespo](https://github.com/caiocrespo/builders-weather-challenge)

