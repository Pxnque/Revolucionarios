/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f5omtgzivy9rn2f",
    "created": "2024-04-28 21:50:51.024Z",
    "updated": "2024-04-28 21:50:51.024Z",
    "name": "licores",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ssdoffhj",
        "name": "tipoLicor",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hqru2hk8",
        "name": "nombre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f5omtgzivy9rn2f");

  return dao.deleteCollection(collection);
})
