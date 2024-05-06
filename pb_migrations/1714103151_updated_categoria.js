/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnr07srwgc2t3og")

  // remove
  collection.schema.removeField("wwmqvk18")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfpuww9g",
    "name": "nombre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ne64n7fl7thffto",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gnr07srwgc2t3og")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwmqvk18",
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
  }))

  // remove
  collection.schema.removeField("bfpuww9g")

  return dao.saveCollection(collection)
})
