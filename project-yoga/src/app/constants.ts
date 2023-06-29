export class Constants {

    public readonly LISTADO_CATEGORIAS_MENU = [
        {nombre:'Home', ruta:'/'},
        {nombre:'Yoga', ruta:'/yoga'},
        {nombre:'Masajes', ruta:'/masajes'},
        {nombre:'Danza', ruta:'/danza'},
        {nombre:'Contacto', ruta:'/contacto'}
        // {nombre:'Blog', ruta:'/blog'}
    ];

    public readonly TITULO_ICONOS_HEADER = {
        facebook: 'Facebook',
        instagram: 'Instagram',
        contacto: 'Contacto'
    }

    public readonly TITULO_CATEGORIA = {
        inicio: 'Inicio',
        servicios: 'Servicios',
        contacto: 'Contacto',
        quienSoy: 'Quién soy',

        yoga: 'Yoga',
        masajes: 'Masajes',
        danza: 'Danza'
    }

    public readonly BTN_SERVICIOS = {
        yoga: 'Yoga',
        masajes: 'Masajes',
        danza: 'Danza'
    }

    public readonly RUTA_SERVICIOS = {
        danza: '/servicios/danza',
        masajes: '/servicios/masajes',
        yoga: '/servicios/yoga'
    }

    public readonly TEXTO_CONTACTO = {
        ciudad: 'Córdoba, Argentina',
        email: 'enrolandoarte@gmail.com',
        telefono: '+54 11 2345 6789'
    }

    public readonly FORMULARIO_CONTACTO = {
        nombre: 'Nombre',
        email: 'Email',
        telefono: 'Teléfono',
        mensaje: 'Mensaje'
    }

    public readonly BOTON_FLOTANTE_TEXTO = '¿En qué puedo ayudarte?';

    public readonly TEXTO_INICIO = 'Les damos la bienvenida a Movimientos del Río, un espacio de conexión y cuidado para tu salud donde podrás disfrutar de diferentes clases y sesiones para cada momento y persona en particular.'
    public readonly TEXTO_INICIO_DOS = 'Ofrecemos clases de Yoga, Expresión Corporal- Danza, consciencia corporal, movimiento sensorial, Yogaterapia y eutonía, sesiones de Masajes- Reiki.';
    public readonly TEXTO_INICIO_TRES = 'Está dirigido a mujeres, embarazadas, adultas mayores y público en general.';
    public readonly TEXTO_INICIO_FRASE = '"Cuando el movimiento se vuelve natural el esfuerzo cesa" B.K.S Iyengar';
    public readonly TEXTO_SERVICIO = ' Te ofrecemos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/><br/> Aqui encontrarás un espacio de bienestar y cuidado para tu salud. Te ofrecemos Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/><br/>  Este es un texto de prueba .. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> <br/> Nos especializamos en: <br/>• MasajeThai Yoga (Masaje Tradicional Tailandés ' +
    '<br/>• Lomi Lomi (Hawaiano)<br/> • Masaje Facial Japonés <br/>• Reflexología Podal Tailandesa<br/>• Terapia Craneo-Sacral<br/>• Reiki';

    public readonly TITULO_FORMULARIO_CONTACTO = 'Formulario de contacto';

    public readonly TITULO_INICIO = 'Movimientos del Río';

    public readonly TEXTO_YOGA_TITULO = 'La práctica de Yoga es una experiencia integral que beneficia el cuerpo, la mente y las emociones. Buscando respirar cada asana y trabajar la atención en cada una de ellas se beneficia no solo el cuerpo físico sino el campo mental, lo anímico y lo espiritual.';
    public readonly TEXTO_YOGA_HORARIO = 'Si necesitas contactarte con nosotros por clases privadas, grupales, online y otros';
    public readonly TEXTO_YOGA_ELEMENTOS = 'Abordamos la práctica con diferentes elementos como tacos, sillas, cintos, almohadones, para poder acompañar y dar más espacio y fluidez a las asanas, sin tener que forzar el cuerpo para poder practicar con más conciencia y seguridad. Se pone el foco en el proceso y no en el resultado final. De esta forma, nadie queda fuera de la práctica y a su vez se busca estar cada vez más presentes y respirar cada postura para poder  establecernos en ellas.';
    public readonly TEXTO_YOGA_EMBARAZADAS = 'A través de las diferentes asanas (posturas), del trabajo consciente y de técnicas respiratorias, abordaremos los cambios físicos, anímicos y espirituales por los que atraviesa la mujer a lo largo del proceso de la gestación. Se trabajan posturas para cada trimestre en particular, realizando a su vez visualizaciones y meditaciones para conectar con el/la bebe y el maravilloso momento de gestar. Trabajamos desde Yogaterapia y Eutonía para conectar con el momento presente, abordando lo necesario para cada momento y cada dolencia en particular. ';
    public readonly TEXTO_YOGA_POST_NACIMIENTO = 'Abordaremos un trabajo corporal consciente luego del nacimiento de la/el bebe, para volver a conectarse luego de tantos cambios corporales. En los primeros meses trabajaremos la respiración y la meditación y luego mediante asanas para fortalecer músculos y seguir en la práctica consciente.';
    public readonly TEXTO_YOGA_BEBES = 'Es un espacio para trabajar en conjunto con la/el bebe para asi poder seguir en la práctica del yoga, conectando con nuestro cuerpo y a su vez poder conectar con amorosidad con la criaturita. Asi tambien se da la posibilidad de seguir practicando sin tener la necesidad de buscar quien cuide a el/la bebe.';
    public readonly TEXTO_YOGA_MAYORES = 'Es un espacio para trabajar en conjunto con la/el bebe para asi poder seguir en la práctica del yoga, conectando con nuestro cuerpo y a su vez poder conectar con amorosidad con la criaturita. Asi tambien se da la posibilidad de seguir practicando sin tener la necesidad de buscar quien cuide a el/la bebe.';
    public readonly TEXTO_YOGA_CLASES_PARTICULARES = 'Son clases para personas que necesiten una práctica adaptada. Las clases son individuales, a domicilio u online por la plataforma meet.';
    public readonly TEXTO_YOGA_CITA = '"El yoga permite redescubrir una sensación de plenitud en la vida" B.k.s Iyengar ';
    public readonly TITULO_YOGA_SERVICIO = {
        integral: 'Yoga Integral',
        elementos: 'Yoga con elementos y restaurativo',
        embarazadas: 'Yoga para embarazadas',
        adultos: 'Yoga para adultos mayores',
        bebes: 'Yoga con bebés',
        post_nacimiento: 'Yoga post-nacimiento',
        particulares: 'Clases particulares',
        horarios: 'Horarios'
    }

    public readonly TEXTOS_MODAL_CONFIRMACION = {
        titulo: '¡Mensaje Enviado!',
        mensaje: 'Nos pondremos en contacto contigo a la brevedad',
        agradecimiento: '¡Muchas gracias!',
        cerrar: 'Cerrar'
    }
}
