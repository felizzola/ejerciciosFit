db = db.getSiblingDB('ejercicios_fit');
db.ejercicios.drop();
db.ejercicios.insertMany(

[
    {
        "tipo": "brazos",
        "nombre": "curl de biceps alternos con supinacion",
        "dificultad":"inicial",
        "musculos principales":["biceps", "supinador largo"],
        "musculos secundarios": ["braquial anterior", "deltoides anterior"],
        "elementos": "mancuernas",
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "concentrado",
        "dificultad":"inicial",
        "musculos principales":["biceps", "braquial anterior"],
        "musculos secundarios": [],
        "elementos": "mancuernas",
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "martillo alterno",
        "dificultad":"inicial",
        "musculos principales":["biceps", "supinador largo","braquial anterior"],
        "musculos secundarios": ["primer radial","segundo radial"],
        "elementos": "mancuernas",
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "biceps con polea",
        "dificultad":"intermedio",
        "musculos principales":["biceps","braquial anterior"],
        "musculos secundarios": [],
        "elementos": ["polea","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },  
    {
        "tipo": "brazos",
        "nombre": "biceps en cruz con polea alta",
        "dificultad":"intermedio",
        "musculos principales":["biceps","braquial anterior"],
        "musculos secundarios": ["cubital anterior"],
        "elementos": ["polea","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },  
    {
        "tipo": "brazos",
        "nombre": "curl de biceps con barra",
        "dificultad":"avanzado",
        "musculos principales":["biceps","braquial anterior"],
        "musculos secundarios": ["supinador largo", "pronador redondo", "flexores de muñeca y dedos"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "biceps en banco scott",
        "dificultad":"avanzado",
        "musculos principales":["biceps","braquial anterior"],
        "musculos secundarios": ["supinador largo", "pronador redondo", "flexores de muñeca y dedos"],
        "elementos": ["barra w", "banco scott"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "antebrazos",
        "nombre": "curl de biceps con barra y agarre pronado",
        "dificultad":"avanzado",
        "musculos principales":["primer radial", "segundo radial", "extensor de los dedos", "cubital posterior"],
        "musculos secundarios": ["supinador largo","braquial anterior", "biceps"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "antebrazos",
        "nombre": "curl de antebrazos con barra y agarre pronado",
        "dificultad":"avanzado",
        "musculos principales":["primer radial", "segundo radial", "extensor de los dedos", "cubital posterior"],
        "musculos secundarios": [],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "antebrazos",
        "nombre": "curl de antebrazos con mancuerna",
        "dificultad":"intermedio",
        "musculos principales":["palmar mayor", "palmar menor", "cubital anterior","flexores de los dedos", "cubital posterior"],
        "musculos secundarios": [],
        "elementos": ["mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "extension de triceps en polea",
        "dificultad":"inicial",
        "musculos principales":["triceps", "anconeo"],
        "musculos secundarios": [],
        "elementos": ["polea", "barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "extension de triceps en polea de espaldas",
        "dificultad":"intermedio",
        "musculos principales":["triceps","porcion larga del triceps", "anconeo"],
        "musculos secundarios": [],
        "elementos": ["polea", "barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "extension de triceps en polea con cuerda",
        "dificultad":"avanzado",
        "musculos principales":["triceps", "vasto externo del triceps", "anconeo"],
        "musculos secundarios": [],
        "elementos": ["polea", "soga"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "extension de triceps supino en polea",
        "dificultad":"intermedio",
        "musculos principales":["triceps", "vasto interno del triceps"],
        "musculos secundarios": ["extensores de la muñeca", "anconeo"],
        "elementos": ["polea", "barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "extension individual de triceps supino en polea",
        "dificultad":"avanzado",
        "musculos principales":["triceps", "vasto interno del triceps"],
        "musculos secundarios": [],
        "elementos": ["polea", "mango de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "press frances en banco plano",
        "dificultad":"avanzado",
        "musculos principales":["triceps"],
        "musculos secundarios": [],
        "elementos": ["banco plano", "barra w"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "press frances en banco plano con mancuerna",
        "dificultad":"inicial",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": ["banco plano", "mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "copa con mancuerna",
        "dificultad":"intermedio",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": ["asiento", "mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "copa individual con mancuerna",
        "dificultad":"avanzado",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": ["asiento", "mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "copa con barra",
        "dificultad":"intermedio",
        "musculos principales":["triceps"],
        "musculos secundarios": [],
        "elementos": ["asiento", "barra w"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "patada de burro",
        "dificultad":"intermedio",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": ["mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "fondo con piernas flexionadas",
        "dificultad":"inicial",
        "musculos principales":["triceps"],
        "musculos secundarios": [],
        "elementos": ["cajon"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "fondo con piernas extendidas",
        "dificultad":"intermedio",
        "musculos principales":["triceps"],
        "musculos secundarios": [],
        "elementos": ["cajon"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "dippings entre dos bancos",
        "dificultad":"avanzado",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo", "pectoral mayor"],
        "elementos": ["cajon"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "flexiones cerradas",
        "dificultad":"avanzado",
        "musculos principales":["triceps"],
        "musculos secundarios": ["anconeo", "pectoral"],
        "elementos": ["cajon"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "brazos",
        "nombre": "flexiones diamante",
        "dificultad":"avanzado",
        "musculos principales":["biceps", "triceps"],
        "musculos secundarios": ["deltoide anterior", "pectoral mayor"],
        "elementos": ["cajon"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "press trasnuca con barra",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides", "trapecio", "triceps braquial", "serrato mayor"],
        "musculos secundarios": ["romboides","infraespinoso", "redondo menor", "supraespinoso"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "press frontal con barra",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides anterior", "deltoides externo", "haz clavicular", "trapecio", "triceps braquial","serrato mayor"],
        "musculos secundarios": [],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "press sentado con mancuerna",
        "dificultad":"inicial",
        "musculos principales":["deoltoides","trapecio", "triceps braquial","serrato mayor"],
        "musculos secundarios": [],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "press frontal con rotación de muñeca",
        "dificultad":"intermedio",
        "musculos principales":["deoltoides", "haz clavicular","trapecio", "triceps braquial","serrato mayor"],
        "musculos secundarios": [],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "vuelos laterales",
        "dificultad":"intermedio",
        "musculos principales":["deoltoides medio"],
        "musculos secundarios": ["supraespinoso"],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "pajaro",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides posterior"],
        "musculos secundarios": ["trapecio","romboides","redondo menor","infraespinoso"],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "vuelo frontal",
        "dificultad":"inicial",
        "musculos principales":["deoltoides anterior","haz clavicular"],
        "musculos secundarios": ["deltoides posterior"],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "vuelo lateral en polea",
        "dificultad":"intermedio",
        "musculos principales":["deoltoides medio"],
        "musculos secundarios": [],
        "elementos": ["polea baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "vuelo frontal en polea",
        "dificultad":"intermedio",
        "musculos principales":["deoltoides","haz clavicular"],
        "musculos secundarios": ["biceps"],
        "elementos": ["polea baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "pajaro en polea",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides posterior"],
        "musculos secundarios": ["trapecio", "romboides"],
        "elementos": ["poleas baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "elevacion frontal con una mancuerna",
        "dificultad":"inicial",
        "musculos principales":["deoltoides anterior", "haz clavicular"],
        "musculos secundarios": ["biceps"],
        "elementos": ["poleas baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "elevacion frontal con barra",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides anterior", "haz clavicular","infraespinoso"],
        "musculos secundarios": ["trapecio", "serrato mayor","biceps"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "remo al cuello",
        "dificultad":"avanzado",
        "musculos principales":["deoltoides", "trapecio","biceps"],
        "musculos secundarios": ["abdominales"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "remo al menton",
        "dificultad":"inicial",
        "musculos principales":["deoltoides", "trapecio"],
        "musculos secundarios": ["biceps"],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "hombros",
        "nombre": "felxiones puente",
        "dificultad":"intermedio",
        "musculos principales":["deoltoides", "trapecio","biceps"],
        "musculos secundarios": [],
        "elementos": [],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "press de banca plano",
        "dificultad":"avanzado",
        "musculos principales":["pectoral mayor", "pectoral menor","triceps","serrato","coracobraquial"],
        "musculos secundarios": [],
        "elementos": ["banco plano", "barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "press de banca plano con manos juntas",
        "dificultad":"avanzado",
        "musculos principales":["pectoral", "triceps"],
        "musculos secundarios": ["deltoide anterior"],
        "elementos": ["banco plano", "barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "press de banca inclinado",
        "dificultad":"avanzado",
        "musculos principales":["pectoral mayor", "haz clavicular","deoltoides anterior", "triceps","serrato mayor","pectoral menor"],
        "musculos secundarios": ["deltoide anterior"],
        "elementos": ["banco inclinado", "barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "flexiones de brazos con rodillas apoyadas",
        "dificultad":"inicial",
        "musculos principales":["pectoral mayor", "haz clavicular","deoltoides anterior", "triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": [],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "lagartijas",
        "dificultad":"intermedio",
        "musculos principales":["pectoral mayor", "haz clavicular","deoltoides anterior","triceps"],
        "musculos secundarios": ["anconeo"],
        "elementos": [],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "dips",
        "dificultad":"avanzado",
        "musculos principales":["pectoral", "triceps","deoltoides anterior"],
        "musculos secundarios": ["anconeo"],
        "elementos": ["paralelas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "press con macuernas",
        "dificultad":"inicial",
        "musculos principales":["pectoral mayor"],
        "musculos secundarios": ["triceps","deltoides","anconeo"],
        "elementos": ["mancuernas","banco plano"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "aperturas",
        "dificultad":"intermedio",
        "musculos principales":["pectoral mayor","pectoral parte esternal"],
        "musculos secundarios": [],
        "elementos": ["mancuernas","banco plano"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "press con mancuernas en banco inclinado",
        "dificultad":"intermedio",
        "musculos principales":["pectoral","haz clavicular"],
        "musculos secundarios": ["deltoide anterior","serrato mayor","pectoral menor","triceps"],
        "elementos": ["mancuernas","banco inclinado"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "aperturas en banco inclinado",
        "dificultad":"intermedio",
        "musculos principales":["pectoral mayor"],
        "musculos secundarios": [],
        "elementos": ["mancuernas","banco inclinado"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "cruces en polea",
        "dificultad":"avanzado",
        "musculos principales":["pectoral mayor"],
        "musculos secundarios": ["pectoral menor"],
        "elementos": ["poleas alta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "pullover",
        "dificultad":"inicial",
        "musculos principales":["pectoral mayor", "triceps","redondo mayor","dorsal ancho","serrato"],
        "musculos secundarios": ["romboides","pectoral menor"],
        "elementos": ["mancuerna","banco plano"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "pectorales",
        "nombre": "pullover con barra",
        "dificultad":"avanzado",
        "musculos principales":["pectoral mayor", "triceps","redondo mayor","dorsal ancho","serrato mayor"],
        "musculos secundarios": ["romboides","pectoral menor"],
        "elementos": ["barra w","banco plano"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "dominadas",
        "dificultad":"avanzado",
        "musculos principales":["romboide","trapecio inferior","dorsal ancho","redondo mayor"],
        "musculos secundarios": ["biceps braquial","braquial anterior","supinador largo","pectoral mayor"],
        "elementos": ["barra fija"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "dominadas con agarre supino",
        "dificultad":"avanzado",
        "musculos principales":["dorsal ancho","redondo mayor","biceps","braquial anterior"],
        "musculos secundarios": ["trapecio","romboides","pectorales"],
        "elementos": ["barra fija"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "polea al pecho",
        "dificultad":"inicial",
        "musculos principales":["dorsal ancho","redondo mayor"],
        "musculos secundarios": ["trapecio","romboides","biceps braquial","braquial anterior","pectorales"],
        "elementos": ["polea alta","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "polea trasnuca",
        "dificultad":"inicial",
        "musculos principales":["dorsal ancho","redondo mayor"],
        "musculos secundarios": ["trapecio inferior","romboides","biceps braquial","braquial anterior","supinador largo"],
        "elementos": ["polea alta","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "polea al pecho",
        "dificultad":"intermedio",
        "musculos principales":["dorsal ancho","redondo mayor"],
        "musculos secundarios": ["trapecio","romboides","deltoides posterior","biceps","braquial anterior","supinador largo"],
        "elementos": ["polea alta","triangulo de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "pull over con polea",
        "dificultad":"intermedio",
        "musculos principales":["dorsal ancho","redondo mayor","triceps"],
        "musculos secundarios": [],
        "elementos": ["polea alta","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "remo en polea",
        "dificultad":"inicial",
        "musculos principales":["dorsal ancho","redondo mayor","deoltoides anterior","braquial anterior","biceps","supinador largo","trapecio","romboides"],
        "musculos secundarios": ["espinosos"],
        "elementos": ["polea baja","triangulo de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "remo a una mano",
        "dificultad":"intermedio",
        "musculos principales":["dorsal ancho","redondo mayor","deoltoides anterior","trapecio","romboides"],
        "musculos secundarios": ["biceps braquial","braquial anterior","supinador largo"],
        "elementos": ["mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "remo con barra",
        "dificultad":"avanzado",
        "musculos principales":["dorsal ancho","redondo mayor","biceps braquial","braquial anterior","supinador largo","deoltoides posterior","trapecio","romboides"],
        "musculos secundarios": ["infraespinoso"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "remo caballo",
        "dificultad":"avanzado",
        "musculos principales":["dorsal ancho","redondo mayor","biceps braquial","braquial anterior","supinador largo","deoltoides posterior","trapecio","romboides"],
        "musculos secundarios": [],
        "elementos": ["barra", "agarre triangulo"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "hiperextensiones del tronco",
        "dificultad":"intermedio",
        "musculos principales":["sacrolumbares","interespinosos","dorsal largo","transversal del cuello","esplenios","cuadrado"],
        "musculos secundarios": ["gluteos mayores","isquiotibiales"],
        "elementos": ["banco con fijadores de tobillos"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "encogimientos",
        "dificultad":"inicial",
        "musculos principales":["trapecio superior","angular del omoplato"],
        "musculos secundarios": ["trapecio medio","romboides"],
        "elementos": ["mancuernas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "espalda",
        "nombre": "peso muerto",
        "dificultad":"avanzado",
        "musculos principales":["cuadriceps","angular del omoplato","isquiotibiales","trapecio","redondo mayor","dorsal ancho","gluteo mayor","esplenio cervical","angular del omoplato"],
        "musculos secundarios": [],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "peso muerto sumo",
        "dificultad":"avanzado",
        "musculos principales":["cuadriceps","aductores","gluteo mayor","pectineo"],
        "musculos secundarios": ["trapecio"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "sentadilla",
        "dificultad":"inicial",
        "musculos principales":["cuadriceps","biceps crural","gluteo mayor","gluteo medio"],
        "musculos secundarios": ["trapecio"],
        "elementos": [],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "squat con barra",
        "dificultad":"intermedio",
        "musculos principales":["cuadriceps","biceps crural","gluteo mayor","gluteo medio"],
        "musculos secundarios": ["abdominales"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "squat con barra frontal",
        "dificultad":"avanzado",
        "musculos principales":["cuadriceps","biceps crural","gluteo mayor","gluteo medio"],
        "musculos secundarios": ["abdominales","lumbares","isquiotibiales"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "sentadilla sumo barra frontal",
        "dificultad":"intermedio",
        "musculos principales":["cuadriceps","vasto externo","recto anterior","recto interno","abductor mayor","gluteo mayor","recto interno","aductor medio","pectineo"],
        "musculos secundarios": ["abdominales","sacrolumbares"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "prensa pies altos",
        "dificultad":"intermedio",
        "musculos principales":["gluteos","isquiotibiales"],
        "musculos secundarios": ["cuadriceps"],
        "elementos": ["prensa"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "prensa pies bajos",
        "dificultad":"intermedio",
        "musculos principales":["cuadriceps"],
        "musculos secundarios": [],
        "elementos": ["prensa"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "prensa pies separados",
        "dificultad":"intermedio",
        "musculos principales":["aductores"],
        "musculos secundarios": ["cuadriceps","gluteos"],
        "elementos": ["prensa"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "prensa pies juntos",
        "dificultad":"inicial",
        "musculos principales":["cuadriceps"],
        "musculos secundarios": [],
        "elementos": ["prensa"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "leg extension",
        "dificultad":"inicial",
        "musculos principales":["cuadriceps"],
        "musculos secundarios": [],
        "elementos": ["maquina de cuadriceps"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "leg curl",
        "dificultad":"inicial",
        "musculos principales":["isquiotibiales"],
        "musculos secundarios": ["gemelos"],
        "elementos": ["maquina de isquiotibiales"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "buenos dias",
        "dificultad":"inicial",
        "musculos principales":["isquiotibiales","gluteo mayor"],
        "musculos secundarios": ["abdominales"],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "aductor en polea",
        "dificultad":"intermedio",
        "musculos principales":["aductor menor","aductor medio","aductor mayor","recto interno","pectineo"],
        "musculos secundarios": ["abdominales"],
        "elementos": ["polea baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "elevacion de talones",
        "dificultad":"intermedio",
        "musculos principales":["gemelo interno","plantar delgado","soleos","gemelo externo"],
        "musculos secundarios": [],
        "elementos": ["maquina de gemelos"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "piernas",
        "nombre": "elevacion de un talon",
        "dificultad":"inicial",
        "musculos principales":["gemelo interno","plantar delgado","soleos","gemelo externo"],
        "musculos secundarios": [],
        "elementos": ["mancuerna","step"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "lunges",
        "dificultad":"avanzado",
        "musculos principales":["gluteo mayor","cuadriceps"],
        "musculos secundarios": [],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "patada de gluteo en polea",
        "dificultad":"intermedio",
        "musculos principales":["gluteo mayor"],
        "musculos secundarios": ["isquiotibiales"],
        "elementos": ["polea baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "patada de gluteo en suelo",
        "dificultad":"inicial",
        "musculos principales":["gluteo mayor"],
        "musculos secundarios": ["isquiotibiales"],
        "elementos": ["tobillera","colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "elevacion de pelvis en suelo",
        "dificultad":"inicial",
        "musculos principales":["gluteo mayor","isquiotibiales"],
        "musculos secundarios": [],
        "elementos": ["colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "hip thrust",
        "dificultad":"avanzado",
        "musculos principales":["gluteo mayor"],
        "musculos secundarios": ["isquiotibiales"],
        "elementos": ["barra","banco"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "abductor en polea",
        "dificultad":"intermedio",
        "musculos principales":["gluteo medio","gluteo menor"],
        "musculos secundarios": [],
        "elementos": ["polea baja"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "abductor acostado",
        "dificultad":"intermedio",
        "musculos principales":["gluteo medio","gluteo menor"],
        "musculos secundarios": [],
        "elementos": ["tobillera","colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "gluteos",
        "nombre": "abductor en maquina",
        "dificultad":"inicial",
        "musculos principales":["gluteo mayor","gluteo menor"],
        "musculos secundarios": [],
        "elementos": ["maquina de abductor"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "crunch",
        "dificultad":"inicial",
        "musculos principales":["recto mayor del abdomen"],
        "musculos secundarios": [],
        "elementos": ["colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "elevaciones de tronco en suelo",
        "dificultad":"inicial",
        "musculos principales":["recto mayor del abdomen"],
        "musculos secundarios": ["flexores de cadera","oblicuos"],
        "elementos": ["colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "twist",
        "dificultad":"intermedio",
        "musculos principales":["oblicuo mayor"],
        "musculos secundarios": ["recto mayor del abdomen"],
        "elementos": ["colchoneta","disco"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "elevaciones de tronco suspendido en banco ",
        "dificultad":"avanzado",
        "musculos principales":["recto mayor del abdomen"],
        "musculos secundarios": ["oblicuos"],
        "elementos": ["banco especifico"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "crunch en polea",
        "dificultad":"intermedio",
        "musculos principales":["recto mayor del abdomen","oblicuo mayor"],
        "musculos secundarios": [],
        "elementos": ["polea alta","barra de polea"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "elevaciones de piernas",
        "dificultad":"inicial",
        "musculos principales":["recto mayor del abdomen", "fascia lata"],
        "musculos secundarios": [],
        "elementos": ["colchoneta"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "elevaciones de piernas colgado",
        "dificultad":"avanzado",
        "musculos principales":["recto mayor del abdomen","psoas iliaco","fascia lata"],
        "musculos secundarios": ["oblicuos"],
        "elementos": ["barra fija"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
    {
        "tipo": "abdominales",
        "nombre": "flexion lateral",
        "dificultad":"intermedio",
        "musculos principales":["oblicuos"],
        "musculos secundarios": ["recto mayor del abdomen"],
        "elementos": ["mancuerna"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
        {
        "tipo": "abdominales",
        "nombre": "elevacion de rodillas en paralelas",
        "dificultad":"intermedio",
        "musculos principales":["recto mayor del abdomen","psoas iliaco","oblicuos"],
        "musculos secundarios": [],
        "elementos": ["paralelas"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    },
        {
        "tipo": "abdominales",
        "nombre": "plancha",
        "dificultad":"inicial",
        "musculos principales":["recto mayor del abdomen", "oblicuos"],
        "musculos secundarios": ["recto femoral","biceps femoral","gluteo mayor"],
        "elementos": ["maquina de abductor"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    }
]
);

/*     {
        "tipo": "gluteos",
        "nombre": "lunges",
        "dificultad":"avanzado",
        "musculos principales":["gluteo mayor","cuadriceps"],
        "musculos secundarios": [],
        "elementos": ["barra"],
        "url":"https://www.youtube.com/channel/UCEoEbSv8UNtlKcV18Qz8_TQ"
    }, */