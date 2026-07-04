// interface ButtonProps {
//     label: string;
//     onClick:() => void
// }
//  const Button = ({label, onClick}: ButtonProps) => {
//     return (
//         <button onClick={onClick}>{label}</button>
//     )
// }

// export default Button

// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  // Le type exact pour un événement de clic sur un bouton HTML en React :
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;