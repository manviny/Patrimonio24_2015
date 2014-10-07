ANG-UI
======

[angular cordova project](http://damien.antipa.at/blog/2014/01/05/build-a-cordova-app-with-angularjs/)


##Crear entorno Cordova con Angular y Onsenui

#### 1. Install Cordova enviroment
```bash
$ cordova create myApp io.myweb.myApp "MyApp"    
$ //add platform
$ cordova platform add [ios|android]  
$ // install plugin  
$ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-orientation.git  
$ // create a new folder  
$ mkdir webapp && cd webapp  
$ // download this zip (angularjs + onsenui) and unzip in webapp  
$ bower install  
$ npm install  
$ // to build  
$ grunt  
$ // and for a preview  
$ grunt serve
$ // This will generate a build output in your webapp folder under /dist. In order to integrate the files into your Cordova project you will either need to copy the contents of this folder to /www. You may do that manually, change the grunt script or build a shell script  
$ // to build all platforms  
$ cordova build  
$ // or for a specific platform  
$ cordova build ios  
```


#### 3. compile and emulate for develpment

1. /www necesita apuntar a /webapp/app de esta forma compilamos con cordova el codigo sin pasarlo por grunt (minifie, uglyfie...) cada vez que haceos un cambio, ahorrando tiempo:  
 **ln -s /Users/manol/Development/_apps/angular-cordova_master/webapp/app /Users/manol/Development/_apps/angular-cordova_master/**
2. cambiar nombre del recien creado /app(link) a /www
3. Esto implica **copiar bower_components a /webapp/app** cada vez que hacemos cambios en bower, de esta forma carga css y js de los bower componentes sin tener que usar grunt para compilar
4. ahora ya podemos ejecutar en android con: **cd .. &&  cordova run android && cd webapp**

#### 4. Depurar con weinre
* poner esta linea de codigo en index.html    
* < script src="http://192.168.1.20:8080/target/target-script-min.js#anonymous"></script >
* ir a /webapp
* weinre --boundHost -all-


#### 5. compile and emulate for distribution
* MUY IMPORTANTE , realizar el siguiente paso para no BORRAR la carpeta /app original
* ln -s /Users/manol/Development/_apps/angular-cordova_master/webapp/dist /Users/manol/Development/_apps/angular-cordova_master/ (asi apuntamos a /dist cada vez que compilamos con cordova
* cambiar nombre del recien creado dist(link) a /www
* create DIST: grunt && rm -rf ../www && cp -R ./dist ../www 
* emulate ANDROID: cd .. && cordova build android && cordova emulate android && cd webapp

#### 6. now you ca use

[grunt](http://gruntjs.com/)

[bower](http://bower.io/)

[onsenui](http://onsenui.io/)

[angular generator](https://github.com/yeoman/generator-angular)

[cordova plugins](http://plugins.cordova.io/#/viewAll)


