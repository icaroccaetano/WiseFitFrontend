'use client';

import React from 'react';
import Link from 'next/link';
import { PageLayout } from '@/components/ui/PageLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const features = [
    {
      title: 'Cálculo de Calorias',
      description: 'Descubra sua necessidade calórica diária para cutting, bulking ou manutenção.',
      link: '/calculo',
      icon: '🔥'
    },
    {
      title: 'Macros Diários',
      description: 'Calcule a distribuição ideal de proteínas, carboidratos e gorduras para seu objetivo.',
      link: '/macros',
      icon: '📊'
    },
    {
      title: 'Bioimpedância',
      description: 'Estime seu percentual de gordura corporal com base em medidas corporais.',
      link: '/bioimpedancia',
      icon: '⚖️'
    }
  ];

  return (
    <PageLayout>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#071A52] mb-4">
          Sua saúde com <span className="text-[#17B978]">Inteligência</span>
        </h1>
        <p className="text-xl text-[#071A52]/80 max-w-2xl mx-auto">
          Ferramentas precisas para você alcançar seus objetivos físicos com base em dados reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl mb-4 text-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-[#086972] mb-3 text-center">{feature.title}</h3>
            <p className="text-[#071A52]/70 mb-6 text-center flex-grow">
              {feature.description}
            </p>
            <Link href={feature.link} className="mt-auto">
              <Button fullWidth variant="outline">
                Acessar
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-[#086972] to-[#071A52] text-white border-none">
          <h2 className="text-3xl font-bold mb-4">Comece sua transformação hoje</h2>
          <p className="mb-8 opacity-90">
            Junte-se a milhares de usuários que já estão mudando de vida com o WiseFit.
          </p>
          <Link href="/login">
            <Button variant="primary" className="bg-[#17B978] text-white hover:bg-white hover:text-[#17B978]">
              Fazer Login / Cadastrar
            </Button>
          </Link>
        </Card>
      </div>
    </PageLayout>
  );
}
