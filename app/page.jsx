import Information from 'components/information';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Real Estate in Japan for Sale</h1>
                <p className="text-lg">Some more information will come soon.</p>
                <div>
                    <Information />
                </div>
            </section>
        </main>
    );
}
