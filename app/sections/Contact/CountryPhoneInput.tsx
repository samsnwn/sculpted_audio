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

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.startsWith('00')) {
      field.onChange({ ...field.value, countryCode: value });
    } else if (value.length > 0 && value[0] !== '+') {
      value = `+${value}`; // Prepend + sign if not present and doesn't start with '00'
      field.onChange({ ...field.value, countryCode: value });
    } else {
      field.onChange({ ...field.value, countryCode: value });
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, '');
    field.onChange({ ...field.value, number: numericValue });
  };

  return (
    <div className="flex space-x-2">
      <Input
        placeholder="+49"
        value={field.value?.countryCode}
        onChange={handleCountryCodeChange}
        className="flex-grow w-1/5"
      />
      <Input
        placeholder="1234567890"
        value={field.value?.number}
        onChange={handleNumberChange}
        className="flex-grow"
      />
    </div>
  );
};

export default CountryPhoneInput