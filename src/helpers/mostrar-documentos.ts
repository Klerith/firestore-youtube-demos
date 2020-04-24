import firebase from 'firebase';


export const retornaDocumentos = ( snapshot: firebase.firestore.QuerySnapshot ) => {

    const documentos: any[] = [];

        snapshot.forEach( snapHijo => {
            documentos.push({
                id: snapHijo.id,
                ...snapHijo.data()
            });
            
        });

    console.log(documentos)
    return documentos;
}