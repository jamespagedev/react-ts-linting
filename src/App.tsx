import React, { useEffect } from 'react';
import { Home } from 'src/views';
import { sleep } from 'src/utils';

function App() {
  useEffect(() => {
    const testTypeAny = async () => {
      try {
        await sleep(3000);
      } catch (error: any) {
        console.log('error:', error);
      }
    };
    testTypeAny();
  }, []);
  return <Home />;
}

export default App;
