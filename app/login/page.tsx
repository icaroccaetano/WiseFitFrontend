'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login for now
        router.push('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#DCD9A7] p-4">
            <Card className="w-full max-w-md" title="Bem-vindo ao WiseFit">
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="text-center mb-8">
                        <p className="text-[#071A52]/70">Faça login para acessar sua jornada de saúde.</p>
                    </div>

                    <Input
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" fullWidth>
                        Entrar
                    </Button>

                    <div className="text-center mt-4">
                        <Link href="#" className="text-sm text-[#086972] hover:underline">
                            Esqueceu sua senha?
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
}
