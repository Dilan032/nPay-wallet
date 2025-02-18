import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Logo from './LoginLogo'
import LoginFooter from './LoginFooter'

export default function Login() {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            {/* login page logo component */}
            <Logo />

            {/* login card (shadcn/ui)*/}
            <Card className="w-full max-w-md p-6 md:m-auto m-2 shadow-lg  hover:drop-shadow-xl transition-all duration-300">
                <CardHeader>
                    {/* <CardTitle className="text-center text-3xl font-semibold text-blue-600">Welcome to <span className='text-blue-700 font-bold'>n</span><span className='text-black'>Pay Wallet</span></CardTitle> */}
                    <CardTitle className="text-center text-3xl font-semibold text-blue-600">Welcome <span className='text-black'>Back</span></CardTitle>
                    <CardDescription className="text-center text-gray-500">If You Have an Issue, We Are Here for You</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="username" className="text-black">Institute ID & User Name</Label>
                        <Input id="username" type="text" placeholder="XX - User name" className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="password" className="text-black">Password</Label>
                        <Input id="password" type="password" placeholder="▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪" className="mt-1" />
                    </div>
                    <Button className="w-full mt-2 shadow-lg shadow-indigo-500/40">Login</Button>
                </CardContent>
                <CardFooter className="text-center">
                    <p className="text-gray-600">Need Help Logging In? Call Us: <span className="text-blue-500">071 XXXXXXX</span></p>
                </CardFooter>
            </Card>
            {/* end login card */}

    
            {/* login page footer component*/}
            <LoginFooter />
            
        </div>
    )
}
