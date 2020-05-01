
# select * from usuarios order by nombre asc, salario asc
```
usuariosRef
    .orderBy('nombre')
    .orderBy('salario')
    .get().then( retornaDocumentos )

```