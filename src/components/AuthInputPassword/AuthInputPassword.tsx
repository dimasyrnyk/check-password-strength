import React, { FC, useState } from "react";

import "./AuthInputPassword.scss";
import { ReactComponent as LockIcon } from "@assets/icons/lockIcon.svg";
import { ReactComponent as HidePasswordIcon } from "@assets/icons/hidePasswordIcon.svg";
import { ReactComponent as ShowPasswordIcon } from "@assets/icons/showPasswordIcon.svg";
import { calculatePasswordStrength } from "@utils/passwordStrength";
import PasswordStrengthIndicator from "@components/PasswordStrengthIndicator/PasswordStrengthIndicator";

const AuthInputPassword: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPassword(value);
    setStrength(calculatePasswordStrength(value));
  };

  const hadleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="auth-input__wrapper">
        <label
          className="auth-input__icon"
          htmlFor="auth-password"
        >
          <LockIcon />
        </label>
        <div className="auth-input">
          <input
            id="auth-password"
            className="auth-input__body"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChange}
            placeholder="Create password"
            autoComplete="off"
          />
          {showPassword ? (
            <HidePasswordIcon onClick={hadleShowPassword} />
          ) : (
            <ShowPasswordIcon onClick={hadleShowPassword} />
          )}
        </div>
      </div>
      <PasswordStrengthIndicator strength={strength} />
    </>
  );
};

export default AuthInputPassword;
