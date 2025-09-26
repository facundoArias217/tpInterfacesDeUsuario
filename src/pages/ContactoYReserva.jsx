import {Form} from 'react-bootstrap';
import {Row, Col, Button} from 'react-bootstrap';
import {Formik} from 'formik';
import * as yup from 'yup';

//poner id a cada checkbox o radio
//arrglar fecha -> arreglada con validacion y settings del browser para mostrar dd/mm/yyyy
//ver validaciones: apellido nombre -> agregar trim para evitar campos con espacios o solo espacios
//telefono -> controlar que sea numerico y que empiece con 11
//si se destilda el check de reserva borrar todos los campos de reserva 
//ver si hay q resetear touched y errors y poder enviar solicitud
//ver si es mas facil de hacer con useEffect
//achicar el ancho de los inputs
//mensaje de confirmacion con alert al enviar y limpiar formulario
//validar q la fecha sea posterior a la actual -> validado
//validar q la fecha no sea posterior a un año o periodo despues de la fecha actual 
//poner una franja horaria -> validado
//poner ids a los map filasDatos, ver si se puede simplificar a un solo map
const ContactoYReserva = () => {
    
    const cargaContacto = [
        [
            {label:'Apellido:', controlId:'formGridApellido', formControl:{type:'text', placeholder:'Ingrese su Apellido', name:'apellido'}},
            {label:'Nombre:', controlId:'formGridNombre', formControl:{type:'text', placeholder:'Ingrese su Nombre', name:'nombre'}}
        ],
        [
            {label:'Email:', controlId:'formGridEmail', formControl:{type:'email', placeholder:'usuario@ejemplo.com', name:'email'}},
            {label:'Telefono:', controlId:'formGridTelefono', formControl:{type:'text', placeholder:'Ej: 1123456789', name:'telefono'}}
        ],
        [
            {label:'Otros datos o comentarios:', controlId:'formGridComentarios', formControl:{as:'textarea', rows:4, name:'comentarios'}},
        ],
    ];
    const cargaReserva = [
        [
            {label:'Fecha de la Reserva:', controlId:'formGridFechaReserva', formControl:{type:'date', name:'fecha'}},
            {label:'Hora de la Reserva:', controlId:'formGridHoraReserva', formControl:{type:'time', name:'hora', min:'12:00', max:'22:00', step:'1800'}}
        ]
    ];

    const horaValida = (hora) =>{
        const horaNumber = parseInt(hora.slice(0, 2));
        return horaNumber >= 12 && horaNumber <= 22;
    }

    const minutosValidos = (hora) =>{
        const minutos = hora.slice(-2);
        return minutos == '00' || minutos == '30';
    }

    const schema = yup.object().shape({
        apellido: yup.string().required('Debe ingresar un apellido').max(32, '${max} caracteres maximo'),
        nombre: yup.string().required('Debe ingresar un nombre').max(64, '${max} caracteres maximo'),
        email: yup.string().email('Email inválido').required('Debe ingresar un email'),
        telefono: yup.string().required('Debe ingresar un telefono').min(10, '${min} caracteres minimo').max(10, 'maximo ${max} caracteres'),
        comentarios: yup.string().max(120, '${max} caracteres maximo'),
        reserva: yup.boolean(),
        fecha: yup.date().min(new Date(), 'La fecha debe ser posterior a la actual')
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
                })
            ,
        comensales: yup.number().typeError('Debe ingresar un numero').min(1, 'El minimo es ${min} persona').max(10, 'El maximo son ${max} personas')
            .when('reserva', {
                    is:true,
                    then:(schema) => schema.required('Debe ingresar una cantidad'),
                    otherwise:(schema) => schema.nullable()
                }),
    });
    
    const filasDatos = (datos, values, handleChange, handleBlur, errors, touched) => {
        return datos.map( p => {
                return (
                    <Row className="mb-3">
                        {p.map(d => {
                            return (
                            <Form.Group as={Col} controlId={d.controlId}>
                                <Form.Label>{d.label}</Form.Label>
                                <Form.Control {...d.formControl} value={values[d.formControl.name]} onChange={handleChange} onBlur={handleBlur} isInvalid={touched[d.formControl.name] && !!errors[d.formControl.name]} />
                                <Form.Control.Feedback type="invalid">{errors[d.formControl.name]}</Form.Control.Feedback>
                            </Form.Group>
                            )
                        })}
                    </Row>
                )})
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                apellido: '',
                nombre: '',
                email: '',
                telefono: '',
                comentarios: '',
                reserva:false,
                fecha: '',
                hora: '',
                comensales:''
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors}) => (
                <Form noValidate onSubmit={handleSubmit}>

                    {filasDatos(cargaContacto, values, handleChange, handleBlur, errors, touched)}

                    <Row className="mb-3">
                        <Form.Group as={Col} id="formGridCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Quiero hacer una Reserva"
                                name='reserva'
                                checked={values.reserva}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>

                    {values.reserva && (<div>
                        {filasDatos(cargaReserva, values, handleChange, handleBlur, errors, touched)}
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridComensales">
                                <Form.Label>Cantidad de Personas:</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder="Max. 10 personas"
                                    name='comensales'
                                    value={values.comensales}
                                    onChange={handleChange}
                                    isInvalid={touched.comensales && !!errors.comensales}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.comensales}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridLugar">
                                <Form.Label>Lugar:</Form.Label>
                                    <div>
                                        <Form.Check
                                            inline
                                            label="Interior"
                                            name="group1"
                                            type='radio'
                                            defaultChecked
                                        />
                                        <Form.Check
                                            inline
                                            label="Exterior"
                                            name="group1"
                                            type='radio'
                                        />
                                    </div>
                            </Form.Group>
                        </Row>
                    </div>
                    )}
                    <Row className="justify-content-sm-center">
                        <Button variant="success" type="submit" style={{width:'15%', marginTop:'30px'}}>
                            Enviar Solicitud
                        </Button>
                    </Row>
                </Form>
            )}
        </Formik>
    )
};

export default ContactoYReserva;