const functions = require('firebase-functions');

const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

let handler = (coleccion, tipo, response) => {
    if (tipo == 'riders') {
        let promesas = [];

        riders.forEach(checkout => {

            promesas.push(
                db.doc('riders/' + checkout.rider).update({
                    aceptadoId: '',
                    cliente_activo: '',
                    pagoPendiente: false,
                })
            );
        });

        return Promise.all(promesas).then(() => {
            response.json({ ok: true });
        }).catch(() => response.json({ ok: false }));
    }

    if (tipo == 'coors') {
        let promesas = [];

        riders.forEach(checkout => {

            promesas.push(
                db.doc('riders_coors/' + checkout.rider).update({
                    pagoPendiente: false,
                })
            );
        });

        return Promise.all(promesas).then(() => {
            response.json({ ok: true });
        }).catch(() => response.json({ ok: false }));
    }


    response.json({ ok: false });
}


let hander2 = (response) => {
    response.json({ ok: true, text: 'funcionaa' });
}

exports.riders_desactivacion = functions.https.onRequest(async (request, response) => {

    response.set('Access-Control-Allow-Origin', "*");
    response.set('Access-Control-Allow-Methods', 'GET, POST');

    const db = admin.firestore();
    const riders = request.body;
    const tipo = request.query.tipo;
    const entorno = request.query.entorno;

    console.log(entorno, tipo)

    hander2(response);

    // switch (entorno) {
    //     case 'dev':

    //         break;

    //     case 'prod':

    //         break;

    //     default:
    //         break;
    // }

   
});