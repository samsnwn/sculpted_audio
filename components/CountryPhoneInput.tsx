import { useState } from "react";
import { Input } from "@/components/ui/input"; // Adjust according to your imports

const CountryPhoneInput = ({ field }: any) => {
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