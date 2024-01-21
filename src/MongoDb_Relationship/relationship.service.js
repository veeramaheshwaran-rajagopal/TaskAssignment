//create document in databse
const createDocument = (model, data) => {
    return model.create(data)
}
//get document in databse
const getDocument = async (model, condition) => {
    const document = await model.findOne(condition)
    return document
}
//update document in databse
const updateDocument = async (model, condition, updateData) => {
    const document = await model.updateOne(condition, updateData)
    return document
}
//get documents with related documents inside reference like 1.one to one 2.one to Many
const getDocuments = async (model, condition, projection, populateField, populateProjection) => {
    const documents = await model.find(condition).select(projection).populate(populateField, populateProjection).lean()
    return documents
}
//get documents many to many relationships
const getDocumentsManyToManyRelationship = async (model, condition, projection, populateField, populateProjection, nestedPopulateField) => {
    const documents = await model.find(condition).select(projection).populate({ path: populateField, populateProjection, populate: { path: nestedPopulateField } })
    return documents
}
module.exports = { createDocument, getDocuments, getDocument, updateDocument, getDocumentsManyToManyRelationship }