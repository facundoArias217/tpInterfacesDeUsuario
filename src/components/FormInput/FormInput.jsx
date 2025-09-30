import {Form} from 'react-bootstrap';

const FormInput = ({value, touched, setFieldValue, handleChange, handleBlur, ...rest}) => {
    const componente = {
        radio:
            <div style={{margin:20}}>
                <Form.Label>{rest.label}</Form.Label>
                <div>
                    {['Interior', 'Exterior'].map((l, i) =>
                        <Form.Check
                            key={i}
                            {...rest}
                            label={l}
                            defaultChecked={i==0}
                        />
                    )}
                </div>
            </div>,
        checkbox:
            <Form.Check
                {...rest}
                checked={value}
                style={{margin:20}}
                onChange={(e) => {
                    setFieldValue(rest.name, e.target.checked)
                    if (!e.target.checked) {
                        setFieldValue('fecha', '');
                        setFieldValue('hora', '');
                        setFieldValue('comensales', '');   
                    }}
                }
            />
    }

    return (
        componente[rest.type] ??
            <div style={{margin:20}}>
                <Form.Label>{rest.label}</Form.Label>
                <Form.Control
                    {...rest}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched && !!rest.errors}
                />
                <Form.Control.Feedback type="invalid">{rest.errors}</Form.Control.Feedback>
            </div>
    )
};

export default FormInput;