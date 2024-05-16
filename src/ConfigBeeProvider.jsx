"use client"
import React from 'react';
import { CbWrapper } from 'configbee-react';

const ConfigbeeProvider = ({ children }) => {
    // const environmentKey = process.env.REACT_APP_ENVIRONMENT_KEYS
  
    return (
    <CbWrapper
      accountId="65faad4d2b9d5037803dc957"
      projectId="6645eef9c74e1e76417022e0"
      environmentId ="6645eefac74e1e76417022e6"
    >
      {children}
    </CbWrapper>
  );
};

export default ConfigbeeProvider;