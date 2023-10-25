import React from 'react';

function Login() {
    return (
        <div>
        <h2>Login</h2>
        {/* You can replace the dummy login form with your actual login form component */}
        <form>
            <label>
            Email:
            <input type="email" name="email" />
            </label>
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;