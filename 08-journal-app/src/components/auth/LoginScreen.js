import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useForm } from './../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from './../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch(); // darle acceso al dispatch

    const { loading } = useSelector(state => state.ui);
    const [values, handleInputChange] = useForm({
        email: 'brandom@gmail.com',
        password: '123456'
    })


    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }


    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }

    return (
        <>
            <h3 className="auth_title">Login</h3>

            <form className='animate__animated animate__fadeIn animate__faster' 
            onSubmit={handleLogin}>
                <input className="auth__input"
                    autoComplete='off'
                    type="text" placeholder="email" name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input className="auth__input"
                    autoComplete='off'
                    type="password" placeholder="Password" name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <button className='btn btn-primary btn-block'
                    type="submit" disabled={loading}>Login</button>

                <div className='auth__social-networks'>
                    <p>Login with Social networks</p>
                    <div className="google-btn"
                        onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className='link' to="/auth/register">
                    Create new account
                </Link>
            </form>
        </>
    )
}
