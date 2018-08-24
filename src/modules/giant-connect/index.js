import giantConnect from './giant-connect';
import mockProvider from './mock-provider/index';

if (process.env.NODE_ENV === 'development') {
  giantConnect.use(mockProvider());
} else {
  // giantConnect.use(mainnetProvider("http://192.168.0.1"));
}
