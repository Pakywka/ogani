import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginRequest, useLoginMutation, useRegistrationMutation } from '../../../services/Auth';

import styles from './Auth.module.scss';
import { setCredentials } from '../../../store/authSlice';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formState, setFormState] = React.useState<LoginRequest>({
        email: '',
        password: '',
    });

    const [login, { isLoading }] = useLoginMutation();
    const [registration, {}] = useRegistrationMutation();

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState((prev) => ({ ...prev, [name]: value }));

    return (
        <div className="layout">
            <div className={styles.root}>
                <div className={styles.content}>
                    <div className={styles.headline}>{headline}</div>
                    <div className={styles.form}>
                        <input
                            onChange={handleChange}
                            name="email"
                            placeholder="Email"
                            type="text"
                        />
                        <input
                            onChange={handleChange}
                            name="password"
                            type="text"
                            placeholder="Password"
                        />
                        <button
                            onClick={async () => {
                                const response = await login(formState).unwrap();
                                localStorage.setItem('token', response.accessToken);
                                dispatch(setCredentials(response.user));
                                navigate('/');
                            }}
                            className="primary-btn">
                            {buttonSubmitText}
                        </button>
                        <button
                            onClick={async () => {
                                const response = await registration(formState).unwrap();
                                localStorage.setItem('token', response.accessToken);
                                dispatch(setCredentials(response.user));
                                navigate('/');
                            }}
                            className="primary-btn">
                            registration
                        </button>

                        <span>or</span>
                        <Link to={switchMethodPath} className="primary-btn">
                            {switchMethodText}
                        </Link>
                    </div>
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
