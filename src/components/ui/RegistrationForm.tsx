"use client";
import React from "react";
import "@/styles/registrationForm.css";
import { Button } from "./button";

interface BaseFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
}

// Text Input
export interface TextInputProps extends BaseFieldProps {
  type?: React.HTMLInputTypeAttribute;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  required = false,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="form-field">
      <label className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="form-input"
      />
    </div>
  );
};

// Select Input
export interface SelectInputProps extends BaseFieldProps {
  options: string[];
}

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  required = false,
  placeholder,
  options,
}) => {
  return (
    <div className="form-field">
      <label className="form-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <select required={required} className="form-select">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// Text Area
export interface TextAreaProps extends BaseFieldProps {
  rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="form-field form-field--full">
      <label className="form-label">{label}</label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="form-textarea"
      />
    </div>
  );
};

// Form Section Wrapper
export interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="form-section">
      <h2 className="form-section__title">{title}</h2>
      <div className="form-section__grid">{children}</div>
    </section>
  );
};

// Registration Form (Layout Only)
export interface RegistrationFormProps {
  children: React.ReactNode;
  onCancel?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  children,
  onCancel,
}) => {
  return (
    <form className="registration-form">
      {children}

      <div className="form-actions">
        {/* <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Register
        </button> */}
      </div>
    </form>
  );
};

