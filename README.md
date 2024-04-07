# AngularLiveFernandaKipper

- [Link do notion](https://metal-flea-041.notion.site/LIVE-Criando-Projeto-Angular-c83eefb9f4834a3295399b6d6d7d332b)

- Normalmente o Angular é para grandes projetos, por conta da categorização e esquematização dele.

- Observable, vai ser alguém que vai ficar sendo observado por todos, se algo mudar nele, todos que estão subscribe vão receber um aviso
  - Boa prática de colocar o `$` para variáveis assincronas, como o observable (Streams)

- Service, `@Injectable`, mostra que o serviço é injetável

- Diretivas (Ferramentas para manipular os templates, como o `*ngFor`) e Pipes vem do Commons module
- Diretivas = Hooks no react

- `@Input(alias*) var:tipo = valor` é o prop no react, serve para o component pai passar uma mensagem para o component filho
  - O alias seria para o HTML chamar (É opcional) 

- Se eu quiser que o filho comunique algo que aconteceu com ele?
- O output permite que o pai escute o filho **Precisa importar o Output e EventEmitter no @AngularCore**
- `@Output() var = new EventEmitter<string>()` = Emissor de evento, prepara o pai para escutar o filho
- `var.emit('parâmetro'*)` = Emite o evento para o pai, pega o que aconteceu com ele e conta para o pai


```
funct (){
  var. emit('oie');
}
---
<tag (var)='funct($event)'>
---
funct($event)
--- 
log
'oie'
```


- DataBiding = Vinculação de dados
  - <tag var='valor'> - Indica que valor é fixo
  - <tag [var]='var2'> - Indica que var recebe uma variável
  - <tag (var)='var2'> - Indica que var recebe uma variável
  - o [] é chamado de property biding

---------

### Rotas --
`{ path:'**', redirectTo: 'not-found'}`
- Para que quando o usuário digitar uma rota inexistente ele seja redirecionado para NotFound 404

### Questões
- Declarações? Imports? O que é isso?
- $Event

## Bibliotecas
- Formulários e mais: [Prime NG](https://primeng.org/)
- [Dev Express](https://js.devexpress.com/) (é pago)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

---------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


