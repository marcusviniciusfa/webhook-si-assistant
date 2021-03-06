module.exports = {
  apps: [{
    name: 'si-assistant',
    script: './dist/index.js',
    exec_mode: 'cluster',
    exp_backoff_restart_delay: 100,
    env_development: {
      NODE_ENV: 'Development',
      CLIENT_ID: '236409072737-e8nuea9mg7d1cjmirpena427pgs967gp.apps.googleusercontent.com',
      DB_NAME: 'si_assistant',
      DB_URI: 'mongodb+srv://university_projects:D3dPVzgrPIguR8Up@databases.zvski.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      DB_USER: 'university_projects',
      DB_PASS: 'D3dPVzgrPIguR8Up',
      PORT: 3000,
      SIGAA_URL: 'https://sigaa.ufpb.br',
      SIGAA_INSTITUITION: 'UFPB',
    },
    env_production: {
      NODE_ENV: 'Production',
      CLIENT_ID: '236409072737-e8nuea9mg7d1cjmirpena427pgs967gp.apps.googleusercontent.com',
      DB_NAME: 'si_assistant',
      DB_URI: 'mongodb+srv://university_projects:D3dPVzgrPIguR8Up@databases.zvski.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      DB_USER: 'university_projects',
      DB_PASS: 'D3dPVzgrPIguR8Up',
      PORT: 3000,
      SIGAA_URL: 'https://sigaa.ufpb.br',
      SIGAA_INSTITUITION: 'UFPB',
    },
  }],
};
