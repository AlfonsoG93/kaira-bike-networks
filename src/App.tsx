import { useState } from 'react';
import StationsList from './containers/StationList.tsx';
import NetworksList from './containers/NetworkList.tsx';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector.tsx';

function App() {
  const { t } = useTranslation();
  const [selectedNetworkId, setSelectedNetworkId] = useState<string | null>(
    null
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <LanguageSelector />
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 tracking-tight">
          {t('title')}
        </h1>

        {selectedNetworkId ? (
          <div>
            <button
              onClick={() => setSelectedNetworkId(null)}
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1.5 border border-blue-100 rounded-md shadow-sm hover:shadow transition"
            >
              {t('back')}
            </button>

            <StationsList networkId={selectedNetworkId} />
          </div>
        ) : (
          <NetworksList onSelect={(id) => setSelectedNetworkId(id)} />
        )}
      </div>
    </div>
  );
}

export default App;
