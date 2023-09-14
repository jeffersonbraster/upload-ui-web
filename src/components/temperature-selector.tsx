import { useState } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { SliderProps } from "@radix-ui/react-slider";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"];
  onValueChange: (value: number[]) => void;
}



const TemperatureSelector = ({ defaultValue, onValueChange }: TemperatureSelectorProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (temp: number[]) => {
    setValue(temp);
    onValueChange(temp)
  };

  return (
    <div className="grid gap-2 pt-1">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="temperature">Temperatura</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value}
              </span>
            </div>
            <Slider
              min={0}
              max={1}
              step={0.1}
              value={value}
              defaultValue={value}
              onValueChange={handleValueChange}
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          <span className="block text-xs text-muted-foreground italic leading-relaxed">
            Valores mais altos tendem deixar o resultado mais criativos e com
            possibilidade de mais erros.
          </span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default TemperatureSelector;
