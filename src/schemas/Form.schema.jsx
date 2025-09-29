import * as yup from 'yup';

const horaValida = (hora) =>{
        const horaNumber = parseInt(hora.slice(0, 2));
        return horaNumber >= 12 && horaNumber <= 22;
    };

    const minutosValidos = (hora) =>{
        const minutos = hora.slice(-2);
        return minutos == '00' || minutos == '30';
    };

    const fechaReservaTope = () => {
        const mesTope = new Date().getMonth() + 7;
        const fechaNuevoMes = new Date().setMonth(mesTope)
        const fechaTope = new Date(fechaNuevoMes);
        const fechaArg= new Intl.DateTimeFormat("es-AR").format(fechaTope);
        return {fechaTope, fechaArg}
    }

    const formSchema = yup.object().shape({
        apellido: yup.string().required('Debe ingresar un apellido').max(32, '${max} caracteres maximo'),
        nombre: yup.string().required('Debe ingresar un nombre').max(64, '${max} caracteres maximo'),
        email: yup.string().email('Email inválido').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido").required('Debe ingresar un email'),
        telefono: yup.string().required('Debe ingresar un telefono').min(10, '${min} caracteres minimo').max(10, 'maximo ${max} caracteres').matches(/^\d+$/, 'Debe ingresar solo numeros').matches(/^11\d+$/, 'El telefono debe comenzar con 11'),
        comentarios: yup.string().max(120, '${max} caracteres maximo'),
        reserva: yup.boolean(),
        fecha: yup.date().min(new Date(), 'La fecha debe ser posterior a la actual').max(fechaReservaTope().fechaTope, `La fecha debe ser anterior a ${fechaReservaTope().fechaArg}`)
            .when('reserva', {
                is:true,
                then:(schema) => schema.required('Debe ingresar una fecha'),
                otherwise:(schema) => schema.nullable()
            }),
        hora: yup.string()
            .when('reserva', {
                is:true,
                then:(schema) => schema.required('Debe ingresar un horario')
                    .test(
                        'hora-valida',
                        'la hora debe estar entre las 12:00 y las 22:00 hs en intervalos de 30 minutos',
                        (horario) => horaValida(horario) && minutosValidos(horario)
                    ),
                otherwise:(schema) => schema.nullable()
            }),
        comensales: yup.number().typeError('Debe ingresar un numero').min(1, 'El minimo es ${min} persona').max(10, 'El maximo son ${max} personas')
            .when('reserva', {
                is:true,
                then:(schema) => schema.required('Debe ingresar una cantidad'),
                otherwise:(schema) => schema.nullable()
            }),
    });

    export default formSchema;