/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f5omtgzivy9rn2f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hn84qu1n",
    "name": "ingredientes",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f5omtgzivy9rn2f")

  // remove
  collection.schema.removeField("hn84qu1n")

  return dao.saveCollection(collection)
})
