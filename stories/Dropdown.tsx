import React, { useState, useMemo } from 'react';
import {
  Dropdown as Dropdown1,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  label?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label = 'Select an option',
  options,
  defaultValue,
  disabled = false,
  onChange,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    defaultValue ? new Set([defaultValue]) : new Set()
  );

  const selectedValue = useMemo(() => {
    const selectedKey = Array.from(selectedKeys)[0];
    return options.find((opt) => opt.value === selectedKey)?.label || label;
  }, [selectedKeys, options, label]);

  const handleSelectionChange = (keys: React.Key | Set<React.Key>) => {
    const keyArray = keys instanceof Set ? Array.from(keys) : [keys];
    const newKey = keyArray[0]?.toString();
    setSelectedKeys(new Set([newKey]));
    onChange?.(newKey);
  };
  

  return (
    <div>
      <Dropdown1>
        <DropdownTrigger>
          <Button className="capitalize" variant="bordered" disabled={disabled}>
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Dropdown"
          selectedKeys={selectedKeys}
          selectionMode="single"
          variant="flat"
          onSelectionChange={handleSelectionChange}
        >
          {options.map((option) => (
            <DropdownItem key={option.value}>{option.label}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown1>
    </div>
  );
};
