import React, { forwardRef, useImperativeHandle } from 'react';

// import { Container } from './styles';

interface FromProps {
  initialData?: string;
}

export interface FormRef {
  submit(): void;
}

const Form: React.RefForwardingComponent<FormRef, FromProps> = (props, ref) => {
  function submit(){
    alert('submit');
  }

  useImperativeHandle(ref, () => ({
    submit
  }))

  return(
    <form action="">
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
      <input type="text"/>
    </form>
  )
}

export default forwardRef(Form);