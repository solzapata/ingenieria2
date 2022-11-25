import { nanoid } from "nanoid";

// SE GENERA UN ID RANDOM
export const UseNewRandomId = (prefix) => {
  return prefix + nanoid();
};

// AGREGA ELEMENTO A LA BDD
// se le agrega un id random
// se lo identifica a traves de la entidad
export const addInDatabase = (db, data, entity) => {
  var newId = UseNewRandomId(entity);

  db?.put({ ...data, _id: newId, entity: entity });
};

// SE BUSCAN UNO O MAS ELEMENTOS A TRAVES DE LA ENTIDAD
// se setean en un estado
export const findByEntity = (db, entity, setData) => {
  db?.find({
    selector: { entity: entity },
  })
    .then((result) => {
      setData(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// SE ELIMINA UN ELEMENTO DE LA BDD SEGUN EL ID
export const deleteInDatabase = (db, id) => {
  db.get(id)
    .then(function (doc) {
      return db.remove(doc);
    })
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(err);
    });
};

// SE EDITA UN ELEMENTO DE LA BDD SEGUN EL ID
export const editInDatabase = (db, id, data) => {
  db.get(id)
    .then(function (doc) {
      return db.put({
        _id: id,
        _rev: doc._rev,
        ...data,
      });
    })
    .then(function (response) {
      // handle response
    })
    .catch(function (err) {
      console.log(err);
    });
};
