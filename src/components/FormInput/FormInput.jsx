import {Form} from 'react-bootstrap';

const FormInput = (props) => {
    const componente = {
        radio:
            <div style={{margin:20}}>
                <Form.Label>{props.label}</Form.Label>
                <div>
                    {['Interior', 'Exterior'].map((l, i) => {
                        return (
                            <Form.Check key={i}
                                type={props.formControl.type}
                                name={props.formControl.name}
                                inline={props.formControl.inline}
                                label={l}
                                value={l}
                                defaultChecked={i==0}
                            />
                        )
                    })}
                </div>
            </div>,
        checkbox:
            <Form.Check
                type={props.formControl.type}
                name={props.formControl.name}
                label={props.formControl.label}
                checked={props.checked}
                style={{margin:20}}
                onChange={(e) => {
                    props.setFieldValue(props.formControl.name, e.target.checked)
                    if (!e.target.checked) {
                        props.setFieldValue('fecha', '');
                        props.setFieldValue('hora', '');
                        props.setFieldValue('comensales', '');   
                    }}
                }
            />
    }

    return (
        componente[props.formControl.type] ??
            <div style={{margin:20}}>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    {...props.formControl}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    isInvalid={props.isInvalid}
                />
                <Form.Control.Feedback type="invalid">
                    {props.errors}
                </Form.Control.Feedback>
            </div>
    )
};

export default FormInput;