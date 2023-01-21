# Requerimientos para desarrollar

1. Instalar las librerias necesarias
   ```bash
   npm install
   ```
2. Iniciar el proyecto
   ```bash
   npm run electron-dev
   ```
   Es probable que visualizce un error de conexion (ERR_CONNECTION_REFUSED) por parte de electron, solo espere a que inicie el proyecto de **React.js** y recargue (Ctrl+R) la ventana de **Electron**

   Si se presenta el error "**Network service crashed**" será necesario reiniciar el proyecto

3. En caso de ver el error "**onAfterSetupMiddleware is Deprecated | onBeforeSetupMiddleware is Deprecated**"
   
    Siga los pasos del siguiente video, es necesario ya tener la carpeta de **node_modules** 
    <https://youtu.be/ifSTp9WEHpo?t=194>

# Intrucciones para hacer una build
1. Una vez terminado el proyecto se debe ejecutar los siguientes comandos
```bash
npm run package
```
2. Si ya puede visualizar la carpeta out en la raiz del proyecto puede continuar con
```bash
npm run make
```
Se pueden hacer build para diferentes sistemas operativos, revisar la documentación de [electron-forge](https://www.electronforge.io/)