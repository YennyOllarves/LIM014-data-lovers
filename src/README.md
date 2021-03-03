# DATA LOVERS

# DEFINICION DEL PRODUCTO

* Conociendo al usuario
- ¿Quiénes son los principales usuarios de producto?
Todo aquél con un minimo interes en saber de qué trata la serie, hasta usuarios expertos en la trama de la serie

- ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
Conocer y tener al alcance una web datos de los personajes y datos curiosos de la serie

- ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
Acceso a la descripcion de cada personaje, acceso datos curiosos de la serie, brindar informacion introductoria de la serie

-¿Cuándo utilizan o utilizarían el producto?
Cuando quieran compartir con amigos, familiares y asi motivar a que mas personas consuman la serie

**Definiendo el Producto**
El producto permite al usuario saber informacion general de la serie:
Resumen de la Serie
Informacion de los personajes de forma ordenada y filtrado de acuerdo a sus caracteristicas
Datos curiosos para ver data estadistica del numero de personajes que viven en cada planeta y ranking de las personajes principales de la serie. 

![linkPlaning](https://trello.com/b/YGRKj1G0/rick-and-morty)

# Historia de Usuario1
___
### Titulo:
* Ver información por primera vez sobre la serie
___
**Yo como:** Usuario no conocedor de la serie
**Quiero:** Saber de qué trata (conocer personajes de la serie)
**Para:** Decidir si darme la oportunidad de iniciar a ver la serie.

----------------

#Criterios de aceptación 
___
**Escenario:** Navegación en la web. pag principal
*Dado que:* El usuario quiere obtener información rápida del show
*Cuando:*  Ingresa al inicio de la web
*Entonces:* Se  generará un pop-up con información básica. Resumen de que va la serie, para todo el que ingrese.

#Definición de terminado 1 - DefinitionOfDone
___

El usuario ve la información básica de Rick y Morty al ingresar a la página

# Historia de usuario 2
**Titulo:** *Conocer personajes de un lugar especifico*
___


**Yo como:** Usuario que ha visto pocos capítulos
**Quiero:** Saber los personajes que viven en la tierra
**Para:** Recordar escenas de manera fácil, e incentivarme a seguir con las temporadas faltantes.

#Criterios de aceptación 
___

**Escenario:** Navegación en la tabla de filtros
**Dado que:** El usuario quiere reforzar su conocimiento del show

**Cuando:** Ingrese a la web.
*Entonces:* se mostrará una tabla de filtrado donde aparecerá su búsqueda

**Cuando:** haga click en "personajes de la tierra".
*Entonces:* se mostrará una lista de personajes.

**Cuando:** haga click en algún personaje.
*Entonces:* aparecerá información del personaje en una especie de card amigable de visualizar.

#Definición de terminado 2 -DefinitionOfDone
___

Usuario puede interactuar y verificar rápidamente los personajes de su interes por filtrado. Y recibio la informacion necesaria para determinar si continua o no la serie.


# HISTORIA DE USUARIO 3
**Titulo:** Conocer el total de mundos existentes en la serie.
___

**Yo como:** Usuario fan de la serie.
**Quiero:** saber el numero de mundos que hay
**Para:** Incentivar e impactar a otras personas, y así se animen a consumir la serie.
___
#Criterios de aceptación 3
___
Escenario: Navegación en la web principal, extensión datos curiosos.
Dado que: El usuario quiere obtener datos curiosos para compartir con sus cercanos.

Cuando:Ingrese a la web, este debe adecuarse a cualquier dispositivo.
Entonces:La web deberá ser responsive.

Cuando: Encuentre un apartado de datos curiosos.
Entonces: Crearemos ese apartado en la pagina principal.

Cuando: El usuario haga click en el apartado.
Entonces: Encontrará una lista de datos curiosos.

Cuando: El usuario haga click en alguna sección de interés
Entonces: Se desplegará y se mostrará la información requerida
___


#Definición de terminado  -DefinitionOfDone
___
El usuario es capaz de ingresar de manera rápida al apartado de "datos curiosos" 

# HISTORIA DE USUARIO 4
___
**Titulo:** Conocer en cuantos capítulos sale cada personaje.

**Yo como:** Seguidor de la serie
**Quiero:** Saber el numero de episodios en que sale el personaje buscado
**Para:**  Identificar su relevancia en el show.
___
#Criterios de aceptación
___

**Escenario:** Navegación en buscador de personajes
*Dado que:* El usuario quiere obtener el numero de episiodios que sale cada personaje, para compartir con sus cercanos.

**Cuando:**Ingrese a la web, este debe adecuarse a cualquier dispositivo.
*Entonces:*La web deberá ser responsive.

**Cuando:** Encuentre el buscador de personajes.
*Entonces:* Crearemos ese apartado en la pagina principal.

**Cuando:** El usuario haga click en el apartado.
*Entonces:*Se encontrará redireccionando a cards de los personajes. 

**Cuando: **El usuario haga click en alguna card. 
*Entonces:* Se mostrará la card del personaje con la info de interés.
___
#Definición de terminado 
 El usuario recibe la información que necesita, identificando la información en un elemento del card de personaje de  interés

# PROTOTIPOS

prototipos de baja fidelidad
![Prototipo1](../main/src/picture/PrototipoBajaF.jpg)
![Prototipo2](../main/src/picture/ProtoBaja1.jpg)
![Prototipo3](../main/src/picture/ProtoBaja1.1.jpg)
![Prototipo4](../main/src/picture/ProtoBaja1.2.jpg)

# DISEÑO DE INTERFAZ DE USUARIO

![DiseñoFigma](https://www.figma.com/file/1gIKXXp6sDN0fXyhY044xv/R%26M?node-id=0%3A1&frame-preset-name=Desktop)

# TEST DE USABILIDAD

#Observaciones

**Usuario 1** (visualización desde móvil)
- Tamaño de letra de difícil lectura
- El tamaño del menú de filtros no se aprecia por ser pequeño
- Buena paleta de colores
- Intuitivo

**Usuario 2** (visualización desde móvil)
- La zona blanca de la página principal es muy contrastante con lo demás.
- El botón de home no se diferencia.
- El fondo de las estrellas no se aprecia.
- Sería ideal tener más movimientos en los elementos (gifts) 
- Buena paleta de colores
- Los cards del personaje se puede apreciar.

**Usuario 3**
#Observaciones de Génesis
- Los botones parecen input, bajarle el borde
- Quitarle el logo pequeño de Rick and Morty de la pantalla principal
- Homologar mayuscula o minuscula