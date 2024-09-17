export default function Information() {
    return (
        <div className="bg-gray-100 py-10">
            <div className="mx-auto max-w-4xl">
                <div className="overflow-x-auto">
                    <table className="min-w-full table-fixed border-collapse border border-gray-300">
                        <tbody>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Price</td>
                            <td className="px-4 py-2 text-gray-700">| 180 million JPY (negotiation possible only after visiting the real estate)</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Size</td>
                            <td className="px-4 py-2 text-gray-700">| 980 m² (738.90 + 241.39)</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Floors</td>
                            <td className="px-4 py-2 text-gray-700">| 3</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Number of rooms</td>
                            <td className="px-4 py-2 text-gray-700">| 21 (5 on the 1st floor and 8 on the 2nd and 3rd)</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Car parking</td>
                            <td className="px-4 py-2 text-gray-700">| 22</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Year Built</td>
                            <td className="px-4 py-2 text-gray-700">| February 1989</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Nearest station</td>
                            <td className="px-4 py-2 text-gray-700">| Kameoka (30 mins by train to Kyoto station)</td>
                        </tr>
                        <tr className="border-t border-gray-300">
                            <td className="px-4 py-2 text-gray-700 font-medium">Time to nearest station</td>
                            <td className="px-4 py-2 text-gray-700">| About 10 mins by walk</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
