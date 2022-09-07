const videoBasePath = 'video/course';
const internalPagesPath = 'html-fragment';

const menuOptionEntryTypes = Object.freeze({
    videoContainer:"VIDEO_CONTAINER",  
    introContainer:"INTRO_CONTAINER", 
    video:"VIDEO",
    linkContainer:"LINK_CONTAINER",
    internalPage:"INTERNAL_PAGE",
    externalLink:"EXTERNAL_PAGE"
});

const MENU = {
    
    unidad0:{
        id:'path-unidad-0',
        title:'',
        summary:'',
        path:'unidad-0',
        type:menuOptionEntryTypes.introContainer,
        items:[
            {id:'vid-0', type:menuOptionEntryTypes.video, title:'Presentación', uri:'presentacion.mp4', captationsUri:"presentacion.vtt", notes : ["nota de prueba","nota de prueba","nota de prueba"]},

        ]
    },
    unidad1:{
        id:'path-unidad-1',
        title:'Unidad 1: Tu primer programa',
        summary:'En esta unidad crearás tu primer programa. Veremos los conceptos básicos de Programación y conocerás los principales elementos de Scratch.',
        path:'unidad-1',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-001', type:menuOptionEntryTypes.video, title:'¿Qué es un algoritmo? Estructuras de control. Secuencia', uri:'001_que_es_un_algoritmo_estructuras_de_control_secuencia.mp4', captationsUri:"001_que_es_un_algoritmo_estructuras_de_control_secuencia.vtt", notes : []},
            {id:'vid-002', type:menuOptionEntryTypes.video, title:'Representación de algoritmos', uri:'002_representacion_de_algoritmos.mp4', captationsUri:"002_representacion_de_algoritmos.vtt", notes : []},
            {id:'vid-003', type:menuOptionEntryTypes.video, title:'Precisión y supuestos', uri:'003_precision_y_supuestos.mp4', captationsUri:"003_precision_y_supuestos.vtt", notes : []},
            {id:'vid-004', type:menuOptionEntryTypes.video, title:'¿Qué es Scratch? Ejemplos de programas', uri:'004_que_es_scratch_ejemplos_de_programas_tarjeta_de_cumplea_os_flappy_bird.mp4', captationsUri:"004_que_es_scratch_ejemplos_de_programas_tarjeta_de_cumplea_os_flappy_bird.vtt", notes : []},
            {id:'vid-005', type:menuOptionEntryTypes.video, title:'Opciones para trabajar en Scratch', uri:'005_opciones_para_trabajar_en_scratch.mp4', captationsUri:"005_opciones_para_trabajar_en_scratch.vtt", notes : []},
            {id:'res-001', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 1', uri:'../resources/unidad-01.html'},
            {id:'vid-006', type:menuOptionEntryTypes.video, title:'Principales componentes de Scratch. Guardar y descargar', uri:'006_principales_componentes_de_scratch_guardar_y_descargar.mp4', captationsUri:"006_principales_componentes_de_scratch_guardar_y_descargar.vtt", notes : []},
            {id:'vid-007', type:menuOptionEntryTypes.video, title:'Decisión', uri:'007_decision.mp4', captationsUri:"007_decision.vtt", notes : []},
            {id:'vid-008', type:menuOptionEntryTypes.video, title:'Seudocódigo y diagrama de flujo. Decisión en Scratch', uri:'008_seudocodigo_y_diagrama_de_flujo_decision_en_scratch.mp4', captationsUri:"008_seudocodigo_y_diagrama_de_flujo_decision_en_scratch.vtt", notes : []},
            {id:'vid-009', type:menuOptionEntryTypes.video, title:'Reflexiones sobre las condiciones', uri:'009_reflexiones_sobre_las_condiciones.mp4', captationsUri:"009_reflexiones_sobre_las_condiciones.vtt", notes : []},
            {id:'vid-010', type:menuOptionEntryTypes.video, title:'Iteracion. Iteracion en Scratch', uri:'010_iteracion_iteracion_en_scratch.mp4', captationsUri:"010_iteracion_iteracion_en_scratch.vtt", notes : []},
            {id:'vid-011', type:menuOptionEntryTypes.video, title:'¡Fiesta con globos! Cambio de apariencia. Desarrollo incremental. Prueba simple. ', uri:'011_fiesta_con_globos_cambio_de_apariencia_desarrollo_incremental_prueba_simple.mp4', captationsUri:"011_fiesta_con_globos_cambio_de_apariencia_desarrollo_incremental_prueba_simple.vtt", notes : []},
            {id:'vid-012', type:menuOptionEntryTypes.video, title:'¡Baile!: modificación de programas', uri:'012_baile_modificacion_de_programas.mp4', captationsUri:"012_baile_modificacion_de_programas.vtt", notes : []},
            {id:'vid-013', type:menuOptionEntryTypes.video, title:'Día nublado... ¡no! Coordenadas en Scratch', uri:'013_dia_nublado_no_coordenadas_en_scratch.mp4', captationsUri:"013_dia_nublado_no_coordenadas_en_scratch.vtt", notes : []},
            {id:'vid-014', type:menuOptionEntryTypes.video, title:'¡Una película! Animación con 2 personajes', uri:'014_una_pelicula_de_animacion_con_2_personajes.mp4', captationsUri:"014_una_pelicula_de_animacion_con_2_personajes.vtt", notes : []},
            {id:'vid-015', type:menuOptionEntryTypes.video, title:'¡Algoritmos en la producción de Audiovisuales!', uri:'015_algoritmos_en_la_produccion_de_audiovisuales.mp4', captationsUri:"015_algoritmos_en_la_produccion_de_audiovisuales.vtt", notes : []},
            {id:'vid-016', type:menuOptionEntryTypes.video, title:'Decisiones en un laboratorio de investigación', uri:'016_decisiones_en_un_laboratorio_de_investigacion.mp4', captationsUri:"016_decisiones_en_un_laboratorio_de_investigacion.vtt", notes : []}
        ]
    },
    unidad2:{
        id:'path-unidad-2',
        title:'Unidad 2: ¡Repetir, repetir, repetir!',
        summary:'Aquí continuaremos trabajando con las estructuras de control, descubrirás cómo usar eventos en los programas y cómo incorporar efectos visuales y de sonido en Scratch. Además, comenzaremos a pensar sobre los requerimientos y el diseño de nuestros programas.',
        path:'unidad-3',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-017', type:menuOptionEntryTypes.video, title:'Iteración: introducción', uri:'001_introduccion.mp4', captationsUri:"001_introducción.vtt", notes : []},
            {id:'res-002', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 2', uri:'../resources/unidad-02.html'},
            {id:'vid-018', type:menuOptionEntryTypes.video, title:'Iteración controlada por cantidad', uri:'002_iteracion_controlada_por_cantidad.mp4', captationsUri:"002_iteracion_controlada_por_cantidad.vtt", notes : []},
            {id:'vid-019', type:menuOptionEntryTypes.video, title:'Iteración controlada por condición', uri:'003_iteracion_controlada_por_condicion.mp4', captationsUri:"003_iteracion_controlada_por_condicion.vtt", notes : []},
            {id:'vid-020', type:menuOptionEntryTypes.video, title:'Video musical', uri:'004_video_musical.mp4', captationsUri:"004_video_musical.vtt", notes : []},
            {id:'vid-021', type:menuOptionEntryTypes.video, title:'Video musical con karaoke', uri:'005_video_musical_con_karaoke.mp4', captationsUri:"005_video_musical_con_karaoke.vtt", notes : []},
            {id:'vid-022', type:menuOptionEntryTypes.video, title:'Dibujando cuadrados. Uso del lápiz', uri:'006_dibujando_cuadrados_uso_del_lapiz.mp4', captationsUri:"006_dibujando_cuadrados_uso_del_lapiz.vtt", notes : []},
            {id:'vid-023', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Interacción con el usuario', uri:'007_nuestra_tarjeta_de_cumplea_os_interaccion_con_el_usuario.mp4', captationsUri:"007_nuestra_tarjeta_de_cumplea_os_interaccion_con_el_usuario.vtt", notes : []},
            {id:'vid-024', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Soplar las velitas', uri:'008_nuestra_tarjeta_de_cumplea_os_soplar_las_velitas.mp4', captationsUri:"008_nuestra_tarjeta_de_cumplea_os_soplar_las_velitas.vtt", notes : []},
            {id:'vid-025', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Decisión (si, sino)', uri:'009_nuestra_tarjeta_de_cumplea_os_decision_si_sino.mp4', captationsUri:"009_nuestra_tarjeta_de_cumplea_os_decision_si_sino.vtt", notes : []},
            {id:'vid-026', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Grabación de sonidos', uri:'010_nuestra_tarjeta_de_cumplea_os_grabacion_de_sonidos.mp4', captationsUri:"010_nuestra_tarjeta_de_cumplea_os_grabacion_de_sonidos.vtt", notes : []},
            {id:'vid-027', type:menuOptionEntryTypes.video, title:'¡Juego de caritas! Eventos. Editor de imágenes. Cámara (sensores)', uri:'011_juego_de_caritas_eventos_editor_de_imagenes_camara_sensores.mp4', captationsUri:"011_juego_de_caritas_eventos_editor_de_imagenes_camara_sensores.vtt", notes : []},
            {id:'vid-028', type:menuOptionEntryTypes.video, title:'Diseño de software', uri:'012_dise_o_de_software.mp4', captationsUri:"012_dise_o_de_software.vtt", notes : []},
            {id:'vid-029', type:menuOptionEntryTypes.video, title:'¡Cortando frutas! (Fruit ninja). Diseño e implementación', uri:'013_cortando_frutas_fruit_ninja_diseño_e_implementacion.mp4', captationsUri:"013_cortando_frutas_fruit_ninja_diseño_e_implementacion.vtt", notes : []},
            {id:'vid-030', type:menuOptionEntryTypes.video, title:'Requerimientos. Juego del Helicóptero', uri:'014_requerimientos_juego_del_helicoptero.mp4', captationsUri:"014_requerimientos_juego_del_helicoptero.vtt", notes : []},
            {id:'vid-031', type:menuOptionEntryTypes.video, title:'Juego del Helicóptero: diseño. Abstracción', uri:'015_juego_del_helicoptero_dise_o_abstraccion.mp4', captationsUri:"015_juego_del_helicoptero_dise_o_abstraccion.vtt", notes : []},
            {id:'vid-032', type:menuOptionEntryTypes.video, title:'Juego del Helicóptero: implementación', uri:'016_juego_del_helicoptero_implementacion.mp4', captationsUri:"016_juego_del_helicoptero_implementacion.vtt", notes : []},
            {id:'vid-033', type:menuOptionEntryTypes.video, title:'Requerimientos y descomposición de problemas', uri:'017_requerimientos_y_descomposicion_de_problemas.mp4', captationsUri:"017_requerimientos_y_descomposicion_de_problemas.vtt", notes : []},
            {id:'vid-034', type:menuOptionEntryTypes.video, title:'Requerimientos, Prototipos y Abstracción en Arquitectura', uri:'018_requerimientos_prototipos_y_abstraccion_en_arquitectura.mp4', captationsUri:"018_requerimientos_prototipos_y_abstraccion_en_arquitectura.vtt", notes : []}
        ]
    },
    unidad3:{
        id:'path-unidad-3',
        title:'Unidad 3: Reinventar juegos',
        summary:'A partir de juegos ya existentes, crearemos nuevas versiones. Conoceremos prácticas de la ingeniería de software para probar y documentar nuestros programas.',
        path:'unidad-3',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-035', type:menuOptionEntryTypes.video, title:'Reinventar juegos: introducción', uri:'001_introduccion.mp4', captationsUri:"001_introduccion.vtt", notes : []},
            {id:'res-003', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 3', uri:'../resources/unidad-03.html'},
            {id:'vid-036', type:menuOptionEntryTypes.video, title:'Extensión del Helicóptero. Variable', uri:'002_extension_del_helicoptero_variable.mp4', captationsUri:"002_extension_del_helicoptero_variable.vtt", notes : []},
            {id:'vid-035', type:menuOptionEntryTypes.video, title:'Conociendo el Pong. Documentación', uri:'003_conociendo_el_pong_documentacion.mp4', captationsUri:"003_conociendo_el_pong_documentacion.vtt", notes : []},
            {id:'vid-037', type:menuOptionEntryTypes.video, title:'Modificando el Pong. Condiciones complejas', uri:'004_modificando_el_pong_condiciones_complejas.mp4', captationsUri:"004_modificando_el_pong_condiciones_complejas.vtt", notes : []},
            {id:'vid-038', type:menuOptionEntryTypes.video, title:'Más modificaciones al Pong. Pizza Pong. Prueba', uri:'005_mas_modificaciones_al_pong_pizza_pong_prueba.mp4', captationsUri:"005_mas_modificaciones_al_pong_pizza_pong_prueba.vtt", notes : []},
            {id:'vid-039', type:menuOptionEntryTypes.video, title:'Tirar penales - Remix', uri:'006_tirar_penales_remix.mp4', captationsUri:"006_tirar_penales_remix.vtt", notes : []},
            {id:'vid-040', type:menuOptionEntryTypes.video, title:'¡Adivina el número! Interacción con el usuario', uri:'007_adivina_el_numero_interaccion_con_el_usuario.mp4', captationsUri:"007_adivina_el_numero_interaccion_con_el_usuario.vtt", notes : []},
            {id:'vid-041', type:menuOptionEntryTypes.video, title:'Jardín con flores. Iteraciones anidadas', uri:'008_jardin_con_flores_iteraciones_anidadas.mp4', captationsUri:"008_jardin_con_flores_iteraciones_anidadas.vtt", notes : []},
            {id:'vid-042', type:menuOptionEntryTypes.video, title:'¡Remix en el laboratorio de Biotecnología!', uri:'009_remix_en_el_laboratorio_de_biotecnologia.mp4', captationsUri:"009_remix_en_el_laboratorio_de_biotecnologia.vtt", notes : []},
            {id:'vid-043', type:menuOptionEntryTypes.video, title:'Robots que juegan al fútbol', uri:'010_robots_que_juegan_al_futbol.mp4', captationsUri:"010_robots_que_juegan_al_futbol.vtt", notes : []}
        ]
    },
    unidad4:{
        id:'path-unidad-4',
        title:'Unidad 4: Reutilizando tu código',
        summary:'En esta unidad presentaremos el concepto de procedimiento. También veremos clonación en Scratch. Aplicaremos estas ideas para reutilizar nuestros programas.',
        path:'unidad-4',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-044', type:menuOptionEntryTypes.video, title:'Reutilizando código: introducción', uri:'001_introduccion.mp4', captationsUri:"001_introduccion.vtt", notes : []},
            {id:'res-004', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 4', uri:'../resources/unidad-04.html'},
            {id:'vid-045', type:menuOptionEntryTypes.video, title:'¡Atrapar al ratón! Procedimientos', uri:'002_atrapar_al_raton_procedimientos.mp4', captationsUri:"002_atrapar_al_raton_procedimientos.vtt", notes : []},
            {id:'vid-046', type:menuOptionEntryTypes.video, title:'¡Cuadrados, cuadrados, cuadrados! Generalización. Parámetros', uri:'003_cuadrados_cuadrados_cuadrados_generalizacion_parametros.mp4', captationsUri:"003_cuadrados_cuadrados_cuadrados_generalizacion_parametros.vtt", notes : []},
            {id:'vid-047', type:menuOptionEntryTypes.video, title:'Escalera', uri:'004_escalera.mp4', captationsUri:"004_escalera.vtt", notes : []},
            {id:'vid-048', type:menuOptionEntryTypes.video, title:'¡Cazar Fantasmas! Clones', uri:'005_cazar_fantasmas_clones.mp4', captationsUri:"005_cazar_fantasmas_clones.vtt", notes : []},
            {id:'vid-049', type:menuOptionEntryTypes.video, title:'Fuegos artificiales', uri:'006_fuegos_artificiales.mp4', captationsUri:"006_fuegos_artificiales.vtt", notes : []},
            {id:'vid-050', type:menuOptionEntryTypes.video, title:'¡Romper burbujas! Modularidad', uri:'007_romper_burbujas_modularidad.mp4', captationsUri:"007_romper_burbujas_modularidad.vtt", notes : []},
            {id:'vid-051', type:menuOptionEntryTypes.video, title:'¡La Ola!', uri:'008_la_ola.mp4', captationsUri:"008_la_ola.vtt", notes : []},
            {id:'vid-052', type:menuOptionEntryTypes.video, title:'Cómo nuestros programas pueden cambiar la forma de hacer las cosas', uri:'009_como_nuestros_programas_pueden_cambiar_la_forma_de_hacer_las_cosas.mp4', captationsUri:"009_como_nuestros_programas_pueden_cambiar_la_forma_de_hacer_las_cosas.vtt", notes : []},
            {id:'vid-053', type:menuOptionEntryTypes.video, title:'Entrevista a Joyera', uri:'010_entrevista_a_joyera.mp4', captationsUri:"010_entrevista_a_joyera.vtt", notes : []}
        ]
    },
    unidad5:{
        id:'path-unidad-5',
        title:'Unidad 5: Pensando como ingeniero/a de software',
        summary:'Aplicaremos todos los pasos de la ingeniería de software para crear un divertido video juego. También aprenderemos sobre envío de mensajes (“broadcasting”) y concurrencia.',
        path:'unidad-5',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-054', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Proceso y enfoques de la ingeniería de Software. Requerimientos y diseño de Interfaz', uri:'001_juego_del_zombie_proceso_y_enfoques_de_la_ing_de_software_requerimientos_y_dise_o_de_interfaz.mp4', captationsUri:"001_juego_del_zombie_proceso_y_enfoques_de_la_ing_de_software_requerimientos_y_dise_o_de_interfaz.vtt", notes : []},
            {id:'res-005', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 5', uri:'../resources/unidad-05.html'},
            {id:'vid-055', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Diseño del código. Concurrencia', uri:'002_juego_del_zombie_dise_o_del_codigo_concurrencia.mp4', captationsUri:"002_juego_del_zombie_dise_o_del_codigo_concurrencia.vtt", notes : []},
            {id:'vid-056', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: interfaz, escoba y zombie', uri:'003_juego_del_zombie_implementacion_interfaz_escoba_y_zombie.mp4', captationsUri:"003_juego_del_zombie_implementacion_interfaz_escoba_y_zombie.vtt", notes : []},
            {id:'vid-057', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: clon del zombie. Envío de mensajes: "broadcasting"', uri:'004_juego_del_zombie_implementacion_clon_del_zombie_envio_de_mensajes_broadcasting.mp4', captationsUri:"004_juego_del_zombie_implementacion_clon_del_zombie_envio_de_mensajes_broadcasting.vtt", notes : []},
            {id:'vid-058', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: fondo y flor. Complejidad Computacional', uri:'005_juego_del_zombie_implementacion_fondo_y_flor_complejidad_computacional.mp4', captationsUri:"005_juego_del_zombie_implementacion_fondo_y_flor_complejidad_computacional.vtt", notes : []},
            {id:'vid-059', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Invasión zombie y extensiones', uri:'006_juego_del_zombie_invasion_zombie_y_extensiones.mp4', captationsUri:"006_juego_del_zombie_invasion_zombie_y_extensiones.vtt", notes : []},
            {id:'vid-060', type:menuOptionEntryTypes.video, title:'Publicación en el sitio de Scratch. Resumen', uri:'007_compartir_publicacion_en_el_sitio_de_scratch_resumen.mp4', captationsUri:"007_compartir_publicacion_en_el_sitio_de_scratch_resumen.vtt", notes : []},
            {id:'vid-061', type:menuOptionEntryTypes.video, title:'Scratch y otro lenguaje de programación: Python', uri:'008_scratch_y_otro_lenguaje_de_programacion_python.mp4', captationsUri:"008_scratch_y_otro_lenguaje_de_programacion_python.vtt", notes : []},
            {id:'vid-062', type:menuOptionEntryTypes.video, title:'¿Cómo crear un video juego exitoso?', uri:'009_como_crear_un_video_juego_exitoso.mp4', captationsUri:"009_como_crear_un_video_juego_exitoso.vtt", notes : []},
            {id:'vid-063', type:menuOptionEntryTypes.video, title:'Entrevista a estudiante de Computación', uri:'010_entrevista_a_estudiante_de_computacion.mp4', captationsUri:"010_entrevista_a_estudiante_de_computacion.vtt", notes : []},
        ]
    },
    about:{
        id:'about-1',
        title:'Acerca de',
        summary:'',
        path:'',
        type:menuOptionEntryTypes.linkContainer,
        items:[
            {id:'copyright-01', type:menuOptionEntryTypes.internalPage, title:'Patrocinio y Copyright', uri:'sponsor_and_copyright.html'},
            {id:'copyright-02', type:menuOptionEntryTypes.internalPage, title:'El Equipo de ¡A programar!', uri:'code_yourself_team.html'},
            {id:'copyright-03', type:menuOptionEntryTypes.internalPage, title:'Normas Comunitarias de Scratch', uri:'comunity_rules.html'},
        ]
    },
    externalSites:{
        id:'web-sites-1',
        title:'Sitios de interés',
        summary:'Nota: necesitas una conexión a internet para visitar estos sitios web.',
        path:'',
        type:menuOptionEntryTypes.linkContainer,
        items:[
            {id:'ext-01', type:menuOptionEntryTypes.externalLink, title:'¡Me quiero certificar!', uri:'https://es.coursera.org/learn/a-programar'},
            {id:'ext-02', type:menuOptionEntryTypes.externalLink, title:'Web oficial de Scratch', uri:'https://scratch.mit.edu'},
            {id:'ext-03', type:menuOptionEntryTypes.externalLink, title:'Actualizar mi Scratch', uri:'https://scratch.mit.edu/download'},
        ]
    }
};

Object.values(MENU).forEach(entry => {
       
    const parentPath = entry.path ? "/" + entry.path : entry.path;
    const parentId = entry.id;
    entry.items.forEach(item => {
        item["parent_id"] = parentId
        const itemParcialPath =  parentPath + "/" + item.uri;
        if(item.type == menuOptionEntryTypes.video) 
        {
            item.uri = MAIN_SCRIPT_PATH + "/" + videoBasePath + itemParcialPath;
            item.captationsUri = MAIN_SCRIPT_PATH + "/" + videoBasePath + parentPath + "/" + item.captationsUri;
        }

        if(item.type == menuOptionEntryTypes.internalPage)
        {
            item.uri = MAIN_SCRIPT_PATH + "/" + internalPagesPath + itemParcialPath;
        }
    });
    
});

Object.freeze(MENU);