const byggList = document.querySelector('#bygg-list');
const form = document.querySelector('#add-bygg-form');

function renderBygg(doc){
    let li = document.createElement('li');
    let navn = document.createElement('span');
    let by = document.createElement('span');
    let adresse = document.createElement('span');
    let postnr = document.createElement('span');
    let areal = document.createElement('span');
    let oppvarming = document.createElement('span');
    let cross = document.createElement('div');



    li.setAttribute('data-id', doc.id);
    navn.textContent = 'Navn: ' + doc.data().navn;
    by.textContent = 'By: ' + doc.data().by;
    adresse.textContent = 'Adresse: ' + doc.data().adresse;
    postnr.textContent = 'Post Nummer: ' + doc.data().postnr;
    areal.textContent = 'Areal: ' +doc.data().areal;
    oppvarming.textContent = 'Oppvarmings Metode: ' + doc.data().oppvarming;
    cross.textContent = 'x';

    


    li.appendChild(navn);
    li.appendChild(by);
    li.appendChild(adresse);
    li.appendChild(postnr);
    li.appendChild(areal);
    li.appendChild(oppvarming);
    li.appendChild(cross);
    


    byggList.appendChild(li);

    //Slett Data
    cross.addEventListener('click', (e) =>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Bygg').doc(id).delete();
    })
}
//Få data
    // /db.collection('Bygg').get().then((snapshot) =>{
    //  snapshot.docs.forEach(doc => {
    //    renderBygg(doc);
    // })
    // })
//Lagre data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Bygg').add({
        navn: form.navn.value,
        by: form.by.value,
        adresse: form.adresse.value,
        postnr: form.postnr.value,
        areal: form.areal.value,
        oppvarming: form.oppvarming.value

    });
    form.navn.value = '';
    form.by.value = '';
    form.adresse.value = '';
    form.postnr.value = '';
    form.areal.value = '';
    form.oppvarming.value = '';
})
//ekte tid
db.collection('Bygg').orderBy('by').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderBygg(change.doc);
        } else if(change.type == 'removed'){
            let li = byggList.querySelector('[data-id=' + change.doc.id + ']');
            byggList.removeChild(li);
        }
    });
});
