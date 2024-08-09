import { LogLevel } from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_signupsignin",
    forgotPassword: "B2C_1_reset"
  },
  authorities: {
    signUpSignIn: {
      authority: "https://airqualitydashboardlogin.b2clogin.com/airqualitydashboardlogin.onmicrosoft.com/B2C_1_signupsignin"
    },
    forgotPassword: {
      authority: "https://airqualitydashboardlogin.b2clogin.com/airqualitydashboardlogin.onmicrosoft.com/B2C_1_reset"
    }
  },
  authorityDomain: "airqualitydashboardlogin.b2clogin.com"
}

export const msalConfig = {
  auth: {
    clientId: "d4c9602a-0187-47df-a824-58c592af8d25",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "https://air-quality-dashboard-daycare.vercel.app/",
    postLogoutRedirectUri: 'https://air-quality-dashboard-daycare.vercel.app/',
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
            return;
        }
        switch (level) {
            case LogLevel.Error:
                console.error(message);
                return;
            case LogLevel.Info:
                console.info(message);
                return;
            case LogLevel.Verbose:
                console.debug(message);
                return;
            case LogLevel.Warning:
                console.warn(message);
                return;
            default:
                return;
        }
      }
    }
  }
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [],
};