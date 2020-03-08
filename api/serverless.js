var {google} = require("googleapis");
const https = require('https')

const token = 'fCuxny4ZXifkb4mKy69cp4:APA91bFRLVCN3UTcQGpZ1AmMWuKvO1SfGJU18ECD8OcFL0SMEZ5Wvo3TslNIWnTmHCbve_7E93B2OsIZeI-Z8RyUYf24QsZk4PIHDBsyIH6w7EOl1p4CCB2qm-5_4echN9Tx4omdwyyh';

// Load the service account key JSON file.
// var serviceAccount = require("/Users/damodharan-2579/Pictures/Pokemon/burning-torch-917-a7ccf239b7f5.json");

var serviceAccount = {
    "type": "service_account",
    "project_id": "burning-torch-917",
    "private_key_id": "a7ccf239b7f512494025aa72cce7d1b1f19a9661",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDi75fXeCVdcK2M\nCTy28IWglEQ1fpZBE0DSO/TbWNzJV25Al9JlPg0SynmMLICMlm8APejCQLf+kUh6\nezErCCuw5Wv1Zz7bYzhb3oBSVvzbFgBQmLNGi+LzHo/k4yOgpXqqZ3r/0+cVQjK0\nRYI9oy1aqYo8Tesgmyu6OPunqeKFKL5jNlcCNownkildPidi+kTuqGfDn2oV+MmW\nPIKCQ5pd5FWjPXv8p+niAStUkzAb1y5i0UVk+CVSAFpKI4oKilp3Rt3LTPjWhwnL\nyupufG+ZbQlIq7aKX0tPrjH1M1QLMbxyskMVcCGwMoJGSgqUBvHOawtWFNGHuuUu\nRruUaCcrAgMBAAECggEAHUL8psVwt/g4AIcOY55m9Jo5o1YzxKdZY+JkQ8ZVDccu\nybhp4jEamXIvMxJn7vjUzkitUyLqNrKAEH8DC4Ptsk0a2xVZhwtnsHzjufpKd2uC\nVeIit7WA6Y1my4I4TVYZF5DpTMSDlvumsxUFYrJAPmD/GKCJcXZgsI35cRiYQ0gL\n/0iPRjBPcAxUfmF0wXmZo/yNZwFrdw9sztW2an2jwoJVu5fqE91vLH/jGWtA2M4A\nKPYg2fngDWvfr8dBcUGogDn7Ng2NnwoCt7qH0TXGvaxPmcCG516OP2lI+ERt9r60\ncck5XykoECbVGtiJw8Ez2y3WqlMNE9877/VvpT/4sQKBgQDzJ25ubDZ6nI4AK/er\nr8xPYMgR5YQalklSHOwPUuSP/tti+aAvs8IepgUJ0BVSWuizasFaULR4bH+ZkpVX\nCO3knEuU1Lt8S+kji8BC6m7KtgPAfIlkPZmA0qAKqO+CE6LAY54SXGjDoY3qTbKs\nDO8YzXcPb4wNyOn3f2rVYlesmwKBgQDu7NFUCA4Ln/Tcc4PLVHgw+S/r2g17cN/8\nlACxdqbIz3QPdZCVnkQVPqYfgkT/B6hdpT6fS56xap4HW7DCEdSiBxM7/wrqO8XC\nNUeayPgupvFXhLZCATxQHdruCmDdfRb0KuYbt6Jn2RYRQ1pLBkyGk8CQhK2HicrE\n9kQTzDJwsQKBgFpyXnegtRsixQd3U2d/uyYDwCg4Ec25/YgXzg9dLDwL9xt384gK\n+7he1RzzVBsQSeMDYOzxfFAXO9eqWPbJEYSqRssT3rG7ovtf7qJ1hcTNs9OT/59T\n8peiwXl1obHnD/E0nQYDbczneVygjkfFf+Lf+tu5CIXQKIex09GQBUDlAoGAVkVM\nkHsYFzp6v982B4VIoOZZV2A03g2z0w/d8DZXosrFrY9V1bCABOvKMDZpk2zAbo/s\nPLihZI6K4T1KZcjqblb/qvo8hrdugOGcKVfHxZCiNGfHJ64qiQM+uhUlRNSWJTQY\nQoncKoNIZJNdVxm/KBjRv10pC3fFr7j8e+mPjQECgYAdfmvFCTRIRuAIoC92SHrf\nPjUOwlyDzq1UrflraLcK1T8r2F7YCwfxVw15mBTMo9jX5bNIB1n0T86G3ObQ80K8\nnok76WTCYhGXlUOqr/Nv6JvexsCK7AQF3jVQsCHgW0CzeWGsX7lQnafVXByjLTkl\ni+3K2w+4GwEtEkqLDTAHGA==\n-----END PRIVATE KEY-----\n",
    "client_email": "burning-torch-917@appspot.gserviceaccount.com",
    "client_id": "",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/burning-torch-917%40appspot.gserviceaccount.com"
  }
  
// Define the required scopes.
var scopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/firebase.database",
  "https://www.googleapis.com/auth/firebase.messaging"
];

// Authenticate a JWT client with the service account.
var jwtClient = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  scopes
);

function reqForNotification(bearer, token) {

    const data = JSON.stringify({
        "message": {
          "notification": {
            "title": "Damo success daw 12 !!" + Math.random(),
            "body": "This is a message from FCM"
          },
          "token" : token
        },
    })
    
    const options = {
        hostname: 'fcm.googleapis.com',
        path: '/v1/projects/burning-torch-917/messages:send',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          'Authorization': 'Bearer ' + bearer
        }
    }
    
    var post_req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
    post_req.write(data);
    post_req.end();
    return post_req;
}

module.exports = (req, res) => {
  console.log(req);
  // Use the JWT client to generate an access token.
  jwtClient.authorize(function(error, tokens) {
    if (error) {
      console.log("Error making request to generate access token:", error);
    } else if (tokens.access_token === null) {
      console.log("Provided service account does not have permission to generate access tokens");
    } else {
      var accessToken = tokens.access_token;
      console.log(accessToken)
      reqForNotification(accessToken, token);
      // See the "Using the access token" section below for information
      // on how to use the access token to send authenticated requests to
      // the Realtime Database REST API.
    }
  });
  res.send({val: Math.PI})
}
