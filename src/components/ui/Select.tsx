import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/shadcn/Select';
import Typography from '@/components/ui/Typography';

import type { SelectProps as ShadcnSelectProps } from '@radix-ui/react-select';
import type { LucideIcon } from 'lucide-react';

import type { Component } from '@/types';

interface SelectOptionProps {
  icon?: LucideIcon;
  label: string;
  value: string;
}

interface SelectProps extends ShadcnSelectProps {
  placeholder: string;
  options: SelectOptionProps[];
}

const Select: Component<SelectProps> = (props) => {
  const { placeholder, options, ...restProps } = props;

  return (
    <ShadcnSelect {...restProps}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => {
          const { icon: Icon, label, value } = option;

          return (
            <SelectItem key={label} value={value}>
              <div className="flex items-center gap-2">
                {Icon ? <Icon className="size-4" /> : null}
                <Typography as="span" variant="sm">
                  {label}
                </Typography>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </ShadcnSelect>
  );
};

export default Select;
