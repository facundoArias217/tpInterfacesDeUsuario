import {Form} from 'react-bootstrap';

const FormInput = ({value, touched, setFieldValue, handleChange, handleBlur, ...rest}) => {
  const componente = {
    radio: (
      <div style={{ margin: 20 }}>
        <Form.Label>{rest.label}</Form.Label>
        <div>
          {['Interior', 'Exterior'].map((l, i) => {
            const id = `${rest.name}-${l.toLowerCase()}`;
            return (
              <Form.Check
                key={i}
                id={id}
                type="radio"
                name={rest.name}
                label={l}
                inline={rest.inline}
                checked={value === l}                 // <-- controlado
                onChange={() => setFieldValue(rest.name, l)} // <-- actualiza formik
              />
            );
          })}
        </div>
      </div>
    ),
    checkbox: (
      <Form.Check
        {...rest}
        checked={!!value}
        style={{ margin: 20 }}
        onChange={(e) => {
          setFieldValue(rest.name, e.target.checked);
          if (!e.target.checked) {
            setFieldValue('fecha', '');
            setFieldValue('hora', '');
            setFieldValue('comensales', '');
          }
        }}
      />
    ),
  };

  return (
    componente[rest.type] ?? (
      <div style={{ margin: 20 }}>
        <Form.Label htmlFor={rest.name}>{rest.label}</Form.Label>
        <Form.Control
          {...rest}
          id={rest.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={touched && !!rest.errors}
          value={value ?? ''} // evita uncontrolled
        />
        <Form.Control.Feedback type="invalid">{rest.errors}</Form.Control.Feedback>
      </div>
    )
  );
};

export default FormInput;
