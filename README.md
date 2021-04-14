## Cadastro de Carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.

**Regra de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
O Carro deve ser cadastrado, por padrão com disponibilidade.

- O usuário responsável pelo cadastro deve ser Adm.

## Listagem de carros

**Requisitos Funcionais**
Deve ser possivel listar todos carros disponiveis.
Deve ser possivel listar todos carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos carros disponiveis pelo nome da marca.
Deve ser possivel listar todos carros disponiveis pelo nome do carro.

**Regra de Negócio**
O usuário não precia estar logado no sistema.

## Cadastro de Especificação no carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível lsitar todos os carros.

**Regra de Negócio**
Não deve ser possivel cadastrar uma especificação para um carro inexistente.
Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser Adm.

## Cadastro de Imagens do carro

**Requisitos Funcionais**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possível lsitar todos os carros

**Requisitos Não Funcionais**
Utilizar o Multer para upload dos arquivos

**Regra de Negócio**
O usuario deve poder cadastrar mais de uma imagem para o carro.
O usuário responsável pelo cadastro deve ser Adm.

## Aluguel de Carro

**Requisitos Funcionais**
Deve ser possivel cadastrar um aluguel.

**Regra de Negócio**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um aliguel caso ja exista um aberto para o mesmo usuário.
Não deve ser possivel cadastrar um aliguel caso ja exista um aberto para o mesmo carro.
