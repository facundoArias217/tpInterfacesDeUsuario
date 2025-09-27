import {Form} from 'react-bootstrap';

const FormInput = (props) => {
    const componente = {
        radio:
            <div>
                <Form.Label>{props.label}</Form.Label>
                <div>
                    {['Interior', 'Exterior'].map((l, i) => <Form.Check key={i} type={props.formControl.type} name={props.formControl.name} inline={props.formControl.inline} label={l} defaultChecked={i==0} />)}
                </div>
            </div>,
        checkbox:<Form.Check type={props.formControl.type} name={props.formControl.name} label={props.formControl.label} checked={props.checked} onChange={props.onChange} />
    }

    return componente[props.formControl.type] ??
        <div>
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
};

export default FormInput;