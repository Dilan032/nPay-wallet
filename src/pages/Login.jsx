import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Logo from '../components/Logo'
import LoginFooter from '../components/pageComponents/login/LoginFooter'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from "lucide-react";
import Swal from 'sweetalert2'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleUsernameChange = (e) => {
        let inputValue = e.target.value;

        if (inputValue === "") {
            setUsername("");
            setError("");
            return;
        }

        inputValue = inputValue.replace(/[^0-9a-zA-Z-]/g, "");

        if (/^\d{2}$/.test(inputValue)) {
            inputValue += "-";
        }

        if (inputValue.length >= 2 && (!/^\d{2}/.test(inputValue))) {
            setError("First two characters must be numbers.");
        } else {
            setError("");
        }

        setUsername(inputValue);
    };

    const handleLogin = () => {
        if (username === "" || password === "") {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "Please fill all the fields."
              });
            return;
        }

        if (username === "00-admin" && password === "abc") {
            navigate('/admin'); // Redirect to Admin Page
        } else {
            navigate('/home'); // Redirect to User Page
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="absolute md:top-5 top-28 left-5 z-10">
                <Logo className={"md:w-28 w-40 h-auto"} />
            </div>

            <Card className="z-0 w-full max-w-md p-6 md:m-auto m-2 shadow-lg hover:drop-shadow-xl transition-all duration-300">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-semibold text-blue-600">
                        Welcome <span className='text-black'>Back</span>
                    </CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        If You Have an Issue, We Are Here for You
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="username" className="text-black">
                            Institute ID & User Name
                        </Label>
                        <Input
                            id="username"
                            type="text"
                            placeholder="XX - User name"
                            className="mt-1"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="password" className="text-black">Password</Label>
                        <Input 
                            id="password" 
                            type="password" 
                            placeholder="▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪" 
                            className="mt-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button className="w-full mt-2 shadow-lg shadow-indigo-500/40" onClick={handleLogin}>
                        Login
                    </Button>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-gray-600">
                        Need Help Logging In? Call Us: <span className="text-blue-500">071 XXXXXXX</span>
                    </p>
                </CardFooter>
            </Card>

            <LoginFooter />
        </div>
    );
}
