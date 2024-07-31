import React from 'react';

type WrapperProps = {
  children: React.ReactNode;
}


const Layout = ({children}: WrapperProps) => {
  return (
    <div>
      <p>현대카드 무이자 이벤트중</p>
      {children}
    </div>
  );
};

export default Layout;