import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.Payslips.task',
  appName: 'Payslips',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
};

export default config;
