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
            {
                id:'vid-0', type:menuOptionEntryTypes.video, 
                title:'Presentación', 
                uri:'presentacion.mp4', 
                captationsUri:"presentacion.vtt", 
                captationsContent:"data:text/vtt;charset=utf-8,WEBVTT%0A%0A1%0A00%3A00%3A04.175%20--%3E%2000%3A00%3A06.380%0AHola.%0ABienvenidos%20al%20curso%20%C2%A1A%20Programar%21%2C%0A%0A2%0A00%3A00%3A06.380%20--%3E%2000%3A00%3A08.350%0Auna%20introducci%C3%B3n%20a%20la%20programaci%C3%B3n.%0A%0A3%0A00%3A00%3A08.350%20--%3E%2000%3A00%3A11.833%0AMi%20nombre%20es%20In%C3%A9s%20Kereki%20de%0Ala%20Universidad%20ORT%20Uruguay.%0A%0A4%0A00%3A00%3A11.833%20--%3E%2000%3A00%3A15.475%0A%3E%3E%20Y%20el%20m%C3%ADo%20es%20Areti%20Manataki%0Ade%20la%20Universidad%20de%20Edimburgo.%0A%0A5%0A00%3A00%3A15.475%20--%3E%2000%3A00%3A19.465%0A%3E%3E%20Estamos%20muy%20contentas%20de%20que%20te%20hayas%0Asumado%20a%20este%20desaf%C3%ADo%20de%20programar%0A%0A6%0A00%3A00%3A19.465%20--%3E%2000%3A00%3A20.397%0Acomputadoras.%0A%0A7%0A00%3A00%3A20.397%20--%3E%2000%3A00%3A24.660%0A%3E%3E%20La%20programaci%C3%B3n%20est%C3%A1%20en%20todas%20partes%2C%0Adesde%20las%20m%C3%A1quinas%20de%20caf%C3%A9%20y%20los%0A%0A8%0A00%3A00%3A24.660%20--%3E%2000%3A00%3A29.506%0Areproductores%20de%20mp3%20hasta%20en%20las%20naves%0Aespaciales%20y%20en%20los%20robots%20m%C3%A9dicos.%0A%0A9%0A00%3A00%3A29.506%20--%3E%2000%3A00%3A33.650%0APero%2C%20al%20igual%20que%20la%20astronom%C3%ADa%0Aes%20m%C3%A1s%20que%20solamente%20usar%20telescopios%2C%0A%0A10%0A00%3A00%3A33.650%20--%3E%2000%3A00%3A37.590%0Ala%20ciencia%20de%20la%20computaci%C3%B3n%20es%20m%C3%A1s%0Aque%20s%C3%B3lo%20usar%20las%20computadoras.%0A%0A11%0A00%3A00%3A37.590%20--%3E%2000%3A00%3A40.456%0ASe%20trata%20de%20decirle%20a%20las%0Acomputadoras%20qu%C3%A9%20hacer.%0A%0A12%0A00%3A00%3A40.456%20--%3E%2000%3A00%3A44.826%0A%3E%3E%20Este%20curso%20te%20ense%C3%B1ar%C3%A1%20a%20programar%20y%0Ate%20ayudar%C3%A1%20a%20desarrollar%20todas%20aquellas%0A%0A13%0A00%3A00%3A44.826%20--%3E%2000%3A00%3A48.982%0Ahabilidades%20que%20son%20fundamentales%0Apara%20la%20programaci%C3%B3n%20de%20computadoras%2C%0A%0A14%0A00%3A00%3A48.982%20--%3E%2000%3A00%3A51.480%0Alo%20que%20llamamos%20pensamiento%20computacional.%0A%0A15%0A00%3A00%3A51.480%20--%3E%2000%3A00%3A53.998%0AAprender%C3%A1s%20a%20programar%20en%20Scratch%2C%0A%0A16%0A00%3A00%3A53.998%20--%3E%2000%3A00%3A58.310%0Aun%20sencillo%20lenguaje%20visual%20que%0Aes%20ideal%20para%20principiantes.%0A%0A17%0A00%3A00%3A58.310%20--%3E%2000%3A01%3A03.020%0ADesde%20el%20primer%20d%C3%ADa%20de%20este%20curso%20estar%C3%A1s%0Acreando%20programas%20como%20animaciones%2C%0A%0A18%0A00%3A01%3A03.020%20--%3E%2000%3A01%3A05.140%0Ajuegos%20e%20historias%20interactivas.%0A%0A19%0A00%3A01%3A05.140%20--%3E%2000%3A01%3A08.172%0ADescubrir%C3%A1s%20por%20t%C3%AD%20mismo%0Aque%20la%20programaci%C3%B3n%20es%0A%0A20%0A00%3A01%3A08.172%20--%3E%2000%3A01%3A10.610%0Auna%20actividad%20creativa%20y%20divertida.%0A%0A21%0A00%3A01%3A10.610%20--%3E%2000%3A01%3A12.197%0A%C2%BFC%C3%B3mo%20funciona%20el%20curso%3F%0A%0A22%0A00%3A01%3A12.197%20--%3E%2000%3A01%3A16.760%0ATiene%20una%20duraci%C3%B3n%20de%20cinco%20semanas%0Adurante%20las%20cuales%20estaremos%20presentando%0A%0A23%0A00%3A01%3A16.760%20--%3E%2000%3A01%3A19.831%0Alos%20principios%20fundamentales%20de%0Ala%20ciencia%20de%20la%20computaci%C3%B3n%0A%0A24%0A00%3A01%3A19.831%20--%3E%2000%3A01%3A22.910%0Ay%20su%20puesta%20en%20pr%C3%A1ctica%20al%20crear%0Anuestros%20propios%20programas.%0A%0A25%0A00%3A01%3A22.910%20--%3E%2000%3A01%3A27.790%0AEn%20cada%20semana%20habr%C3%A1%20varios%20videos%0Acortos%20con%20el%20apoyo%20de%20texto%20y%20ejemplos%0A%0A26%0A00%3A01%3A27.790%20--%3E%2000%3A01%3A28.590%0Ade%20c%C3%B3digo.%0A%0A27%0A00%3A01%3A28.590%20--%3E%2000%3A01%3A33.024%0AEste%20curso%20es%20%C3%BAnico%20en%20el%20sentido%20en%20que%0Aestar%C3%A1%20disponible%20simult%C3%A1neamente%20en%0A%0A28%0A00%3A01%3A33.024%20--%3E%2000%3A01%3A34.455%0Aespa%C3%B1ol%20y%20en%20ingl%C3%A9s.%0A%0A29%0A00%3A01%3A34.455%20--%3E%2000%3A01%3A37.318%0AYo%20estar%C3%A9%20a%20cargo%20de%0Ala%20versi%C3%B3n%20en%20espa%C3%B1ol.%0A%0A30%0A00%3A01%3A37.318%20--%3E%2000%3A01%3A38.520%0A%3E%3E%20Y%20yo%20la%20de%20ingl%C3%A9s.%0A%0A31%0A00%3A01%3A38.520%20--%3E%2000%3A01%3A42.460%0A%3E%3E%20Si%20tienes%20inter%C3%A9s%20en%0Aver%20la%20otra%20edici%C3%B3n%2C%0A%0A32%0A00%3A01%3A42.460%20--%3E%2000%3A01%3A45.120%0Ate%20invitamos%20a%20visitar%20el%20sitio%20web%20del%0Acurso%20en%20ingl%C3%A9s%20y%20participar%20en%20su%20foro.",
                notes:["nota de prueba","nota de prueba","nota de prueba"]
            },
        ]
    },
    unidad1:{
        id:'path-unidad-1',
        title:'Unidad 1: Tu primer programa',
        summary:'En esta unidad crearás tu primer programa. Veremos los conceptos básicos de Programación y conocerás los principales elementos de Scratch.',
        path:'unidad-1',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {
                id:'vid-001', 
                type:menuOptionEntryTypes.video, 
                title:'¿Qué es un algoritmo? Estructuras de control. Secuencia', 
                uri:'001_que_es_un_algoritmo_estructuras_de_control_secuencia/leccion.mp4', 
                captationsUri:"001_que_es_un_algoritmo_estructuras_de_control_secuencia/leccion.vtt",
                captationsContent:"data:text/vtt;charset=utf-8,WEBVTT%0A%0A1%0A00%3A00%3A04.000%20--%3E%2000%3A00%3A07.580%0AEn%20esta%20unidad%20aprender%C3%A1s%20c%C3%B3mo%0Acrear%20tu%20primer%20programa.%0A%0A2%0A00%3A00%3A07.580%20--%3E%2000%3A00%3A10.590%0A%C2%BFPronto%20para%20comenzar%3F%20%C2%A1Arrancamos%21.%0A%0A3%0A00%3A00%3A10.590%20--%3E%2000%3A00%3A15.090%0A%C2%BFAlguna%20vez%20le%20diste%20instrucciones%20a%0Auna%20persona%20para%20ir%20de%20un%20lugar%20a%20otro%3F%0A%0A4%0A00%3A00%3A16.090%20--%3E%2000%3A00%3A17.818%0A%C2%BFO%20le%20ense%C3%B1aste%20a%20un%20amigo%0Aa%20realizar%20alguna%20tarea%2C%0A%0A5%0A00%3A00%3A18.818%20--%3E%2000%3A00%3A20.680%0Acomo%2C%20por%20ejemplo%2C%20atarse%20los%20cordones%3F%0A%0A6%0A00%3A00%3A21.000%20--%3E%2000%3A00%3A24.404%0A%C2%BFO%20seguiste%20una%20receta%20de%0Acocina%20para%20elaborar%20una%20torta%2C%0A%0A7%0A00%3A00%3A24.404%20--%3E%2000%3A00%3A26.500%0Agalletitas%20u%20otra%20preparaci%C3%B3n%3F%0A%0A8%0A00%3A00%3A27.500%20--%3E%2000%3A00%3A29.704%0ASi%20tu%20respuesta%20a%20alguna%0Ade%20estas%20preguntas%20es%20s%C3%AD%2C%0A%0A9%0A00%3A00%3A30.704%20--%3E%2000%3A00%3A33.540%0Aentonces%20ya%20conoces%20algo%20de%20programaci%C3%B3n.%0A%0A10%0A00%3A00%3A34.540%20--%3E%2000%3A00%3A38.442%0AVamos%20a%20empezar%20analizando%0Aejemplos%20de%20la%20vida%20real%20que%0A%0A11%0A00%3A00%3A37.442%20--%3E%2000%3A00%3A40.840%0Anos%20permitir%C3%A1n%20mostrarte%20conceptos%0Afundamentales%20de%20programaci%C3%B3n.%0A%0A12%0A00%3A00%3A42.500%20--%3E%2000%3A00%3A46.206%0ASupongamos%20que%20queremos%20ense%C3%B1arle%20a%20una%0Apersona%20como%20preparar%20un%20s%C3%A1ndwich%20con%20pan%2C%0A%0A13%0A00%3A00%3A46.206%20--%3E%2000%3A00%3A47.170%0Ajam%C3%B3n%20y%20queso.%0A%0A14%0A00%3A00%3A49.170%20--%3E%2000%3A00%3A53.580%0ALos%20pasos%20los%20podemos%20describir%20como%3A%0Atomar%20dos%20tajadas%20de%20pan%2C%0A%0A15%0A00%3A00%3A54.580%20--%3E%2000%3A00%3A59.065%0Acolocar%20una%20feta%20de%20jam%C3%B3n%20sobre%0Auna%20tajada%2C%20colocar%20una%20feta%20de%0A%0A16%0A00%3A00%3A59.065%20--%3E%2000%3A01%3A03.334%0Aqueso%20sobre%20el%20jam%C3%B3n%2C%20colocar%20la%0Asegunda%20tajada%20de%20pan%20sobre%20el%20queso.%0A%0A17%0A00%3A01%3A03.334%20--%3E%2000%3A01%3A08.261%0AY%20%C2%A1pronto%21.%20Si%20quisi%C3%A9ramos%20escribir%0Alos%20pasos%20en%20espa%C3%B1ol%20podr%C3%ADa%20ser%0A%0A18%0A00%3A01%3A08.261%20--%3E%2000%3A01%3A14.484%0Asimilar%20a%20esto.%20Puedes%20observar%0Aque%20el%20proceso%20lo%20describimos%20como%0A%0A19%0A00%3A01%3A14.484%20--%3E%2000%3A01%3A19.369%0Auna%20secuencia%20de%20pasos%20que%20se%0Asiguen%20en%20orden%20uno%20detr%C3%A1s%20de%20otro.%0A%0A20%0A00%3A01%3A19.369%20--%3E%2000%3A01%3A21.070%0AVeamos%20otro%20ejemplo.%0A%0A21%0A00%3A01%3A21.070%20--%3E%2000%3A01%3A25.290%0AQueremos%20detallar%20el%20proceso%20de%20cambiar%0Auna%20bombita%20de%20luz%20que%20est%C3%A1%20quemada.%0A%0A22%0A00%3A01%3A27.290%20--%3E%2000%3A01%3A29.830%0APodemos%20hacerlo%20en%20forma%0Asegura%20de%20esta%20manera.%0A%0A23%0A00%3A01%3A30.830%20--%3E%2000%3A01%3A33.090%0ASi%20me%20falta%20repuesto%20de%20bombita%2C%0Acomprar%20un%20repuesto.%0A%0A24%0A00%3A01%3A35.090%20--%3E%2000%3A01%3A39.146%0AApagar%20la%20llave%20de%20la%20luz%2C%20repetir%0Agirar%20la%20bombita%20quemada%20en%20sentido%20anti%0A%0A25%0A00%3A01%3A39.146%20--%3E%2000%3A01%3A44.638%0Ahorario%20hasta%20sacarla%20del%20porta%20l%C3%A1mparas%2C%0Atirar%20a%20la%20basura%20la%20bombita%20quemada%2C%0A%0A26%0A00%3A01%3A44.638%20--%3E%2000%3A01%3A48.110%0Acolocar%20la%20bombita%20nueva%20en%20el%0Aporta%20l%C3%A1mparas%2C%20repetir%20girar%20en%0A%0A27%0A00%3A01%3A48.110%20--%3E%2000%3A01%3A53.464%0Asentido%20contrario%20hasta%20que%20quede%20apretada%0Ay%20prender%20la%20llave%20de%20luz.%0A%0A28%0A00%3A01%3A54.464%20--%3E%2000%3A01%3A57.040%0ASi%20el%20proceso%20lo%20queremos%20escribir%0Apodr%C3%ADa%20lucir%20similar%20%0A%0A29%0A00%3A01%3A57.040%20--%3E%2000%3A01%3A59.910%0Aa%20%C3%A9ste.%0A%0A30%0A00%3A01%3A59.910%20--%3E%2000%3A02%3A04.568%0AAqu%C3%AD%20tenemos%20una%20secuencia%20de%20pasos%0Aen%20orden%20y%20tambi%C3%A9n%20utilizamos%20una%20decisi%C3%B3n%2C%0A%0A31%0A00%3A02%3A05.568%20--%3E%2000%3A02%3A07.180%0A%22si%20me%20falta%20repuesto%22.%0A%0A32%0A00%3A02%3A07.180%20--%3E%2000%3A02%3A09.510%0AY%20repeticiones%20o%20iteraciones%2C%20%22repetir%20hasta%22.%0A%0A33%0A00%3A02%3A11.510%20--%3E%2000%3A02%3A15.102%0ALa%20secuencia%2C%0Ala%20decisi%C3%B3n%20y%20la%20iteraci%C3%B3n%20son%20lo%20que%0A%0A34%0A00%3A02%3A15.102%20--%3E%2000%3A02%3A19.650%0Allamamos%20estructuras%20de%20control%20y%20con%0Aellas%20construimos%20los%20programas.%0A%0A35%0A00%3A02%3A20.650%20--%3E%2000%3A02%3A23.930%0ADescribimos%20el%20proceso%20de%0Apreparar%20un%20s%C3%A1ndwich%20o%0A%0A36%0A00%3A02%3A23.930%20--%3E%2000%3A02%3A26.130%0Acambiar%20la%20bombita%20como%0Aun%20proceso%20paso%20a%20paso.%0A%0A37%0A00%3A02%3A27.130%20--%3E%2000%3A02%3A32.380%0AEsta%20secuencia%20ordenada%20de%0Apasos%20se%20llama%20algoritmo.%0A%0A38%0A00%3A02%3A33.380%20--%3E%2000%3A02%3A37.883%0ALos%20algoritmos%20describen%20el%20proceso%0Apara%20llevar%20adelante%20una%20tarea%20o%0A%0A39%0A00%3A02%3A37.883%20--%3E%2000%3A02%3A41.920%0Aresolver%20un%20problema%20en%0Auna%20forma%20paso%20a%20paso.%0A%0A40%0A00%3A02%3A42.920%20--%3E%2000%3A02%3A45.970%0APueden%20incluir%20secuencias%2C%20decisiones%20e%0A%0A41%0A00%3A02%3A45.970%20--%3E%2000%3A02%3A49.420%0Aiteraciones%20como%20vimos%20en%0Alos%20dos%20ejemplos%20previos.",
                notes : []
            },
            {id:'vid-002', type:menuOptionEntryTypes.video, title:'Representación de algoritmos', uri:'002_representacion_de_algoritmos/leccion.mp4', captationsUri:"002_representacion_de_algoritmos/leccion.vtt", notes : []},
            {id:'vid-003', type:menuOptionEntryTypes.video, title:'Precisión y supuestos', uri:'003_precision_y_supuestos/leccion.mp4', captationsUri:"003_precision_y_supuestos/leccion.vtt", notes : []},
            {id:'vid-004', type:menuOptionEntryTypes.video, title:'¿Qué es Scratch? Ejemplos de programas', uri:'004_que_es_scratch_ejemplos_de_programas_tarjeta_de_cumplea_os_flappy_bird/leccion.mp4', captationsUri:"004_que_es_scratch_ejemplos_de_programas_tarjeta_de_cumplea_os_flappy_bird/leccion.vtt", notes : []},
            {id:'vid-005', type:menuOptionEntryTypes.video, title:'Opciones para trabajar en Scratch', uri:'005_opciones_para_trabajar_en_scratch/leccion.mp4', captationsUri:"005_opciones_para_trabajar_en_scratch/leccion.vtt", notes : ["En los recursos de la unidad, podrás encontrar las opciones de los instaladores de Scratch, para que puedas programar sin necesidad de acceder a internet."]},
            {id:'res-001', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 1', uri:'../resources/unidad-01.html'},
            {id:'vid-006', type:menuOptionEntryTypes.video, title:'Principales componentes de Scratch. Guardar y descargar', uri:'006_principales_componentes_de_scratch_guardar_y_descargar/leccion.mp4', captationsUri:"006_principales_componentes_de_scratch_guardar_y_descargar/leccion.vtt", notes : []},
            {id:'vid-007', type:menuOptionEntryTypes.video, title:'Decisión', uri:'007_decision/leccion.mp4', captationsUri:"007_decision/leccion.vtt", notes : []},
            {id:'vid-008', type:menuOptionEntryTypes.video, title:'Seudocódigo y diagrama de flujo. Decisión en Scratch', uri:'008_seudocodigo_y_diagrama_de_flujo_decision_en_scratch/leccion.mp4', captationsUri:"008_seudocodigo_y_diagrama_de_flujo_decision_en_scratch/leccion.vtt", notes : []},
            {id:'vid-009', type:menuOptionEntryTypes.video, title:'Reflexiones sobre las condiciones', uri:'009_reflexiones_sobre_las_condiciones/leccion.mp4', captationsUri:"009_reflexiones_sobre_las_condiciones/leccion.vtt", notes : []},
            {id:'vid-010', type:menuOptionEntryTypes.video, title:'Iteracion. Iteracion en Scratch', uri:'010_iteracion_iteracion_en_scratch/leccion.mp4', captationsUri:"010_iteracion_iteracion_en_scratch/leccion.vtt", notes : []},
            {id:'vid-011', type:menuOptionEntryTypes.video, title:'¡Fiesta con globos! Cambio de apariencia. Desarrollo incremental. Prueba simple. ', uri:'011_fiesta_con_globos_cambio_de_apariencia_desarrollo_incremental_prueba_simple/leccion.mp4', captationsUri:"011_fiesta_con_globos_cambio_de_apariencia_desarrollo_incremental_prueba_simple/leccion.vtt", notes : []},
            {id:'vid-012', type:menuOptionEntryTypes.video, title:'¡Baile!: modificación de programas', uri:'012_baile_modificacion_de_programas/leccion.mp4', captationsUri:"012_baile_modificacion_de_programas/leccion.vtt", notes : []},
            {id:'vid-013', type:menuOptionEntryTypes.video, title:'Día nublado... ¡no! Coordenadas en Scratch', uri:'013_dia_nublado_no_coordenadas_en_scratch/leccion.mp4', captationsUri:"013_dia_nublado_no_coordenadas_en_scratch/leccion.vtt", notes : []},
            {id:'vid-014', type:menuOptionEntryTypes.video, title:'¡Una película! Animación con 2 personajes', uri:'014_una_pelicula_de_animacion_con_2_personajes/leccion.mp4', captationsUri:"014_una_pelicula_de_animacion_con_2_personajes/leccion.vtt", notes : []},
            {id:'vid-015', type:menuOptionEntryTypes.video, title:'¡Algoritmos en la producción de Audiovisuales!', uri:'015_algoritmos_en_la_produccion_de_audiovisuales/leccion.mp4', captationsUri:"015_algoritmos_en_la_produccion_de_audiovisuales/leccion.vtt", notes : []},
            {id:'vid-016', type:menuOptionEntryTypes.video, title:'Decisiones en un laboratorio de investigación', uri:'016_decisiones_en_un_laboratorio_de_investigacion/leccion.mp4', captationsUri:"016_decisiones_en_un_laboratorio_de_investigacion/leccion.vtt", notes : []},
            {id:'exe-001', type:menuOptionEntryTypes.internalPage, title:'Ejercicios sugeridos de la unidad 1', uri:'../exercises/unidad-01.html'},
        ]
    },
    unidad2:{
        id:'path-unidad-2',
        title:'Unidad 2: ¡Repetir, repetir, repetir!',
        summary:'Aquí continuaremos trabajando con las estructuras de control, descubrirás cómo usar eventos en los programas y cómo incorporar efectos visuales y de sonido en Scratch. Además, comenzaremos a pensar sobre los requerimientos y el diseño de nuestros programas.',
        path:'unidad-2',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-017', type:menuOptionEntryTypes.video, title:'Iteración: introducción', uri:'001_introduccion/leccion.mp4', captationsUri:"001_introduccion/leccion.vtt", notes : []},
            {id:'res-002', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 2', uri:'../resources/unidad-02.html'},
            {id:'vid-018', type:menuOptionEntryTypes.video, title:'Iteración controlada por cantidad', uri:'002_iteracion_controlada_por_cantidad/leccion.mp4', captationsUri:"002_iteracion_controlada_por_cantidad/leccion.vtt", notes : []},
            {id:'vid-019', type:menuOptionEntryTypes.video, title:'Iteración controlada por condición', uri:'003_iteracion_controlada_por_condicion/leccion.mp4', captationsUri:"003_iteracion_controlada_por_condicion/leccion.vtt", notes : []},
            {id:'vid-020', type:menuOptionEntryTypes.video, title:'Video musical', uri:'004_video_musical/leccion.mp4', captationsUri:"004_video_musical/leccion.vtt", notes : []},
            {id:'vid-021', type:menuOptionEntryTypes.video, title:'Video musical con karaoke', uri:'005_video_musical_con_karaoke/leccion.mp4', captationsUri:"005_video_musical_con_karaoke/leccion.vtt", notes : []},
            {id:'vid-022', type:menuOptionEntryTypes.video, title:'Dibujando cuadrados. Uso del lápiz', uri:'006_dibujando_cuadrados_uso_del_lapiz/leccion.mp4', captationsUri:"006_dibujando_cuadrados_uso_del_lapiz/leccion.vtt", notes : []},
            {id:'vid-023', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Interacción con el usuario', uri:'007_nuestra_tarjeta_de_cumplea_os_interaccion_con_el_usuario/leccion.mp4', captationsUri:"007_nuestra_tarjeta_de_cumplea_os_interaccion_con_el_usuario/leccion.vtt", notes : []},
            {id:'vid-024', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Soplar las velitas', uri:'008_nuestra_tarjeta_de_cumplea_os_soplar_las_velitas/leccion.mp4', captationsUri:"008_nuestra_tarjeta_de_cumplea_os_soplar_las_velitas/leccion.vtt", notes : []},
            {id:'vid-025', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Decisión (si, sino)', uri:'009_nuestra_tarjeta_de_cumplea_os_decision_si_sino/leccion.mp4', captationsUri:"009_nuestra_tarjeta_de_cumplea_os_decision_si_sino/leccion.vtt", notes : []},
            {id:'vid-026', type:menuOptionEntryTypes.video, title:'Nuestra tarjeta de cumpleaños. Grabación de sonidos', uri:'010_nuestra_tarjeta_de_cumplea_os_grabacion_de_sonidos/leccion.mp4', captationsUri:"010_nuestra_tarjeta_de_cumplea_os_grabacion_de_sonidos/leccion.vtt", notes : []},
            {id:'vid-027', type:menuOptionEntryTypes.video, title:'¡Juego de caritas! Eventos. Editor de imágenes. Cámara (sensores)', uri:'011_juego_de_caritas_eventos_editor_de_imagenes_camara_sensores/leccion.mp4', captationsUri:"011_juego_de_caritas_eventos_editor_de_imagenes_camara_sensores/leccion.vtt", notes : []},
            {id:'vid-028', type:menuOptionEntryTypes.video, title:'Diseño de software', uri:'012_dise_o_de_software/leccion.mp4', captationsUri:"012_dise_o_de_software/leccion.vtt", notes : []},
            {id:'vid-029', type:menuOptionEntryTypes.video, title:'¡Cortando frutas! (Fruit ninja). Diseño e implementación', uri:'013_cortando_frutas_fruit_ninja_diseño_e_implementacion/leccion.mp4', captationsUri:"013_cortando_frutas_fruit_ninja_diseño_e_implementacion/leccion.vtt", notes : []},
            {id:'vid-030', type:menuOptionEntryTypes.video, title:'Requerimientos. Juego del Helicóptero', uri:'014_requerimientos_juego_del_helicoptero/leccion.mp4', captationsUri:"014_requerimientos_juego_del_helicoptero/leccion.vtt", notes : []},
            {id:'vid-031', type:menuOptionEntryTypes.video, title:'Juego del Helicóptero: diseño. Abstracción', uri:'015_juego_del_helicoptero_dise_o_abstraccion/leccion.mp4', captationsUri:"015_juego_del_helicoptero_dise_o_abstraccion/leccion.vtt", notes : []},
            {id:'vid-032', type:menuOptionEntryTypes.video, title:'Juego del Helicóptero: implementación', uri:'016_juego_del_helicoptero_implementacion/leccion.mp4', captationsUri:"016_juego_del_helicoptero_implementacion/leccion.vtt", notes : []},
            {id:'vid-033', type:menuOptionEntryTypes.video, title:'Requerimientos y descomposición de problemas', uri:'017_requerimientos_y_descomposicion_de_problemas/leccion.mp4', captationsUri:"017_requerimientos_y_descomposicion_de_problemas/leccion.vtt", notes : []},
            {id:'vid-034', type:menuOptionEntryTypes.video, title:'Requerimientos, Prototipos y Abstracción en Arquitectura', uri:'018_requerimientos_prototipos_y_abstraccion_en_arquitectura/leccion.mp4', captationsUri:"018_requerimientos_prototipos_y_abstraccion_en_arquitectura/leccion.vtt", notes : []},
            {id:'exe-002', type:menuOptionEntryTypes.internalPage, title:'Ejercicios sugeridos de la unidad 2', uri:'../exercises/unidad-02.html'},
        ]
    },
    unidad3:{
        id:'path-unidad-3',
        title:'Unidad 3: Reinventar juegos',
        summary:'A partir de juegos ya existentes, crearemos nuevas versiones. Conoceremos prácticas de la ingeniería de software para probar y documentar nuestros programas.',
        path:'unidad-3',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-035', type:menuOptionEntryTypes.video, title:'Reinventar juegos: introducción', uri:'001_introduccion/leccion.mp4', captationsUri:"001_introduccion/leccion.vtt", notes : []},
            {id:'res-003', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 3', uri:'../resources/unidad-03.html'},
            {id:'vid-036', type:menuOptionEntryTypes.video, title:'Extensión del Helicóptero. Variable', uri:'002_extension_del_helicoptero_variable/leccion.mp4', captationsUri:"002_extension_del_helicoptero_variable/leccion.vtt", notes : []},
            {id:'vid-035', type:menuOptionEntryTypes.video, title:'Conociendo el Pong. Documentación', uri:'003_conociendo_el_pong_documentacion/leccion.mp4', captationsUri:"003_conociendo_el_pong_documentacion/leccion.vtt", notes : []},
            {id:'vid-037', type:menuOptionEntryTypes.video, title:'Modificando el Pong. Condiciones complejas', uri:'004_modificando_el_pong_condiciones_complejas/leccion.mp4', captationsUri:"004_modificando_el_pong_condiciones_complejas/leccion.vtt", notes : []},
            {id:'vid-038', type:menuOptionEntryTypes.video, title:'Más modificaciones al Pong. Pizza Pong. Prueba', uri:'005_mas_modificaciones_al_pong_pizza_pong_prueba/leccion.mp4', captationsUri:"005_mas_modificaciones_al_pong_pizza_pong_prueba/leccion.vtt", notes : []},
            {id:'vid-039', type:menuOptionEntryTypes.video, title:'Tirar penales - Remix', uri:'006_tirar_penales_remix/leccion.mp4', captationsUri:"006_tirar_penales_remix/leccion.vtt", notes : []},
            {id:'vid-040', type:menuOptionEntryTypes.video, title:'¡Adivina el número! Interacción con el usuario', uri:'007_adivina_el_numero_interaccion_con_el_usuario/leccion.mp4', captationsUri:"007_adivina_el_numero_interaccion_con_el_usuario/leccion.vtt", notes : []},
            {id:'vid-041', type:menuOptionEntryTypes.video, title:'Jardín con flores. Iteraciones anidadas', uri:'008_jardin_con_flores_iteraciones_anidadas/leccion.mp4', captationsUri:"008_jardin_con_flores_iteraciones_anidadas/leccion.vtt", notes : []},
            {id:'vid-042', type:menuOptionEntryTypes.video, title:'¡Remix en el laboratorio de Biotecnología!', uri:'009_remix_en_el_laboratorio_de_biotecnologia/leccion.mp4', captationsUri:"009_remix_en_el_laboratorio_de_biotecnologia/leccion.vtt", notes : []},
            {id:'vid-043', type:menuOptionEntryTypes.video, title:'Robots que juegan al fútbol', uri:'010_robots_que_juegan_al_futbol/leccion.mp4', captationsUri:"010_robots_que_juegan_al_futbol/leccion.vtt", notes : []},
            {id:'exe-003', type:menuOptionEntryTypes.internalPage, title:'Ejercicios sugeridos de la unidad 2', uri:'../exercises/unidad-03.html'},
        ]
    },
    unidad4:{
        id:'path-unidad-4',
        title:'Unidad 4: Reutilizando tu código',
        summary:'En esta unidad presentaremos el concepto de procedimiento. También veremos clonación en Scratch. Aplicaremos estas ideas para reutilizar nuestros programas.',
        path:'unidad-4',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-044', type:menuOptionEntryTypes.video, title:'Reutilizando código: introducción', uri:'001_introduccion/leccion.mp4', captationsUri:"001_introduccion/leccion.vtt", notes : []},
            {id:'res-004', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 4', uri:'../resources/unidad-04.html'},
            {id:'vid-045', type:menuOptionEntryTypes.video, title:'¡Atrapar al ratón! Procedimientos', uri:'002_atrapar_al_raton_procedimientos/leccion.mp4', captationsUri:"002_atrapar_al_raton_procedimientos/leccion.vtt", notes : []},
            {id:'vid-046', type:menuOptionEntryTypes.video, title:'¡Cuadrados, cuadrados, cuadrados! Generalización. Parámetros', uri:'003_cuadrados_cuadrados_cuadrados_generalizacion_parametros/leccion.mp4', captationsUri:"003_cuadrados_cuadrados_cuadrados_generalizacion_parametros/leccion.vtt", notes : []},
            {id:'vid-047', type:menuOptionEntryTypes.video, title:'Escalera', uri:'004_escalera/leccion.mp4', captationsUri:"004_escalera/leccion.vtt", notes : []},
            {id:'vid-048', type:menuOptionEntryTypes.video, title:'¡Cazar Fantasmas! Clones', uri:'005_cazar_fantasmas_clones/leccion.mp4', captationsUri:"005_cazar_fantasmas_clones/leccion.vtt", notes : []},
            {id:'vid-049', type:menuOptionEntryTypes.video, title:'Fuegos artificiales', uri:'006_fuegos_artificiales/leccion.mp4', captationsUri:"006_fuegos_artificiales/leccion.vtt", notes : []},
            {id:'vid-050', type:menuOptionEntryTypes.video, title:'¡Romper burbujas! Modularidad', uri:'007_romper_burbujas_modularidad/leccion.mp4', captationsUri:"007_romper_burbujas_modularidad/leccion.vtt", notes : []},
            {id:'vid-051', type:menuOptionEntryTypes.video, title:'¡La Ola!', uri:'008_la_ola/leccion.mp4', captationsUri:"008_la_ola/leccion.vtt", notes : []},
            {id:'vid-052', type:menuOptionEntryTypes.video, title:'Cómo nuestros programas pueden cambiar la forma de hacer las cosas', uri:'009_como_nuestros_programas_pueden_cambiar_la_forma_de_hacer_las_cosas/leccion.mp4', captationsUri:"009_como_nuestros_programas_pueden_cambiar_la_forma_de_hacer_las_cosas/leccion.vtt", notes : []},
            {id:'vid-053', type:menuOptionEntryTypes.video, title:'Entrevista a Joyera', uri:'010_entrevista_a_joyera/leccion.mp4', captationsUri:"010_entrevista_a_joyera/leccion.vtt", notes : []},
            {id:'exe-004', type:menuOptionEntryTypes.internalPage, title:'Ejercicios sugeridos de la unidad 4', uri:'../exercises/unidad-04.html'},
        ]
    },
    unidad5:{
        id:'path-unidad-5',
        title:'Unidad 5: Pensando como ingeniero/a de software',
        summary:'Aplicaremos todos los pasos de la ingeniería de software para crear un divertido video juego. También aprenderemos sobre envío de mensajes (“broadcasting”) y concurrencia.',
        path:'unidad-5',
        type:menuOptionEntryTypes.videoContainer,
        items:[
            {id:'vid-054', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Proceso y enfoques de la ingeniería de Software. Requerimientos y diseño de Interfaz', uri:'001_juego_del_zombie_proceso_y_enfoques_de_la_ing_de_software_requerimientos_y_dise_o_de_interfaz/leccion.mp4', captationsUri:"001_juego_del_zombie_proceso_y_enfoques_de_la_ing_de_software_requerimientos_y_dise_o_de_interfaz/leccion.vtt", notes : []},
            {id:'res-005', type:menuOptionEntryTypes.internalPage, title:'Recursos de la unidad 5', uri:'../resources/unidad-05.html'},
            {id:'vid-055', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Diseño del código. Concurrencia', uri:'002_juego_del_zombie_dise_o_del_codigo_concurrencia/leccion.mp4', captationsUri:"002_juego_del_zombie_dise_o_del_codigo_concurrencia/leccion.vtt", notes : []},
            {id:'vid-056', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: interfaz, escoba y zombie', uri:'003_juego_del_zombie_implementacion_interfaz_escoba_y_zombie/leccion.mp4', captationsUri:"003_juego_del_zombie_implementacion_interfaz_escoba_y_zombie/leccion.vtt", notes : []},
            {id:'vid-057', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: clon del zombie. Envío de mensajes: "broadcasting"', uri:'004_juego_del_zombie_implementacion_clon_del_zombie_envio_de_mensajes_broadcasting/leccion.mp4', captationsUri:"004_juego_del_zombie_implementacion_clon_del_zombie_envio_de_mensajes_broadcasting/leccion.vtt", notes : []},
            {id:'vid-058', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Implementación: fondo y flor. Complejidad Computacional', uri:'005_juego_del_zombie_implementacion_fondo_y_flor_complejidad_computacional/leccion.mp4', captationsUri:"005_juego_del_zombie_implementacion_fondo_y_flor_complejidad_computacional/leccion.vtt", notes : []},
            {id:'vid-059', type:menuOptionEntryTypes.video, title:'Juego del Zombie: Invasión zombie y extensiones', uri:'006_juego_del_zombie_invasion_zombie_y_extensiones/leccion.mp4', captationsUri:"006_juego_del_zombie_invasion_zombie_y_extensiones/leccion.vtt", notes : []},
            {id:'vid-060', type:menuOptionEntryTypes.video, title:'Publicación en el sitio de Scratch. Resumen', uri:'007_compartir_publicacion_en_el_sitio_de_scratch_resumen/leccion.mp4', captationsUri:"007_compartir_publicacion_en_el_sitio_de_scratch_resumen/leccion.vtt", notes : []},
            {id:'vid-061', type:menuOptionEntryTypes.video, title:'Scratch y otro lenguaje de programación: Python', uri:'008_scratch_y_otro_lenguaje_de_programacion_python/leccion.mp4', captationsUri:"008_scratch_y_otro_lenguaje_de_programacion_python/leccion.vtt", notes : []},
            {id:'vid-062', type:menuOptionEntryTypes.video, title:'¿Cómo crear un video juego exitoso?', uri:'009_como_crear_un_video_juego_exitoso/leccion.mp4', captationsUri:"009_como_crear_un_video_juego_exitoso/leccion.vtt", notes : []},
            {id:'vid-063', type:menuOptionEntryTypes.video, title:'Entrevista a estudiante de Computación', uri:'010_entrevista_a_estudiante_de_computacion/leccion.mp4', captationsUri:"010_entrevista_a_estudiante_de_computacion/leccion.vtt", notes : []},
            {id:'exe-005', type:menuOptionEntryTypes.internalPage, title:'Ejercicios sugeridos de la unidad 5', uri:'../exercises/unidad-05.html'},
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
        summary:'Nota: necesitas una conexión a internet para visitar la mayoría de estos sitios web.',
        path:'',
        type:menuOptionEntryTypes.linkContainer,
        items:[
            {id:'ext-01', type:menuOptionEntryTypes.externalLink, title:'¡Me quiero certificar!', uri:'https://es.coursera.org/learn/a-programar'},
            {id:'ext-02', type:menuOptionEntryTypes.externalLink, title:'Web oficial de Scratch', uri:'https://scratch.mit.edu'},
            {id:'ext-03', type:menuOptionEntryTypes.externalLink, title:'Actualizar mi Scratch', uri:'https://scratch.mit.edu/download'},
            {id:'ext-04', type:menuOptionEntryTypes.externalLink, title:'Colaborar en está web', uri:'https://github.com/kevinesaa/scratch-curso-dist'},
            {id:'ext-05', type:menuOptionEntryTypes.externalLink, title:'Colaborar en los repositorios de Scratch', uri:'https://github.com/LLK/'},
            {id:'res-006', type:menuOptionEntryTypes.internalPage, title:'Otros recursos', uri:'external-resources.html'},
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