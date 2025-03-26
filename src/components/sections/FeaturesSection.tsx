import FeatureCard from '../ui/FeatureCard';
import { forwardRef } from 'react';

type FeaturesSectionProps = object;

const FeaturesSection = forwardRef<HTMLDivElement, FeaturesSectionProps>((props, ref) => {
    const features = [
        {
            title: "Поиск рядом",
            description: "Находите ближайшие автомойки самообслуживания в 10 регионах России",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-info-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: "Кешбэк",
            description: "Накапливайте бонусы и оплачивайте ими следующие мойки",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-info-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Удобная оплата",
            description: "Оплачивайте услуги в приложении без ввода номера поста",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-info-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <div ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">ONVI — мойка с выгодой</h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Удобное приложение для поиска моек самообслуживания с кешбэком и бонусами
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;
