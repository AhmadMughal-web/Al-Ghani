import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("agToken") || null);

    useEffect(() => {
        const saved = localStorage.getItem("agUser");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const login = (userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);
        localStorage.setItem("agUser", JSON.stringify(userData));
        localStorage.setItem("agToken", tokenData);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("agUser");
        localStorage.removeItem("agToken");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);