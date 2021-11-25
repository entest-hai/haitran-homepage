import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receivedShadow: true, castShadow: true}
){
  const {receivedShadow, castShadow} = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    // after loaded what to do 
    loader.load(
      glbPath, 
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0 
        obj.receiveShadow = receivedShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receivedShadow
          }
        })
        resolve(obj)
      }, 
      // while loading what to do 
      undefined, 
      // load error what to do 
      function(error){
        reject(error)
      }
    )
  })
}