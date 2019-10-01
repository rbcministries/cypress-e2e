// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login',()=>{
  cy.server();
  cy.route({
    method: 'POST',
    url: 'https://cognito-idp.us-east-1.amazonaws.com/',
      headers:{
        'access-control-allow-origin':'*',
        'access-control-expose-headers':'x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date'
      },
      response: {
        "UserAttributes": [{"Name": "sub", "Value": "e5393a3f-346e-4cc3-8bc0-194fe7020a38"}, {
          "Name": "email_verified",
          "Value": "true"
        }, {"Name": "custom:wp_id", "Value": "2958964"}, {
          "Name": "custom:privacy_policy",
          "Value": "2019-05-29T13:09:41.932Z"
        }, {"Name": "locale", "Value": "US"}, {"Name": "given_name", "Value": "Chris"}, {
          "Name": "family_name",
          "Value": "Watts"
        }, {"Name": "email", "Value": "chris.watts@odb.org"}, {"Name": "custom:email_policy", "Value": "NA"}],
        "Username": "cjwatts07",
        "AuthenticationResult": {
          "AccessToken": "eyJraWQiOiJJbytKc0dNNWFYd0tUU0dxbUlUazJyTGp1ejF0d05Kd21HcjZDdEFZMThnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlNTM5M2EzZi0zNDZlLTRjYzMtOGJjMC0xOTRmZTcwMjBhMzgiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2U4ZTM5NmYxLTIzNzEtNGYyYi04YzI5LWY0OWE0NDk1Y2FlYSIsImNvZ25pdG86Z3JvdXBzIjpbIkFkbWlucyJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9YSk44aW1YOXYiLCJjbGllbnRfaWQiOiIyaXBoNHExNDBlcjdsbzEwN2tzZHQ1NjFlbyIsImV2ZW50X2lkIjoiOTU1NWZjNmMtOTY0OC00MmQ2LWI3NDUtZWI3NjZjYWUzOWViIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU2NDY3NzY0NSwiZXhwIjoxNTY0NjgxMjQ1LCJpYXQiOjE1NjQ2Nzc2NDUsImp0aSI6IjI5NzJhMmJlLTkxYWYtNDM3Yy1iMWYzLWMzYmQ0OWEyMTkwYyIsInVzZXJuYW1lIjoiY2p3YXR0czA3In0.j5bSCXAPyxjPLyy2KIb-92TIbo9Em9zscy8ppWooGR23uMpfsuv2T4IKZtp9STS3BcITeiiywhlZCGqxsJSlQb24oBC7KQI3EXjiUa0txTQb-qXLrh5k9adekgTajfcEynzEbvOzgp-psHvnJ3Al_TpGrIrSQfg80eQmFltR1W5TpzTvmqoP88BXP1NMz6muxRX8Aq9mH1q4DsxthqkLg4r4aJCbGfrG21HTcY0st9WXDhWtmBs-Ag0xQ4ClMVnTo3Iut3x2Of3uPReicay0eubog99z0pdf_9_7rdfTq2blxf-5GDJtwqscfm8Ab9-FEpYqYqTV7zlg0zZSqAMAag",
          "ExpiresIn": 3600,
          "IdToken": "eyJraWQiOiJWNG9kYTlHbDVBKzY2eVRKRys3QkdLTjIrRlZVWEprWUYxZVwvMTc3TFhodz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlNTM5M2EzZi0zNDZlLTRjYzMtOGJjMC0xOTRmZTcwMjBhMzgiLCJjb2duaXRvOmdyb3VwcyI6WyJBZG1pbnMiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImN1c3RvbTp3cF9pZCI6IjI5NTg5NjQiLCJjb2duaXRvOnByZWZlcnJlZF9yb2xlIjoiYXJuOmF3czppYW06OjA2ODIwNjAwMDU3Mjpyb2xlXC9EeW5hbW9BUEkiLCJjdXN0b206cHJpdmFjeV9wb2xpY3kiOiIyMDE5LTA1LTI5VDEzOjA5OjQxLjkzMloiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9YSk44aW1YOXYiLCJjb2duaXRvOnVzZXJuYW1lIjoiY2p3YXR0czA3IiwiZ2l2ZW5fbmFtZSI6IkNocmlzIiwibG9jYWxlIjoiVVMiLCJjdXN0b206ZW1haWxfcG9saWN5IjoiTkEiLCJjb2duaXRvOnJvbGVzIjpbImFybjphd3M6aWFtOjowNjgyMDYwMDA1NzI6cm9sZVwvRHluYW1vQVBJIl0sImF1ZCI6IjJpcGg0cTE0MGVyN2xvMTA3a3NkdDU2MWVvIiwiZXZlbnRfaWQiOiI5NTU1ZmM2Yy05NjQ4LTQyZDYtYjc0NS1lYjc2NmNhZTM5ZWIiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU2NDY3NzY0NSwiZXhwIjoxNTY0NjgxMjQ1LCJpYXQiOjE1NjQ2Nzc2NDUsImZhbWlseV9uYW1lIjoiV2F0dHMiLCJlbWFpbCI6ImNocmlzLndhdHRzQG9kYi5vcmcifQ.eB_LIThsUb_fb97qKbEeki7cYmfJdatJkjNvqVGhW9NRTnurG32igQnP9lgsrOZPoh3sTaassnA8Mn_SUp-pJ9Sqt-wFxBNu1Rr9tlD9Es2nXsrfwcA9dSFxc-5GTXTRRR6OiFFbRF8s5EHdXObNnCynVvZqGVE0An0cGyX3hY8H1BvvUCeEbCLUL6qq0E42BLmPM44xBp0S2CJVhSi_jzQwByUKG4URiQZtc3bZ2bGgkPaHV8BmoV5-Iz2UXmgLK9B3HU6_YrvRrZBROzsn8jdiUymVshI9PAVJZgR0ZmE1jR5-FFjaNmbf0MI-yXaCvYmhfufp4CKzbcrvlcCcIQ",
          "RefreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.lHjkEHN33lMnObnXm7IqfQnXsjgnuj2OXJOQCisq4sinELj6ErVMMYGTlmt_o7VxmkK9QgrSmxPxuElmg9d5O5GTM9sc8JM5zJFKbh7eaqo6qBlzvL0zScqUujwvuPA2SPv2teTIfZjJpAnFZwz9Pu19FVNuhFb-tUYviguuB9eDd82cHvZYBRKHxSEauaqcaCgNaf9N_3lff2YYE5LZG0-ulKRBsdskQutlCYj1fyk_Y8IpmPtEDRTRTrRTAvs6c7CsxKcqDnkNUhhLACFKxSwI0xnok75b3h0f-lxX4_8G96JiC64odVnE2uEKFTwA45tQeEonBjjUG-XElNTqpw.9TFienfAx-JBrnm9.ZfgWrQkLziOiFUNH3obD34WOsaOHQG4uNHIMLwxMiVo-7kQA1V_J-jpMw_c8ST7ROqKnNtrt6VWRpWeQy6Mi6gb-BCXq6xve2yuxmXTmmsmDSveGYBILtM2AbuGSyTGINHWvNC1_RqhiL_7F9g5Lgn7CRdXFrh0tFZc29rnQlsPF4yStOdipMbzmdYEXiLlVNJQvaYpSlPfBLkts-spnVU-vBZCFGlBm6XS82PudqTjpehIQnhPXUcwUdL30AqfQO4DT62akh8G2V4p1ngjiY_HSjWnxt5qEZcmMNrZ12Kswr0e3xk7NpSzpixzhPFfNg-hmz8bYJa7xtkz6R9oHPFfLwr6cc8w7qeYLdc9ZxA3v7FYFlfrQNTZFa8bwUXsYQfm_NLjD7PAcLgvrjknhXkOt9-5gMWYWIGmnm1UIU2C5c0Yo-wtcmEB_454pPhDV2R8DEvjQ1fFHZPFrBNymnAKki32D6zXldpl2jcZPQ9iErahBwzelVnwpk4e_uuViAWjPogf4iGIDZVa9naCZUvYPEUazhFNXw80GkTvwEkMx_RL8IBX1y299PaCtrqOn8leODASnrySYM8Exk6w8E_27lYMiJRt-NDEj0gVeBwZOBE1N6veBSnXT5h3RbzaLGT_i2disoHPYAe7X6H9CO_Vj-wB33V52cPncIfKVXbKCglHgcHjrj6DVZa2SVHcFMVN3GaNef2eWDC3QwJcVZZrOg3jdbTaX4rGxyRFpTLi3nUopiAODFcYDxa4Db0aEJPQ3hEOVTfwKtmznEP7ZXmzL83Oqme59SEu4jZ1gLRNFe0Q8B8Avv_lpqPK9ImzpIBV_8HgJx9fSN0ejshhhw2DNfsUJl1NPOebRuwrpg4SLGtpHKxHcgRquI4nUkdN4QXFf6oCpP-Hl8RSBUs7XigHMKqyoyDEa-9MkqrL0DoPfFaU_LcyUSbl9B4lr0UB-7KVuiFR1l6TVLYOahsoPHpLkPsbAb0OC2OjZuieIxp3ctNpWQkYo6IfYxUAp_mLRiwv_VkMTIRr0F8-3ohLUol-w416pvXCs6L8F0xjAXbCT_9Z6HBibMqskSboUy_2NAksoTwVIBWGysLrrCLcOguEJP0fRvPmYilz3mnXqk85TBQhGDYr9DWBGLLq8LTyO-w6kELr2f8caPFeqs4xminvwNd9KKP5IuwpnVhJyGckm3JnhVGott9isery5Xn9B7ZQCBTZmW6Jag7b-5p1pg01z2JR1GUW2uADHM9e5Haa-mNzu8xHDQGQcZIg_u-GaqqrKWdUgu3NKfEfJSF3vNwLFEvyYBflJ3z10GSidoCA1Q8-5tTlewxr21thPPZ8pReSAbfv3cB12rRmJPbxP39_6OD5MCAeMNP5QdTNpu0rpeCjEO2GAOR0h.bg2m6bB2TL5i3yZz7Bs3fA",
          "TokenType": "Bearer"
        }, "ChallengeParameters": {}
      }
  });
  cy.route( {
    method:'POST',
    url:'https://cognito-identity.us-east-1.amazonaws.com/',
      headers: {
        'access-control-allow-origin': '*',
        'access-control-expose-headers': 'x-amzn-RequestId,x-amzn-ErrorType,x-amzn-ErrorMessage,Date'
      },
      response: {
        "IdentityId": "us-east-1:e7975178-18a7-447a-b3d5-c6a83f054890",
        "Credentials": {
          "AccessKeyId": "ASIAQ7YLE7G6NEVC3JPN",
          "Expiration": 1564681246,
          "SecretKey": "7s/VfqM0pIopoW50G0Sc1kG3nPyrhN/86vBaAh57",
          "SessionToken": "AgoJb3JpZ2luX2VjEEkaCXVzLWVhc3QtMSJGMEQCIE8Nal1C8nqg+KGUbaf9VGXC/mXRzqoDUYkj3UZZlxzlAiBornt0ePT1MZ0oHDfYZ+DjquS8UAMC02uPcYQ2xS5Y8yqvBQjC//////////8BEAAaDDA2ODIwNjAwMDU3MiIM0h0xEW+10/zq2A4WKoMFfybvoxkuC0SYItsoKU1Oi6nxgCmojtpQE68Ha0iJGIJX23tyBQoN919IQIMMrWafkvXdBQTr6lXZRYVoVitw6FcmTyyeDk8fnpdluZu4mlLM9MZ3v4ae5iPo5L4ng6gMFcyPMyx/vq+vMZjqZX0kBx+kRUTvZHeUw5GFHIabj+kUc7gHeCk9FU4W/4Ihf1cNt322CJDsWSBN5tTq2C27kNhvarDjbNGUNEXmd/f9HKq/JXtprYgRdOU0rqlormgB0dxN1e1DiblUShsShfAnvksouJyxsvt19Nt+Bba/csKpqqxR1lnMALKnznhS44yGPB9hd9ym5di2qksCu7n1R6XzjEdZ9o/6HeoRpGc52yotwra6ftH1bqdnQzlVvZ07qBuBtHvaSclSkdxIrLcPCNFWNmVBQn34iIoJYXqrsyV/EJrGifjcpRpW6AkhEzG/EnnG4NvTk4f4M0DETeoacwnVYKURto43V8aM362nzD3lwSZdLCQsDP4UJT7gIzIStJdyasGNSQeBSgX1A4JQvH55iJIo0MUsXkB3TuMYT79E+0Td7stLReXlgkqFDgrcKj5LZvngig8KFobpBdHZ8WILtT4X54KtW3klejp/wDsanPY2dxzFXuVhnafJmWQOXKyf44Vb7hZHFZ4siLkvEv5E8GWJXpJNMxMubm+l7/1rNRUToDvEPRquAQHY+3G4M9xkoPYz/1lYvV7oAwQ0KJ3M/57QGk7EQjHmCNsvJ8Ho18mdnh5i/6SjhfON1MyEgTIFbA2YgKVjelRCRi0lHII2G89pgWY1dj7Q2sUCORseC5EK1rRaMN3itC+zg+OS1gcT5S1n5LBRsnyhcZihMcDT8DCOrIzqBTq1AT3km3KF5mjgCGVv6Ltj/wJSjRB5Y/5/CJlSF+VYbk2fFK2ohkO4Mvf5GN73SogZ+A2TOPCr5ChGN4vsPoky6jTiSllq+zFgeyIgcyjNA2SNr4O1x68SR3Z9suW26h0gA+PmjztWI8vtGxtR8UWflAO9AEaL8oQ2+D0xbbmdPYDY3gosXTiEJIU+ib3S36W2hRpfYE0w8b2rEJ8WbkfW0xjDPWTEYgGSgkJffVg4rqCr/pBJmec="
        }
      }
  });
  cy.get('.sign-in-link').click();
  cy.get('.signInButton').click();
  cy.get('#username').type('TESTUSER');
  cy.get('#password').type("TESTPASS");
  cy.get('.signInButton').click();
})
