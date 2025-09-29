import {Form} from 'react-bootstrap';

const FormInput = ({label, type, name, inline, values, setFieldValue, handleChange, handleBlur, touched, errors, placeholder, as, rows}) => {
    console.log(values)
    const componente = {
        radio:
            <div style={{margin:20}}>
                <Form.Label>{label}</Form.Label>
                <div>
                    {['Interior', 'Exterior'].map((l, i) => {
                        return (
                            <Form.Check key={i} {...{type, name, inline, label:l, defaultChecked:i==0}} />
                        )
                    })}
                </div>
            </div>,
        checkbox:
            <Form.Check
                {...{type, name, label, checked:values[name], style:{margin:20}}}
                onChange={(e) => {
                    setFieldValue(name, e.target.checked)
                    if (!e.target.checked) {
                        setFieldValue('fecha', '');
                        setFieldValue('hora', '');
                        setFieldValue('comensales', '');   
                    }}
                }
            />
    }

    return (
        componente[type] ??
            <div style={{margin:20}}>
                <Form.Label>{label}</Form.Label>
                <Form.Control {...{type, label, placeholder, as, rows, value:values[name], onChange:handleChange, onBlur:handleBlur, isInvalid:touched[name] && !!errors[name]}} />
                <Form.Control.Feedback type="invalid">
                    {errors[name]}
                </Form.Control.Feedback>
            </div>
    )
};

export default FormInput;