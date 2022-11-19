import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </div>
  );
};

export default Layout;
