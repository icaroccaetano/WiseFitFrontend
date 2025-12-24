'use client';

import React from 'react';
import { PageLayout } from '@/components/ui/PageLayout';
import FormularioMacros from '@/components/FormularioMacros';

export default function MacrosPage() {
    return (
        <PageLayout>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#071A52] mb-2">Calculadora de Macros</h1>
                    <p className="text-[#071A52]/70">
                        Descubra a distribuição ideal de nutrientes para atingir seu objetivo.
                    </p>
                </div>
                <FormularioMacros />
            </div>
        </PageLayout>
    );
}
