import * as yup from 'yup';

const horaValida = (hora) => {
  const horaNumber = parseInt(hora.slice(0, 2));
  return horaNumber >= 12 && horaNumber <= 22;
};

const minutosValidos = (hora) => {
  const minutos = hora.slice(-2);
  return minutos == '00' || minutos == '30';
};

const fechaReservaTope = () => {
  const mesTope = new Date().getMonth() + 7;
  const fechaNuevoMes = new Date().setMonth(mesTope);
  const fechaTope = new Date(fechaNuevoMes);
  const fechaArg = new Intl.DateTimeFormat("es-AR").format(fechaTope);
  return { fechaTope, fechaArg };
};

const formSchema = yup.object().shape({
  apellido: yup
    .string()
    .trim('No puede contener solo espacios')
    .required('Debe ingresar un apellido')
    .max(32, '${max} caracteres máximo'),

  nombre: yup
    .string()
    .trim('No puede contener solo espacios')
    .required('Debe ingresar un nombre')
    .max(64, '${max} caracteres máximo'),

  email: yup
    .string()
    .email('Email inválido')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email inválido')
    .required('Debe ingresar un email'),

  telefono: yup
    .string()
    .required('Debe ingresar un teléfono')
    .min(10, '${min} caracteres mínimo')
    .max(10, 'Máximo ${max} caracteres')
    .matches(/^\d+$/, 'Debe ingresar solo números')
    .matches(/^11\d+$/, 'El teléfono debe comenzar con 11'),

  comentarios: yup.string().max(120, '${max} caracteres máximo'),

  reserva: yup.boolean(),

  fecha: yup
    .date()
    .min(new Date(), 'La fecha debe ser posterior a la actual')
    .max(
      fechaReservaTope().fechaTope,
      `La fecha debe ser anterior a ${fechaReservaTope().fechaArg}`
    )
    .when('reserva', {
      is: true,
      then: (schema) => schema.required('Debe ingresar una fecha'),
      otherwise: (schema) => schema.nullable(),
    }),

  hora: yup
    .string()
    .when('reserva', {
      is: true,
      then: (schema) =>
        schema
          .required('Debe ingresar un horario')
          .test(
            'hora-valida',
            'La hora debe estar entre las 12:00 y las 22:00 hs en intervalos de 30 minutos',
            (horario) => horaValida(horario) && minutosValidos(horario)
          ),
      otherwise: (schema) => schema.nullable(),
    }),

  comensales: yup
    .number()
    .typeError('Debe ingresar un número')
    .min(1, 'El mínimo es ${min} persona')
    .max(10, 'El máximo son ${max} personas')
    .when('reserva', {
      is: true,
      then: (schema) => schema.required('Debe ingresar una cantidad'),
      otherwise: (schema) => schema.nullable(),
    }),
});

export default formSchema;
