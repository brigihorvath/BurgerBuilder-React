import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from '../Layout/Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={styles.content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;