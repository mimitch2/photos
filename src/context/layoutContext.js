import React from 'react';

const LayoutContext = React.createContext({ isThere: true });

export const LayoutProvider = LayoutContext.Provider;
export const LayoutConsumer = LayoutContext.Consumer;
export default LayoutContext;
