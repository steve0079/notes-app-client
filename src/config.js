const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "steve-0079-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ukmtwbwrxc.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_gEqU854WQ",
        APP_CLIENT_ID: "6usah1irnpsq4kr11co3v0mvek",
        IDENTITY_POOL_ID: "us-east-1:2cb23e22-a6f6-4203-b2c5-dc27e918cf57"
    }
}

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "steve-0079-notes-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ukmtwbwrxc.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_gEqU854WQ",
        APP_CLIENT_ID: "6usah1irnpsq4kr11co3v0mvek",
        IDENTITY_POOL_ID: "us-east-1:2cb23e22-a6f6-4203-b2c5-dc27e918cf57"
    }
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_NJvJkCnKUBUO3uLT4UrlZSjC00EypszFOT",
}