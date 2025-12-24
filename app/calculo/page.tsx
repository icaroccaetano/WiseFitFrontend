'use client';

import React from 'react';
import { PageLayout } from '@/components/ui/PageLayout';
import FormularioCutting from '@/components/FormularioCutting';

export default function CalculoPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#071A52] mb-2">Calculadora de Cutting</h1>
          <p className="text-[#071A52]/70">
            Preencha seus dados para calcularmos a quantidade ideal de calorias para o seu objetivo de perda de peso.
          </p>
        </div>
        <FormularioCutting />
      </div>
    </PageLayout>
  );
}
