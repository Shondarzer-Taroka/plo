





// import React, { useState } from 'react';
// import axios from 'axios';
// import { useUser } from './UserContext/UserContext';


// const LogIn = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState<string | null>(null);
//     const { setUser } = useUser();

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setError(null);

//         try {
//             const response = await axios.post(
//                 'http://localhost:5000/api/login',
//                 { email, password },
//                 { withCredentials: true }
//             );

//             // Update global user state
//             localStorage.setItem('user-token', JSON.stringify(response.data))
//             const user = localStorage.getItem('user-token')
//             console.log(user);
//             const parseUser= JSON.parse(user)
//             setUser(parseUser);

//             alert('Login successful!');
//         } catch (err: any) {
//             console.error('Error logging in:', err);
//             setError(err.response?.data?.message || 'An error occurred');
//         }
//     };

//     return (
//         <div>
//             <h2>Log In</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Log In</button>
//             </form>
//         </div>
//     );
// };

// export default LogIn;



import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext/UserContext';
import './LogIn.css'; // Add this for styles

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const { setUser } = useUser();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(
                'http://localhost:5000/api/login',
                { email, password },
                { withCredentials: true }
            );

            // Update global user state
            localStorage.setItem('user-token', JSON.stringify(response.data));
            const user = localStorage.getItem('user-token');
            const parseUser = JSON.parse(user!);
            setUser(parseUser);

            alert('Login successful!');
        } catch (err: any) {
            console.error('Error logging in:', err);
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Log In</h2>
            {error && <p className="login-error">{error}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group ">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className=''>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LogIn;
