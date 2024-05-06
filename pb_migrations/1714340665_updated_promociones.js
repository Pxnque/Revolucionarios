/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvx1ww1jmlxv9k9")

  // remove
  collection.schema.removeField("auumvfca")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "krvrwgf4",
    "name": "imagen",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvx1ww1jmlxv9k9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "auumvfca",
    "name": "imagen",
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
  collection.schema.removeField("krvrwgf4")

  return dao.saveCollection(collection)
})
