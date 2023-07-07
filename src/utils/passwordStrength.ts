import { PasswordStrength } from "src/constants/auth";

export const calculatePasswordStrength = (value: string) => {
  const letter = (value.match(/[a-zA-Z]/g) || []).length;
  const num = (value.match(/[0-9]/g) || []).length;
  const specialSymbol = (value.match(/\W/g) || []).length;

  if (!value) {
    return "";
  }

  if (value.length < 8) {
    return PasswordStrength.SHORT;
  }

  if (letter && num && specialSymbol) {
    return PasswordStrength.STRONG;
  }

  if ((letter && num) || (letter && specialSymbol) || (num && specialSymbol)) {
    return PasswordStrength.MEDIUM;
  }

  return PasswordStrength.WEAK;
};
