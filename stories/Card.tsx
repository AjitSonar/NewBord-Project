// Card.tsx
import React from 'react';
import {Card as Card234, CardHeader, CardBody, CardFooter} from "@heroui/react";


type CardProps = {
  title: string;
  content: string;
  footer?: React.ReactNode;
  shadow?: boolean;
};

export const Card: React.FC<CardProps> = ({ title, content, footer, shadow = true }) => {
  return (
    // <div className={`border rounded-lg p-4 ${shadow ? 'shadow-md' : ''}`}>
    //   <h2 className="text-lg font-semibold mb-2">{title}</h2>
    //   <p className="text-gray-700">{content}</p>
    //   {footer && <div className="mt-4 text-sm text-gray-500">{footer}</div>}
    // </div>
    

    <Card234 className={`border rounded-lg p-4 ${shadow ? 'shadow-md' : ''}`}>
    <CardHeader>{title}</CardHeader>
    <CardBody>
      {content ? content : 'This card is flexible and uses component composition to allow any layout.'}
    </CardBody>
    <CardFooter>
      {footer ? footer : '© 2025 OpenAI. All rights reserved.'}
    </CardFooter>
  </Card234>

  );
};
