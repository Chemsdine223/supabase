import type { McpClient, McpFeatureGroup } from './types'

export const FEATURE_GROUPS: McpFeatureGroup[] = [
  {
    id: 'docs',
    name: 'Documentation',
    description: 'Access project documentation and guides',
  },
  {
    id: 'account',
    name: 'Account',
    description: 'Manage account settings and preferences',
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Query and manage database schema and data',
  },
  {
    id: 'debugging',
    name: 'Debugging',
    description: 'Debug and troubleshoot issues',
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Development tools and utilities',
  },
  {
    id: 'functions',
    name: 'Functions',
    description: 'Manage and deploy Edge Functions',
  },
  {
    id: 'branching',
    name: 'Branching',
    description: 'Manage database branches',
  },
  {
    id: 'storage',
    name: 'Storage',
    description: 'Manage files and storage buckets',
  },
]

export const MCP_CLIENTS: McpClient[] = [
  {
    key: 'cursor',
    label: 'Cursor',
    icon: 'cursor',
    description: 'AI-powered code editor',
    docsUrl: 'https://docs.cursor.com/deeplinks',
    generateDeepLink: (config) => {
      const name = 'supabase'
      const base64Config = Buffer.from(JSON.stringify(config)).toString('base64')
      return `cursor://anysphere.cursor-deeplink/mcp/install?name=${name}&config=${encodeURIComponent(base64Config)}`
    },
  },
  {
    key: 'vscode',
    label: 'VS Code',
    icon: 'vscode',
    description: 'Visual Studio Code editor',
    docsUrl: 'https://code.visualstudio.com/mcp',
  },
  {
    key: 'windsurf',
    label: 'Windsurf',
    icon: 'windsurf',
    description: 'AI-powered development environment',
  },
  {
    key: 'claude',
    label: 'Claude Desktop',
    icon: 'claude',
    description: 'Claude AI desktop application',
  },
]

export const DEFAULT_BASE_URL = 'https://api.supabase.com/mcp'
