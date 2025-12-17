# UOBKH Landing API - Magnolia Forwarding Service

A Node.js Express TypeScript REST API service that forwards requests to Magnolia CMS.

## Features

- 🚀 Express.js with TypeScript
- 🔄 API forwarding to Magnolia CMS
- 🛡️ Security with Helmet
- 🌐 CORS support
- 📝 Request logging with Morgan
- ⚡ Compression middleware
- 🎯 Error handling
- 🔧 Environment-based configuration

## Project Structure

```
uobkh-landing-nodejs/
├── src/
│   ├── config/
│   │   └── index.ts           # Configuration management
│   ├── middleware/
│   │   ├── error.middleware.ts    # Error handling
│   │   └── logger.middleware.ts   # Request logging
│   ├── routes/
│   │   └── api.routes.ts      # API routes
│   ├── services/
│   │   └── magnolia.service.ts    # Magnolia API client
│   ├── app.ts                 # Express app setup
│   └── index.ts               # Entry point
├── .env.example               # Environment variables template
├── .eslintrc.json            # ESLint configuration
├── .prettierrc.json          # Prettier configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## Prerequisites

- Node.js >= 18.x
- npm or yarn
- Magnolia CMS instance running

## Installation

1. Clone the repository and checkout the feature branch:
```bash
git checkout feature/api-forwarding-setup
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your `.env` file with your Magnolia CMS settings:
```env
PORT=3000
NODE_ENV=development
MAGNOLIA_BASE_URL=http://localhost:8080
MAGNOLIA_API_PATH=/magnoliaAuthor/.rest/delivery
CORS_ORIGIN=http://localhost:3001
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## API Endpoints

### Health Check
```
GET /api/health
```

Response:
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2025-12-17T16:23:56.000Z"
}
```

### Forward to Magnolia

All requests to `/api/magnolia/*` are forwarded to Magnolia CMS.

#### GET Request
```
GET /api/magnolia/pages/home
```

#### POST Request
```
POST /api/magnolia/forms/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### PUT Request
```
PUT /api/magnolia/content/123
Content-Type: application/json

{
  "title": "Updated Title"
}
```

#### DELETE Request
```
DELETE /api/magnolia/content/123
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment (development/production) | `development` |
| `MAGNOLIA_BASE_URL` | Magnolia CMS base URL | `http://localhost:8080` |
| `MAGNOLIA_API_PATH` | Magnolia REST API path | `/magnoliaAuthor/.rest/delivery` |
| `MAGNOLIA_TIMEOUT` | Request timeout in ms | `30000` |
| `CORS_ORIGIN` | Allowed CORS origin | `http://localhost:3001` |
| `API_PREFIX` | API route prefix | `/api` |

## Error Handling

The API includes comprehensive error handling:

- Magnolia API errors are properly formatted and returned with appropriate status codes
- All errors include the request path for debugging
- Development mode includes detailed error messages

Example error response:
```json
{
  "success": false,
  "error": "Magnolia API Error (404): Resource not found",
  "path": "/api/magnolia/pages/invalid"
}
```

## Development

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting

Run `npm run lint` to check for issues and `npm run format` to auto-format code.

### TypeScript

The project is configured with strict TypeScript settings for better type safety.

## License

ISC
