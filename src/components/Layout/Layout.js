import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from '../Layout/Layout.module.css';

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={styles.content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;