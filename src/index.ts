import db from './firebase/config';

const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

// insert into usuarios .... 
// db.collection('usuarios')
//     .add( usuario )
//     .then( docRef => {
//         console.log( docRef )
//     })
//     .catch( e => console.log('error', e ))

// update usuarios set activo = false where....
// usuariosRef
//     .doc('DcHhom5s03TCa8waNVBe')
//     .update({
//         activo: true
//     });

// Destructivo
// usuariosRef
//     .doc('DcHhom5s03TCa8waNVBe')
//     .set({
//         activo: true,
//         edad: 44,
//     });

// delete from usuarios where id ='xx'
// usuariosRef
//     .doc('DcHhom5s03TCa8waNVBe')
//     .delete()
//     .then( () => console.log('Borrado') )
//     .catch( e => console.log('error', e));


// select * from usuarios;
usuariosRef
    .onSnapshot( snap => {

        const usuarios: any[] = [];

        snap.forEach( snapHijo => {
            usuarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
            });
            
        });

        console.log(usuarios)
    })