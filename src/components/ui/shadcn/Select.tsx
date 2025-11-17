import {
  Content,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Viewport,
} from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import Typography from '@/components/ui/Typography';
import cn from '@/lib/cn';

import type {
  SelectContentProps,
  SelectItemProps,
  SelectLabelProps,
  SelectScrollDownButtonProps,
  SelectScrollUpButtonProps,
  SelectSeparatorProps,
  SelectTriggerProps,
} from '@radix-ui/react-select';

import type { Component } from '@/types';

const SelectTrigger: Component<SelectTriggerProps> = ({ className, children, ...props }) => (
  <Trigger
    className={cn(
      'flex w-full items-center justify-between rounded-md border border-gray-700 bg-slate-800 p-3.5 text-white ring-offset-background transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-green-500 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <Icon asChild>
      <ChevronDownIcon className="size-4 opacity-50" />
    </Icon>
  </Trigger>
);

const SelectScrollUpButton: Component<SelectScrollUpButtonProps> = ({ className, ...props }) => (
  <ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="size-4" />
  </ScrollUpButton>
);

const SelectScrollDownButton: Component<SelectScrollDownButtonProps> = ({
  className,
  ...props
}) => (
  <ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="size-4" />
  </ScrollDownButton>
);

const SelectContent: Component<SelectContentProps> = ({
  className,
  children,
  position = 'popper',
  ...props
}) => (
  <Portal>
    <Content
      position={position}
      className={cn(
        'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
);

const SelectLabel: Component<SelectLabelProps> = ({ className, ...props }) => (
  <Label className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)} {...props} />
);

const SelectItem: Component<SelectItemProps> = ({ className, children, ...props }) => (
  <Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm bg-gradient-to-r py-2 pl-8 pr-2 outline-none hover:from-green-500 hover:to-emerald-500 hover:text-white focus:from-green-500 focus:to-emerald-500 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <Typography
      as="span"
      className="absolute left-2 flex size-3.5 items-center justify-center"
      variant="content"
    >
      <ItemIndicator>
        <CheckIcon className="size-4" />
      </ItemIndicator>
    </Typography>
    <ItemText>{children}</ItemText>
  </Item>
);

const SelectSeparator: Component<SelectSeparatorProps> = ({ className, ...props }) => (
  <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
);

export { Group as SelectGroup, Root as Select, Value as SelectValue } from '@radix-ui/react-select';

export {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
};
