# Investor Announcements Module

This module provides API endpoints to fetch investor announcements data from Magnolia CMS.

## API Endpoints

### Get All Announcements (Paginated)

```
GET /api/investor-announcements?offset=0&limit=10
```

**Query Parameters:**

- `offset` (optional): Starting position, default: 0
- `limit` (optional): Number of results, default: 10

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 1,
    "offset": 0,
    "limit": 10,
    "results": [...]
  },
  "timestamp": "2025-12-18T00:00:00.000Z"
}
```

### Get Announcements by UUID

```
GET /api/investor-announcements/:uuid
```

**Example:**

```
GET /api/investor-announcements/1844e849-687d-463e-b4c4-5f0a36f9782c
```

**Response:**

```json
{
  "success": true,
  "data": {
    "total": 1,
    "offset": 0,
    "limit": 10,
    "results": [{
      "@id": "1844e849-687d-463e-b4c4-5f0a36f9782c",
      "title": "Announcements",
      "description": "<p>Our announcements...</p>",
      "headerA2": {...},
      "contentB9": {...},
      "downloadListF": {...}
    }]
  },
  "timestamp": "2025-12-18T00:00:00.000Z"
}
```

## TypeScript Types

The module includes comprehensive TypeScript types:

- `InvestorAnnouncementData` - Main announcement structure
- `HeaderA2` - Header component
- `ContentB9` - Content component
- `DownloadListF` - Download list with items
- `DownloadListFItem` - Individual download item
- `MagnoliaApiResponse<T>` - Generic Magnolia response wrapper

## Module Structure

```
modules/investor-announcements/
├── investor-announcements.types.ts      # TypeScript type definitions
├── investor-announcements.service.ts    # Business logic layer
├── investor-announcements.controller.ts # Request handlers
└── investor-announcements.routes.ts     # Route definitions
```

## Usage Example

```bash
# Get all announcements
curl http://localhost:4000/api/investor-announcements

# Get announcements with pagination
curl http://localhost:4000/api/investor-announcements?offset=0&limit=5

# Get specific announcement by UUID
curl http://localhost:4000/api/investor-announcements/1844e849-687d-463e-b4c4-5f0a36f9782c
```
