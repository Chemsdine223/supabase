import { useMemo } from 'react'
import type { McpClientConfig } from '../types'

interface UseMcpUrlOptions {
  projectRef: string
  baseUrl?: string
  readonly?: boolean
  features?: string[]
}

interface UseMcpUrlReturn {
  mcpUrl: string
  clientConfig: McpClientConfig
}

export function useMcpUrl({
  projectRef,
  baseUrl = 'https://api.supabase.com/mcp',
  readonly = false,
  features = [],
}: UseMcpUrlOptions): UseMcpUrlReturn {
  // Generate the MCP URL based on current configuration
  const mcpUrl = useMemo(() => {
    const url = new URL(baseUrl)
    url.searchParams.set('project_ref', projectRef)

    if (readonly) {
      url.searchParams.set('readonly', 'true')
    }

    if (features.length > 0) {
      url.searchParams.set('features', features.join(','))
    }

    return url.toString()
  }, [baseUrl, projectRef, readonly, features])

  // Generate client-specific configuration
  const clientConfig: McpClientConfig = useMemo(() => {
    return {
      mcpServers: {
        Supabase: {
          type: 'http',
          url: mcpUrl,
        },
      },
    }
  }, [mcpUrl])

  return {
    mcpUrl,
    clientConfig,
  }
}
