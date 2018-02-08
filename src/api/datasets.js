import fetch from 'utils/fetch';

export function fetchCollectionList(query) {
  return fetch({
    url:'/data_sets',
    method:'get',
    params: query
  })
}

export function deleteCollection(dataSetId) {
  return fetch({
    url:'/data_sets/'+dataSetId,
    method:'delete'
  })
}

export function createCollection(dataSet) {
  return fetch({
    url:'/data_sets',
    method:'post',
    data:dataSet
  })
}

export function getCollection(collectionId) {
  return fetch({
    url:'/data_sets/'+collectionId,
    method:'get'
  })
}

export function updateCollection(dataSet) {
  return fetch({
    url:'/data_sets',
    method:'put',
    data:dataSet
  })
}

export function deleteCollectionsBatch(collectionIds) {
  return fetch({
    url:'/data_sets',
    method:'delete',
    data:collectionIds
  })
}

export function getDataSetContainer(containerId) {
  return fetch({
    url:'/dataSetContainers/'+containerId,
    method: 'get',
  })
}

export function createDataSetContainer(container) {
  return fetch({
    url:'/dataSetContainers',
    method:'post',
    data:container
  })
}
export function getRelFilePath(containerId) {
  return fetch({
    url:'/dataSetContainers'/+containerId+'/filePath',
    method:'get'
  })
}

export function uploadDataSetContainer(containerId,containerFile) {
  return fetch({
    url:'/dataSetContainers/'+containerId+'/uploadSetData',
    method:'post',
    headers:{"Content-Type":"multipart/form-data"},
    data: containerFile
  })
}

export function downloadContianerFile(containerId,fileParam) {
  return fetch({
    url:'/dataSetContainers/'+containerId,
    method:'get',
    params:fileParam
  })

}

export function updateDataSetContainer(container) {
  return fetch({
    url:'/dataSetContainers',
    method:'put',
    data:container
  })
}
export function deleteDataSetContainer(containerId) {
  return fetch({
    url:'/dataSetContainers',
    method:'delete',
    data:containerId
  })
}
export function deleteBatchDataSetContainers(containerIds) {
  return fetch({
    url:'/dataSetContainers',
    method:'delete',
    data:containerIds
  })
}

export function fetchOptions() {
  return fetch({
    url:'/options',
    method:'get',
  })
}

export function fetchOptionalTaskTypes() {
  return fetch({
    url:'/miningTaskTypes',
    method:'get'
  })
}

export function fetchOptionaAttributeTypes() {
  return fetch({
    url:'/attributeChars',
    method:'get'
  })
}

export function fetchOptionalCollectionChars() {
  return fetch({
    url:'/collectionChars',
    method:'get'
  })
}

export function fetchOptionalArea() {
  return fetch({
    url:'/'
  })
}

