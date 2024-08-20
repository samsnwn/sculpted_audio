import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FieldValues, UseControllerProps } from 'react-hook-form';

interface PhoneField {
  countryCode?: string;
  number?: string;
}

interface CountryPhoneInputProps<T extends FieldValues> {
  field: UseControllerProps<T> & {
    value?: PhoneField;
    onChange: (value: PhoneField) => void;
  };
}

const CountryPhoneInput = <T extends FieldValues>({ field }: CountryPhoneInputProps<T>) => {
  const [countryCode, setCountryCode] = useState(field.value?.countryCode);

  return (
    <div className="flex space-x-2">
      <Input
        placeholder="+49"
        value={countryCode}
        onChange={(e) => {
          setCountryCode(e.target.value);
          field.onChange({ ...field.value, countryCode: e.target.value });
        }}
        className="flex-grow w-1/6"
      />
      <Input
        placeholder="14212345678"
        value={field.value?.number}
        onChange={(e) => field.onChange({ ...field.value, number: e.target.value })}
        className="flex-grow"
      />
    </div>
  );
};

export default CountryPhoneInput