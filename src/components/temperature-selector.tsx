import React from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { SliderProps } from "@radix-ui/react-slider";

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

const TemperatureSelector = ({ defaultValue }: TemperatureSelectorProps) => {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Temperatura</Label>
        <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
          {value}
        </span>
      </div>

      <Slider
        min={0}
        max={1}
        step={0.1}
        defaultValue={value}
        onValueChange={setValue}
      />

      <span className="block text-xs text-muted-foreground italic leading-relaxed">
        Valores mais altos tendem deixar o resultado mais criativos e com
        possibilidade de mais erros.
      </span>
    </div>
  );
};

export default TemperatureSelector;
