import React, { createContext, useContext, ReactNode } from 'react';
import { AwilixContainer } from 'awilix';
import {getMainContainer} from './container';

type DependencyProviderProps = {
    children: ReactNode;
};

const container: AwilixContainer = getMainContainer();
// eslint-disable-next-line @typescript-eslint/naming-convention
const DependencyContext = createContext<AwilixContainer | null>(null);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DependencyProvider: React.FC<DependencyProviderProps> = ({ children }) => (
    <DependencyContext.Provider value={container}>
        {children}
    </DependencyContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useDependencies = () => {
    const context = useContext(DependencyContext);
    if (!context) {
        throw new Error('useDependencies must be used within a DependencyProvider');
    }
    return context;
};