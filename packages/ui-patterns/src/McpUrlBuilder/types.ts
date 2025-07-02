export interface McpFeatureGroup {
  id: string
  name: string
  description: string
}

export interface McpClient {
  key: string
  label: string
  icon: string
  description: string
  docsUrl?: string
  externalDocsUrl?: string
  generateDeepLink?: (config: McpClientConfig) => string | null
}

export interface McpUrlBuilderConfig {
  projectRef: string
  readonly?: boolean
  features?: string[]
}

export interface McpClientConfig {
  mcpServers: {
    Supabase: {
      type: string
      url: string
    }
  }
}
