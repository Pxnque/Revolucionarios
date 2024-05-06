/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ne64n7fl7thffto")

  // remove
  collection.schema.removeField("lh0uti46")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b8hfsicq",
    "name": "idCategoria",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "gnr07srwgc2t3og",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ne64n7fl7thffto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lh0uti46",
    "name": "idCategoria",
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
  collection.schema.removeField("b8hfsicq")

  return dao.saveCollection(collection)
})
