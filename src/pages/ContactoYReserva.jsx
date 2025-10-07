import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import { Boton, FormInput } from '../components';
import formSchema from '../schemas/Form.schema';


const hoyYYYYMMDD = () => new Date().toISOString().slice(0, 10);
const maxYYYYMMDD = () => {
  const d = new Date();
  d.setMonth(d.getMonth() + 7);
  return d.toISOString().slice(0, 10);
};

const ContactoYReserva = () => {
  const [values, setValues] = useState({
    apellido: '',
    nombre: '',
    email: '',
    telefono: '',
    comentarios: '',
    reserva: false,
    fecha: '',
    hora: '',
    comensales: '',
    group1: 'Interior', 
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  
  const setFieldValue = (name, val) =>
    setValues((prev) => ({ ...prev, [name]: val }));

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFieldValue(name, type === 'checkbox' ? checked : value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  
  useEffect(() => {
    if (!values.reserva) {
      setErrors((err) => {
        const next = { ...(err || {}) };
        delete next.fecha;
        delete next.hora;
        delete next.comensales;
        return next;
      });
      setTouched((t) => {
        const next = { ...(t || {}) };
        delete next.fecha;
        delete next.hora;
        delete next.comensales;
        return next;
      });
    }
  }, [values.reserva]);

  
  const normalizeForValidation = (vals) => {
    const v = { ...vals };

    if (!v.reserva) {
      v.fecha = null;
      v.hora = null;
      v.comensales = null;
    } else {
     
      if (v.comensales === '' || v.comensales === null || v.comensales === undefined) {
        v.comensales = null;
      } else if (typeof v.comensales === 'string') {
        const n = Number(v.comensales.trim());
        v.comensales = Number.isNaN(n) ? v.comensales : n;
      }
    }

    return v;
  };

  
  const validar = async () => {
    const castValues = normalizeForValidation(values);
    try {
      await formSchema.validate(castValues, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationError) {
      const next = {};
      if (validationError?.inner?.length) {
        validationError.inner.forEach((e) => {
          if (!next[e.path]) next[e.path] = e.message;
        });
      } else if (validationError?.path) {
        next[validationError.path] = validationError.message;
      }
      setErrors(next);
      return false;
    }
  };

  
  const cargaContacto = [
    { controlId: 'formGridApellido',    formControl: { label: 'Apellido:',  type: 'text',  placeholder: 'Ingrese su Apellido', name: 'apellido' } },
    { controlId: 'formGridNombre',      formControl: { label: 'Nombre:',    type: 'text',  placeholder: 'Ingrese su Nombre',   name: 'nombre' } },
    { controlId: 'formGridEmail',       formControl: { label: 'Email:',     type: 'email', placeholder: 'usuario@ejemplo.com', name: 'email' } },
    { controlId: 'formGridTelefono',    formControl: { label: 'Telefono:',  type: 'text',  placeholder: 'Ej: 1123456789',      name: 'telefono' } },
    { controlId: 'formGridComentarios', tamaño: 12,   formControl: { label: 'Otros datos o comentarios:', as: 'textarea', rows: 4, name: 'comentarios' } },
    { controlId: 'formGridCheckboxReserva', tamaño: 12, formControl: { type: 'checkbox', name: 'reserva', label: '¡Quiero hacer una Reserva!' } },
  ];

  const cargaReserva = [
    { controlId: 'formGridFechaReserva', formControl: { label: 'Fecha de la Reserva:', type: 'date', name: 'fecha', min: hoyYYYYMMDD(), max: maxYYYYMMDD() } },
    { controlId: 'formGridHoraReserva',  formControl: { label: 'Hora de la Reserva:',  type: 'time', name: 'hora', min: '12:00', max: '22:00', step: 1800 } }, // cada 30'
    { controlId: 'formGridComensales',   formControl: { label: 'Cantidad de Personas:', type: 'text', placeholder: 'Max. 10 personas', name: 'comensales' } },
    { controlId: 'formGridCheckboxLugar', formControl: { label: 'Lugar:', type: 'radio', name: 'group1', inline: true } },
  ];

  const filasDatos = (datos) => (
    <Row className="mb-3">
      {datos.map((d, i) => {
        const name = d.formControl.name;
        return (
          <Form.Group key={d.controlId || i} as={Col} xs={d.tamaño || 6} controlId={d.controlId}>
            <FormInput
              {...d.formControl}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values[name]}
              errors={errors[name]}
              touched={touched[name]}
            />
          </Form.Group>
        );
      })}
    </Row>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const camposTouched = { ...touched };
    Object.keys(values).forEach((k) => (camposTouched[k] = true));
    setTouched(camposTouched);

    const ok = await validar();
    if (!ok) return;

    try {
      setSubmitting(true);
      
      await new Promise((r) => setTimeout(r, 500));

      const numero = Math.floor(100000 + Math.random() * 900000);
      const msg = values.reserva
        ? `¡Reserva creada! Nº ${numero} para el ${values.fecha} a las ${values.hora}. Te escribimos a ${values.email}.`
        : '¡Gracias! Recibimos tus datos de contacto.';

      setStatus({ type: 'success', msg });

      
      setValues({
        apellido: '',
        nombre: '',
        email: '',
        telefono: '',
        comentarios: '',
        reserva: false,
        fecha: '',
        hora: '',
        comensales: '',
        group1: 'Interior',
      });
      setErrors({});
      setTouched({});
    } catch {
      setStatus({ type: 'error', msg: 'No pudimos enviar la solicitud. Intentá nuevamente.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
      {status?.type === 'success' && <Alert variant="success" className="mb-3">{status.msg}</Alert>}
      {status?.type === 'error' && <Alert variant="danger" className="mb-3">{status.msg}</Alert>}

      {filasDatos(cargaContacto)}
      {values.reserva && filasDatos(cargaReserva)}

      <Row className="justify-content-center">
        <Boton
          variant="success"
          type="submit"
          disabled={submitting}
          style={{ width: '15%', marginTop: '30px' }}
          texto={values.reserva ? 'Enviar Solicitud' : 'Enviar Datos'}
        />
      </Row>
    </Form>
  );
};

export default ContactoYReserva;


// -----------------------------------------------------------------
// COMENTARIOS DE DESARROLLO - FORMULARIO DE CONTACTO Y RESERVA
// -----------------------------------------------------------------
// poner id a cada checkbox o radio -> hecho
// arreglar fecha -> arreglada con validacion y settings del browser para mostrar dd/mm/yyyy
// ver validaciones: apellido nombre -> agregar trim para evitar campos con espacios o solo espacios -> hecho en el schema
// telefono -> controlar que sea numerico y que empiece con 11 -> validado
// validar q la fecha sea posterior a la actual -> validado
// validar q la fecha no sea posterior a un año o periodo despues de la fecha actual -> validado
// poner una franja horaria -> validado
// poner ids a los map filasDatos, ver si se puede simplificar a un solo map -> hecho
// si se destilda el check de reserva borrar todos los campos de reserva -> arreglado
//-----------------------------------------------------------------
// ver si hay q resetear touched y errors y poder enviar solicitud -> hecho (se limpian correctamente)
// ver si es mas facil de hacer con useEffect -> aplicado para limpiar estados al destildar reserva
// achicar el ancho de los inputs -> hecho en cada componente (FormInput)
// mensaje de confirmacion con alert al enviar y limpiar formulario -> hecho
// mejorar el pasaje de props a los inputs -> optimizado
// ver si se puede cambiar de orden los props de los inputs en cargaContacto y cargaReserva -> revisado
// revisar el check radio q pide q sea componente controlado -> hecho, “group1” controlado desde state
