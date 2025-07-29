'use client';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '@/app/store/slices/loginSlice';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
    document.cookie = 'auth=true; path=/';

    setError('');
    dispatch(login());

    router.push('/');
  };

  return (
    <div className="flex items-center justify-start flex-col bg-bg-primary dark:bg-dark-bg-primary w-full min-h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-dark-bg-secondary mt-24 px-4 py-8 flex flex-col justify-center gap-4 rounded-md shadow-md shadow-gray-300 dark:shadow-black/50 w-[80%] md:w-[35%] min-w-[100px] border-gray-200 border-2 dark:border-none"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="dark:text-dark-text-primary">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="dark:bg-gray-600 h-8 rounded-md focus:outline-none p-2 dark:text-white border-gray-400 border-2 text-text-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="dark:text-dark-text-primary">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="dark:bg-gray-600 h-8 rounded-md focus:outline-none p-2 dark:text-white border-gray-400 border-2 text-text-primary"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-bg-secondary dark:bg-blue-600 text-bg-primary font-bold px-4 py-2 rounded-md cursor-pointer text-md text-center mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
