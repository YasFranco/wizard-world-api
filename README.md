# TRABAJO PRÁCTICO - MODULO IV

Este trabajo práctico consiste en desarrollar una app que proporciona informacion al consumir datos de una API. En este caso la API es sobre Elixirs y permite a los usuarios acceder a detalles especificos sobre estos. 

- El usuario puede realizar diversas acciones utilizando los siguientes comandos:
 
 - **npm run start data** : Obtiene todos los datos disponibles en la API.
 - **npm run start names** : Devuelve todos los nombres de los Elixirs que se encuentran en la API.
 - **npm run start effect "id"** : Devuelve el efecto del elixir mediante su ID.
 - **npm run start difficulty "dificultad"** : Devuelve todos los Elixirs clasificados bajo esa dificultad.
 - **npm run start ingredients "id"** : Devuelve los ingredientes del Elixir mediante su ID. 

## Observaciones: 
- Las dificultades disponibles para la búsqueda son las siguientes: 
 - *Moderate*
 - *Unknown *
 - *Advanced*
 - *Beginner*
 - *OrdinaryWizardingLevel*
 - *OneOfAKind*