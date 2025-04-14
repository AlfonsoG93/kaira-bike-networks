import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import StationsList from './containers/StationList';
import NetworksList from './containers/NetworkList';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [selectedNetworkId, setSelectedNetworkId] = useState<string | null>(
    null
  );
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <LanguageSelector />
        <h1 className="heading-main">{t('title')}</h1>
        {selectedNetworkId ? (
          <div>
            <button
              onClick={() => setSelectedNetworkId(null)}
              className="btn-secondary"
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
