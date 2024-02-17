import React, { forwardRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormErrors } from "./form-errors";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
  labelClassName?:string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      className,
      defaultValue,
      disabled,
      errors,
      label,
      onBlur,
      placeholder,
      required,
      type,
      labelClassName
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className={cn("font-semibold text-neutral-700", labelClassName)}
            >
              {label}
            </Label>
          ) : null}
          <Input
            onBlur={onBlur}
            defaultValue={defaultValue}
            ref={ref}
            required={required}
            name={id}
            id={id}
            placeholder={placeholder}
            type={type}
            disabled={pending || disabled}
            className={cn(
              "text-sm px-2 py-1 h-9",
              className,
              errors?.title
                ? "focus-visible:!border-rose-600 focus-visible:ring-2 focus-visible:ring-rose-300/50"
                : ""
            )}
            aria-describedby={`${id}-error`}
          />
        </div>
        {errors ? <FormErrors id={id} errors={errors} /> : null}
      </div>
    );
  }
);
