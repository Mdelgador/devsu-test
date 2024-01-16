Para la correcta ejecucion es necesario ejecutar desde la terminal el comando node "npm i"
luego de importar los archivos necesarios de node se puede ejecutar el los specs de 2 maneras:

1.- ejecucion con cabecera (mostrando visualmente paso a paso la ejecucion de los casos de prueba):
    - desde la terminal ejecutar el comando "npx cypress open"
    - click en E2E Testing
    - Selecciona el Navegador de tu preferencia
    - Selecciona el spec a ejecutar (prueba e2e => TC_001_E2eTestingWithPOM
                                     ptueba API => TC_002_APItest)

2.- ejecucion sin cabecera (mostrando los resultados de la ejecucion directamente en la terminal)
    - desde la terminal ejecutar el comando "npx cypress run"