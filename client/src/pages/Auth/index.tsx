import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Auth.module.scss';

type TemplateProps = {
    switchMethodPath: string;
    switchMethodText: string;
    headline: string;
    buttonSubmitText: string;
};

export const AuthLayout: FC<TemplateProps> = ({
    switchMethodPath,
    switchMethodText,
    headline,
    buttonSubmitText,
}) => {
    return (
        <div className="layout">
            <div className={styles.root}>
                <div className={styles.content}>
                    <div className={styles.headline}>{headline}</div>
                    <form>
                        <input type="text" />
                        <input type="text" />
                        <button className="primary-btn">{buttonSubmitText}</button>
                    </form>
                    <span>or</span>
                    <Link to={switchMethodPath} className="primary-btn">
                        {switchMethodText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const Login: FC = () => {
    return (
        <AuthLayout
            switchMethodPath="/Auth"
            switchMethodText="Auth"
            headline="Login"
            buttonSubmitText="Sign in"
        />
    );
};

export const Auth: FC = () => {
    return (
        <AuthLayout
            switchMethodPath="/Login"
            switchMethodText="Login"
            headline="Create an account"
            buttonSubmitText="Register"
        />
    );
};
