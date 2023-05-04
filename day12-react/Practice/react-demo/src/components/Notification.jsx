/** @format */

import { Button, Divider, notification } from 'antd';
import React, { useMemo } from 'react';
const Context = React.createContext({
  name: 'Default',
});
const Notification = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    []
  );
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Button type="primary" onClick={() => openNotification('topRight')}>
        topRight
      </Button>
      <Divider />
    </Context.Provider>
  );
};
export default Notification;
