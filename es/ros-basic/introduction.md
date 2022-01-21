# Introducción

## ¿Qué es ROS?

Robot Operating System (ROS) es una suit middleware de código abierto, y aunque ROS no es un sistema operativo posee funciones de abstracción de hardware, control de dispositivos de bajo nivel, comunicación entre procesos, gestión de paquetes, comunicación en red y una amplia gama de macros, convirtiandolo en un framework flexible para el desarrollo de software para robots, con una colección de herramientas, librerias y convenciones que se adaptan a una amplia variedad de plataformas robóticas, con el objetivo de simplificar la tarea de crear complejos y robustos sistemas roboticos.

## Historia

Las primeras piezas de software que luego se convertirían en ROS estaban desarrollandose en Stanford University por dos estudiantes de maestria Eric Berger and Keenan Wyrobek en el [Programa de Robotica Personal](http://personalrobotics.stanford.edu/). Los primeros pasos por crear este sistema unificado iniciaron con la construcción de [PR1](http://personalrobotics.stanford.edu/ICRA-2008-kaw-v17.pdf) como un hardware de prototipado para comenzar a trabajar en el software a partir de el, para eso tomaron prestadas las mejores practicas de otros macros y softwares de código abierto como switchyard de Morgan Quigley otro estudiante de doctorado que había estado trabajando en STAIR (STanford Artificial Intelligence Robot) en el Laboratorio de Inteligencia Artificial de Stanford. Eric Berger and Keenan Wyrobek  en busqueda de financiamiento para continuar el desarrollo de PR1 conocieron a Scott Hassan fundador de Willow Garage una encubadora de tecnologia. Hassan compartiendo la visión de Berger y Keenan de crear un sistema unificado para la robótica los invitó a trabajar en Willow Garage, realizando el primer commit de código ROS el 07 de noviembre del 2007.

Willow Garage comenzó a desarrollar PR2 utilizando ROS como software de ejecución. Poco despues se lanzó ROS (0.4 Mango Tango) seguido por un paper que mostraba RVIZ y el primer articulo sobre ROS ([ROS: an open-source Robot Operating System](http://www.robotics.stanford.edu/~ang/papers/icraoss09-ROS.pdf)).

En 2010 Willow Garage comenzó la creación de Open Source Robotics Foundation (OSRF) para luego en 2013 OSRF convertirse en el principal mantenedor de ROS ya que Willow Garage sería absorbido por sus fundadores. Despues Clearpath Robotics asume las responsabilidades de soporte para PR2 a principios de 2014. Desde entonces OSRF se ha hecho cargo del desarrollo primario de ROS, lanzado una nueva versión cada año.

## Distribuciones ROS

Una distribución ROS es un conjunto versionado de paquetes ROS. Son similares a las distribuciones de Linux (por ejemplo, Ubuntu, Mate, Arch, etc.). El propósito de las distribuciones ROS es permitir que los desarrolladores trabajen con una base de código relativamente estable hasta que estén listos para hacer avanzar todo.

Al momento de escribir estoy (Octubre 2021) las dos distribuciones activas de ROS son ROS Noetic Ninjemys que tiene como platadorma objetivo Ubuntu Focal Fossa (20.04) y ROS Melodic Morenia para Ubuntu Bionic (18.04). Todas las distrubuciones de ROS dejan de tener soporte cuando la plataforma objetivo llega al final de su vida (EOL), por ejemplo ROS Kinetic Kame para Ubuntu Xenial (16.04) terminó el suporte en Abril de 2021 al igual que Ubuntu Xenial EOL.

Si se necesasita una plataforma especifica consultar [REP 03](https://www.ros.org/reps/rep-0003.html) para ver los detalles de cada plataforma soportada.

### ¿Qué distribución usar?

Depende mucho de las necesidades de cada proyecto. Una lista arbitraria de recomendaciones basadas en casos de uso.

| Caso de uso              | Recomendación                                              |
|--------------------------|------------------------------------------------------------|
| Ultima versión de Gazebo | Noetic para Gazebo 11                                      |
| Usar OpenCV3             | Noetic o Melodic                                           |
| Usar OpenCV4             | Noetic                                                     |
| Jetson Computers         | Melodic para L4T y NVIDIA JetPack SDK                      |
| Plataforma específica    | Consultar [REP 03](https://www.ros.org/reps/rep-0003.html) |

## Ventajas de ROS

Algunas venjatas que tiene ROS como plataforma de desarrollo de robótica frente a otras como [Player](http://playerstage.sourceforge.net/), [YARP](https://www.yarp.it/), [Orocos](https://www.orocos.org/), [MRPT](https://www.mrpt.org/), [SimSpark](http://simspark.sourceforge.net/) entre otras son:

* **Capcidades de alto nivel altamente configurables**: ROS viene con capacidades listas para usar, por ejemplo, SLAM (localización y mapeo simultáneos) y AMCL (localización adaptativa de Monte Carlo). Los paquetes en ROS se pueden utilizar para realizar navegación autónoma en robots móviles y el paquete MoveIt para la planificación del movimiento de manipuladores robóticos. Estas capacidades se pueden utilizar directamente en nuestro software sin ningún problema. Estas capacidades son su mejor forma de implementación, por lo que escribir código nuevo para las capacidades existentes es como reinventar ruedas. Además, estas capacidades son altamente configurables; podemos ajustar cada capacidad utilizando varios parámetros.
* **Herramientas de depuración, visualización y simulación**:  ROS está repleto de toneladas de herramientas para depurar, visualizar y realizar simulaciones. Las herramientas como rqt_gui RViz y Gazebo son algunas de las herramientas sólidas de código abierto para depuración, visualización y simulación. El marco de software que tiene estas muchas herramientas es muy raro.
* **Drivers para sensores y actuadores**: ROS está repleto de controladores de dispositivos y paquetes de interfaz de varios sensores y actuadores en robótica. Los sensores de gama alta incluyen Velodyne-LIDAR, escáneres láser, Kinect, etc. y actuadores como los servos Dynamixel. Podemos conectar estos componentes a ROS sin ningún problema.
* **Interoperabilidad**: el middleware de paso de mensajes ROS permite la comunicación entre diferentes nodos. Estos nodos se pueden programar en cualquier lenguaje que tenga una [API ROS](http://wiki.ros.org/APIs). Podemos escribir nodos de alto rendimiento en C++ y otros nodos en Python. Este tipo de flexibilidad no está disponible en otras plataformas.
* **Modularidad**:  Uno de los problemas que pueden ocurrir en la mayoría de las aplicaciones robóticas independientes son, si alguno de los subprocesos del código principal falla, toda la aplicación del robot puede detenerse. En ROS, la situación es diferente, estamos escribiendo diferentes nodos para cada proceso y si un nodo falla, el sistema aún puede funcionar. Además, ROS proporciona métodos robustos para reanudar el funcionamiento incluso si algún sensor o motor está muerto.
* **Multi-procesos**: Manejar un recurso de hardware por más de dos procesos siempre es un dolor de cabeza. Imagínese, queremos procesar una imagen de una cámara para detección de rostros y detección de movimiento, podemos escribir el código como una sola entidad que puede hacer ambas cosas, o podemos escribir un código de un solo hilo para la concurrencia. Si queremos agregar más de dos características en subprocesos, el comportamiento de la aplicación se volverá complejo y será difícil de depurar. Pero en ROS, podemos acceder a los dispositivos usando ROS topics desde los controladores ROS. Cualquier número de nodos ROS puede suscribirse al mensaje de imagen del controlador de la cámara ROS y cada nodo puede realizar diferentes funcionalidades. Puede reducir la complejidad en el cálculo y también aumentar la capacidad de depuración de todo el sistema.

## Desventajas de ROS

* **Dificil de aprender**: ROS es una plataforma de desarrollo dificil de aprender utilizando unicamente los recursos de la wiki oficial, especialmente para personas que no tienen mucha experiencias en el mundo de la programación y la robótica.
* **Complejidad para configurar entornos de simulación**: El entorno de simulación principal de ROS es Gazebo, aunque se puede integrar con otros como [CoppeliaSim](https://www.coppeliarobotics.com/) (de los creadores de V-REP), [Webots](https://www.cyberbotics.com/), [Unity Robotics](https://github.com/Unity-Technologies/Unity-Robotics-Hub). En Gazebo el proceso de configuración del entorno de simulación se realiza mediante código, ademas contiene un conjunto de herremientas GUI que facilitan el proceso de construir el entorno, pero es necesario definir en código las caractiristicas física, controladores, sensores, matrices de inercia entre otras cosas que hacen el uso de Gazebo complejo.
* **Modelado de robots basado en código**: El modelado del robot en ROS utiliza [URDF](http://wiki.ros.org/urdf), es una descripción de robot basada en XML, por lo que es necesario escribir el modelo de robot como una descripción usando etiquetas URDF. Existe un complemento de SolidWorks para convertir un modelo 3D de SolidWorks a URDF. Existen algunos add-ons para otros softwares CAD como este para Fusion 360. Aprender a modelar un robot en ROS llevará mucho tiempo y la construcción con etiquetas URDF también lleva mucho tiempo en comparación con otros simuladores.
* **Necesidad de una computadora**: Es necesario una computadora donde ejecutar ROS. Para robots pequeños que funcinan completamente con microcontroladores no se requiere utilizar ROS, a menos que se quiera realizar funcionalidades de alto nivel como la navegación autónoma y la planificación del movimiento.

## Referencias

- [About ROS](https://www.ros.org/about-ros/)
- [History](https://www.ros.org/history/)
- [The Origin Story of ROS, the Linux of Robotics](https://spectrum.ieee.org/automaton/robotics/robotics-software/the-origin-story-of-ros-the-linux-of-robotics)
- [ROS Distributions](http://wiki.ros.org/Distributions)
- [ROS Core Components](https://www.ros.org/core-components/)
- [ROS Integrations](https://www.ros.org/integration/)