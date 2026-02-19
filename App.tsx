import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LinksModeScreen from './screens/LinksModeScreen';
import URLModeScreen from './screens/URLModeScreen';
import ModeSelectorSheet from './components/ModeSelectorSheet';

export default function App() {
  const [currentMode, setCurrentMode] = useState<'Links' | 'URL'>('Links');
  const [showModeSelector, setShowModeSelector] = useState(false);

  const handleModePress = () => {
    setShowModeSelector(true);
  };

  const handleSelectMode = (mode: 'Links' | 'URL') => {
    setCurrentMode(mode);
  };

  return (
    <SafeAreaProvider>
      {currentMode === 'Links' ? (
        <LinksModeScreen onModePress={handleModePress} />
      ) : (
        <URLModeScreen onModePress={handleModePress} />
      )}

      <ModeSelectorSheet
        visible={showModeSelector}
        currentMode={currentMode}
        onClose={() => setShowModeSelector(false)}
        onSelectMode={handleSelectMode}
      />
    </SafeAreaProvider>
  );
}
