# Para ejecutar el proyecto
# 1.- Clonar el Proyecto
# 2 .- ejecute yarn install o yarn 
# 3 .- Si se encuentra en una MAC puede ejecutar yarn run ios y si esta en pc yarn run android
# NOTA: recuerde que debe tener configurado su ambiente para desarrollar en react-native, no olvide ejecutar en apple npx pod-install 
# Front End Test
* Para el siguente aplicativo , se esta postulando para desarrollador de react native, por lo que em parecido extraño el diseno en Web
* Hice lo mejor posible adaptando la pantalla con un TabBottom y al ser movil no se requiere de un navegador entre paginas, consideré para este caso que un lazy load basado en una referencia (useRef), era lo necesario para que se pueda realizar con el gesto hacia abajo la carga de mas items
* Todo el diseno tiene CSS de React Native
* Para conseguir el color se utilizo la libreria de react-native-image-colors que entrea una lista de posibilidades y nombres segun el sistema operativo y asi poder mostrar el color de fondo
* Se hace uso de custom Hooks, y el proyecto esta realizado en TypeScript y levantado con Jest, encuentra un componente de testing de ejemplodentro del __tests__
* Los componentes estan fragmentados dinamicamente
*  Recuerde que la API no facilita la busqueda sino por nombres e ids - absolutamente exactos por lo que se realizo una logica en varios componentes y hooks, para hace un objeto que almacene una lista simulando un indexado que se filtra con javascript y react a traves del debounced
value
* Se pensaron y conceptualizaron algunas cosas por los diferentes SO
* Para las animaciones se usa lotties
* Espero sea de su agrado
Atentamente Ing. Juan Intriago Villareal - Especialista en Gestion y desarrollo de Aplicativos moviles (Full Stack)


