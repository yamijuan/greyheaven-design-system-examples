export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface Collection {
  id: string
  name: string
  endpoints: number
  updatedLabel: string
  collaborators: string[]
}

export interface Environment {
  id: string
  name: string
  variables: number
  baseUrl: string
  active: boolean
  region: string
}

export interface MockServer {
  id: string
  name: string
  collection: string
  url: string
  status: 'running' | 'paused' | 'degraded'
  latencyMs: number
  requestsToday: number
}

export interface HistoryEntry {
  id: string
  method: HttpMethod
  path: string
  statusCode: number
  latencyMs: number
  timestamp: string
  environment: string
}

export const collections: Collection[] = [
  {
    id: 'payment-gateway-v3',
    name: 'Payment_Gateway_V3',
    endpoints: 24,
    updatedLabel: 'Updated 2 hours ago',
    collaborators: ['AL', 'MR'],
  },
  {
    id: 'ecommerce-inventory',
    name: 'E-Commerce_Inventory',
    endpoints: 12,
    updatedLabel: 'Updated yesterday',
    collaborators: ['JH'],
  },
  {
    id: 'auth-service-internal',
    name: 'Auth_Service_Internal',
    endpoints: 8,
    updatedLabel: 'Updated 3 days ago',
    collaborators: ['SV', 'KT'],
  },
  {
    id: 'billing-webhooks',
    name: 'Billing_Webhooks',
    endpoints: 6,
    updatedLabel: 'Updated 5 days ago',
    collaborators: ['AL'],
  },
  {
    id: 'search-index-v2',
    name: 'Search_Index_V2',
    endpoints: 15,
    updatedLabel: 'Updated last week',
    collaborators: ['MR', 'JH', 'SV'],
  },
]

export const environments: Environment[] = [
  {
    id: 'global-edge',
    name: 'Global_Edge',
    variables: 18,
    baseUrl: 'https://mock.monadical.io/edge',
    active: true,
    region: 'global',
  },
  {
    id: 'us-east-1',
    name: 'US_East_Staging',
    variables: 24,
    baseUrl: 'https://mock-stg-us.monadical.io',
    active: true,
    region: 'us-east-1',
  },
  {
    id: 'eu-west-2',
    name: 'EU_West_Staging',
    variables: 22,
    baseUrl: 'https://mock-stg-eu.monadical.io',
    active: false,
    region: 'eu-west-2',
  },
  {
    id: 'local-dev',
    name: 'Local_Dev',
    variables: 31,
    baseUrl: 'http://localhost:4010',
    active: true,
    region: 'local',
  },
  {
    id: 'production-replay',
    name: 'Production_Replay',
    variables: 12,
    baseUrl: 'https://replay.monadical.io',
    active: false,
    region: 'us-east-1',
  },
]

export const mockServers: MockServer[] = [
  {
    id: 'ms-payments-v3',
    name: 'payments-v3',
    collection: 'Payment_Gateway_V3',
    url: 'https://mock.monadical.io/v3/payments',
    status: 'running',
    latencyMs: 24,
    requestsToday: 18420,
  },
  {
    id: 'ms-transactions',
    name: 'v3-transactions',
    collection: 'Payment_Gateway_V3',
    url: 'https://mock.monadical.io/v3/transactions',
    status: 'degraded',
    latencyMs: 142,
    requestsToday: 9021,
  },
  {
    id: 'ms-inventory',
    name: 'inventory-core',
    collection: 'E-Commerce_Inventory',
    url: 'https://mock.monadical.io/inventory',
    status: 'running',
    latencyMs: 31,
    requestsToday: 12008,
  },
  {
    id: 'ms-auth',
    name: 'auth-internal',
    collection: 'Auth_Service_Internal',
    url: 'https://mock.monadical.io/auth',
    status: 'running',
    latencyMs: 18,
    requestsToday: 7740,
  },
  {
    id: 'ms-search',
    name: 'search-index',
    collection: 'Search_Index_V2',
    url: 'https://mock.monadical.io/search',
    status: 'paused',
    latencyMs: 0,
    requestsToday: 0,
  },
]

export const history: HistoryEntry[] = [
  {
    id: 'h-01',
    method: 'POST',
    path: '/v3/transactions',
    statusCode: 201,
    latencyMs: 48,
    timestamp: '14:22:07',
    environment: 'Global_Edge',
  },
  {
    id: 'h-02',
    method: 'GET',
    path: '/v3/payments/pm_9Hk2',
    statusCode: 200,
    latencyMs: 22,
    timestamp: '14:21:54',
    environment: 'Global_Edge',
  },
  {
    id: 'h-03',
    method: 'POST',
    path: '/auth/token',
    statusCode: 200,
    latencyMs: 14,
    timestamp: '14:21:41',
    environment: 'US_East_Staging',
  },
  {
    id: 'h-04',
    method: 'DELETE',
    path: '/inventory/sku/SK-4421',
    statusCode: 204,
    latencyMs: 36,
    timestamp: '14:20:18',
    environment: 'Local_Dev',
  },
  {
    id: 'h-05',
    method: 'PATCH',
    path: '/v3/payments/pm_9Hk2',
    statusCode: 422,
    latencyMs: 61,
    timestamp: '14:19:02',
    environment: 'Global_Edge',
  },
  {
    id: 'h-06',
    method: 'GET',
    path: '/search?q=monitor',
    statusCode: 503,
    latencyMs: 1284,
    timestamp: '14:18:44',
    environment: 'US_East_Staging',
  },
  {
    id: 'h-07',
    method: 'PUT',
    path: '/auth/session/refresh',
    statusCode: 200,
    latencyMs: 19,
    timestamp: '14:17:22',
    environment: 'Local_Dev',
  },
  {
    id: 'h-08',
    method: 'GET',
    path: '/inventory/warehouses',
    statusCode: 200,
    latencyMs: 27,
    timestamp: '14:15:11',
    environment: 'Global_Edge',
  },
]
