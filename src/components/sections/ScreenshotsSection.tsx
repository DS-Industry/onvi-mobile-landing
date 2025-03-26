import Image from 'next/image';
import AppScreen1 from 'public/images/AppScreen1.jpg'
import AppScreen2 from 'public/images/AppScreen2.jpg'
import AppScreen3 from 'public/images/AppScreen3.jpg'
import AppScreen4 from 'public/images/AppScreen4.jpg'


const IMG_SET: Record<string, typeof AppScreen1> = {
    'AppScreen1': AppScreen1,
    'AppScreen2': AppScreen2,
    'AppScreen3': AppScreen3,
    'AppScreen4': AppScreen4,
}

export default function ScreenshotsSection() {
    return (
        <div className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Простой и удобный интерфейс</h2>
                    <p className="mt-4 text-xl text-gray-600">Приложение разработано с учетом потребностей автомобилистов</p>
                </div>

                {/* Screenshots Carousel/Grid */}
                <div className="flex overflow-x-auto gap-6 pb-8 snapshots-container">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex-shrink-0 w-64 md:w-72 relative">
                            <div className="bg-black rounded-3xl p-2 shadow-xl">
                                <Image
                                    src={IMG_SET[`AppScreen${num}`]}
                                    alt={`App Screenshot ${num}`}
                                    width={300}
                                    height={600}
                                    className="rounded-2xl h-[500px] w-full object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
