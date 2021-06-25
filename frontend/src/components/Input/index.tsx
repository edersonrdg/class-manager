import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return <input defaultValue={defaultValue} ref={inputRef} {...rest} />;
};

export default Input;
