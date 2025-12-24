'use client';

import React from 'react';
import { PageLayout } from '@/components/ui/PageLayout';
import FormularioBioimpedancia from '@/components/FormularioBioimpedancia';

export default function BioimpedanciaPage() {
    return (
        <PageLayout>
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#071A52] mb-2">Calculadora de Bioimpedância</h1>
                    <p className="text-[#071A52]/70">
                        Estime seu percentual de gordura corporal utilizando medidas simples.
                    </p>
                </div>
                <FormularioBioimpedancia />
            </div>
        </PageLayout>
    );
}
