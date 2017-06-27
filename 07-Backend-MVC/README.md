#ejemplo de uso del framework Sailsjs

##Instalacion
Comando para instalar sails:
```
> sudo npm install -g sails
```

[Documentacion de instalacion](http://sailsjs.com/get-started)

#Crear nueva aplicacion
```
>sails new aplicacion
```
"aplicacion" es el nombre de la carpeta que va a contener los archivos de sails

##levantar servidor

```
>sails lift
```

para levantar en otro puerto usamos
```
>sails lift --port 8080
```
otra forma de levantar
```
>node app.js
```

##Comando para crear controladores
   Comando para crear controladores
   ```
   >sails generate controller Saludo
   ```
   
   ##Comando para crear Modelos
      Comando para crear Modelos
      ```
      >sails generate model Usuario
      ```