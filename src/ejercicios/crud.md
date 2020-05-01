# Referencia al document
```const usuariosRef = db.collection('usuarios');```

## Objeto
```
const usuario = {
    nombre: 'Susana',
    activo: false,
    fechaNaci: 0,
    salario: 1950
}
```


## insert into usuarios .... 
```
db.collection('usuarios')
    .add( usuario )
    .then( docRef => {
        console.log( docRef )
    })
    .catch( e => console.log('error', e ))
```

## update usuarios set activo = false where....
```
usuariosRef
    .doc('DcHhom5s03TCa8waNVBe')
    .update({
        activo: true
    });
```

## Destructivo
```
usuariosRef
    .doc('DcHhom5s03TCa8waNVBe')
    .set({
        activo: true,
        edad: 44,
    });
```

## delete from usuarios where id ='xx'
```
usuariosRef
    .doc('DcHhom5s03TCa8waNVBe')
    .delete()
    .then( () => console.log('Borrado') )
    .catch( e => console.log('error', e));
```

## select * from usuarios;
```
usuariosRef
    .onSnapshot( retornaDocumentos )
```

```
usuariosRef.get().then( retornaDocumentos );
```

## Select * from usuarios Where activo = true
```
usuariosRef.where('activo','==', true ).get().then( retornaDocumentos );
```


## Select * from usuarios Where salario > 1800
```
usuariosRef.where('salario','>', 1800 )
    .get().then( retornaDocumentos );
```


Select * from usuarios
        -- Where salario > 1800 and salario < 2300
        Where salario between 1800 and 2300
```
usuariosRef.where('salario','>=', 1800 )
           .where('salario', '<=', 2300 )
    .get().then( retornaDocumentos );
```



Select * from usuarios
    Where salario > 1800
        And activo == true
```
usuariosRef.where('salario','>=', 1800 )
           .where('activo', '==', true )
                .get().then( retornaDocumentos );
```

