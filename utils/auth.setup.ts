import { request, FullConfig } from '@playwright/test';
import fs from 'fs';
import { envConfig } from '../config/env';

async function globalSetup(config: FullConfig) {
  console.log('🚀 Running API Auth Setup');

  const apiContext = await request.newContext();

  // ✅ Correct payload for THIS API
  const response = await apiContext.post(
    `${envConfig.baseURL}/api/ecom/auth/login`,
    {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        userEmail: envConfig.username,
        userPassword: envConfig.password
      })
    }
  );

  // ❌ Handle API failure
  if (!response.ok()) {
    const errorText = await response.text();
    console.log('❌ API FAILED RESPONSE:', errorText);
    throw new Error('Login API failed');
  }

  const responseBody = await response.json();

  console.log('📦 API RESPONSE:', responseBody);

  // ✅ Extract token safely
  const token =
    responseBody.token ||
    responseBody.data?.token ||
    responseBody.result?.token;

  if (!token) {
    throw new Error(
      `❌ Token not found in response: ${JSON.stringify(responseBody)}`
    );
  }

  console.log('✅ Token generated successfully');

  // ✅ Create auth state
  const storageState = {
    cookies: [],
    origins: [
      {
        origin: envConfig.baseURL,
        localStorage: [
          {
            name: 'token',
            value: token
          }
        ]
      }
    ]
  };

  fs.writeFileSync('auth.json', JSON.stringify(storageState, null, 2));

  console.log('💾 auth.json created successfully');
}

export default globalSetup;