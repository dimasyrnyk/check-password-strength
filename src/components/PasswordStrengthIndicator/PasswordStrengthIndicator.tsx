import { FC } from "react";

import "./PasswordStrengthIndicator.scss";

type Props = {
  strength: string;
};

const PasswordStrengthIndicator: FC<Props> = ({ strength }) => {
  return (
    <div
      className="password-strength"
      data-strength={strength}
    >
      <div className="password-strength__body">
        <span className="password-strength__bar1"></span>
        <span className="password-strength__bar2"></span>
        <span className="password-strength__bar3"></span>
      </div>
      <p className="password-strength__description">{strength}</p>
    </div>
  );
};

export default PasswordStrengthIndicator;
