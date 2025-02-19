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
import Logo from '../../Logo'
import LoginFooter from './LoginFooter'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        let inputValue = e.target.value;

        // Allow user to clear input
        if (inputValue === "") {
            setValue("");
            setError("");
            return;
        }

        // Remove unwanted characters (only allow letters, numbers, and a single '-')
        inputValue = inputValue.replace(/[^0-9a-zA-Z-]/g, "");

        // Ensure that '-' is automatically inserted after two numbers
        if (/^\d{2}$/.test(inputValue)) {
            inputValue += "-";
        }

        // Validate: First two characters must be numbers
        if (inputValue.length >= 2 && (!/^\d{2}/.test(inputValue))) {
            setError("First two characters must be numbers.");
        } else {
            setError(""); // Clear error if valid
        }

        setValue(inputValue);
    };

    const handleLogin = () => {

        // authentication logic here
        navigate('/home');
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* Logo */}
            <div className="absolute md:top-5 top-28 left-5">
                <Logo className={"md:w-28 w-40 h-auto"} />
            </div>

            {/* Login Card */}
            <Card className="w-full max-w-md p-6 md:m-auto m-2 shadow-lg hover:drop-shadow-xl transition-all duration-300">
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
                            value={value}
                            onChange={handleChange}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" /> {error}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="password" className="text-black">Password</Label>
                        <Input id="password" type="password" placeholder="▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪" className="mt-1" />
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

            {/* Login Footer */}
            <LoginFooter />
        </div>
    );
}
