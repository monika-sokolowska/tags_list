import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { useState } from "react";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/soho-light/theme.css";


interface InputIntegerProps {
  showButtons: boolean;
}

const InputInteger = ({ showButtons }: InputIntegerProps) => {
  const [number, setNumber] = useState<number>(0);

  return (
    <InputNumber
      inputId="integeronly"
      value={number}
      onValueChange={(e: InputNumberValueChangeEvent) => {
        if (e.value) setNumber(e.value);
      }}
      showButtons={showButtons}
      min={0}
      max={100}
    />
  );
};

export default InputInteger;
