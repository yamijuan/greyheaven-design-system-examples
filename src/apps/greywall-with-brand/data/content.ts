export interface SecurityLayer {
  name: string
  description: string
  platform: 'linux' | 'both'
}

export interface SupportedAgent {
  name: string
  category: 'agent' | 'toolchain'
}

export interface InstallMethod {
  name: string
  command: string
  platform: string
}

export interface PlatformFeature {
  name: string
  linux: boolean
  macos: boolean
}

export const securityLayers: SecurityLayer[] = [
  {
    name: 'Bubblewrap Namespaces',
    description:
      'Process, network, mount, and user namespaces keep the agent separate from the rest of the host.',
    platform: 'linux',
  },
  {
    name: 'Landlock Filesystem',
    description:
      'Per-path read, write, and execute rules enforced by the kernel. Only the paths the agent needs are reachable.',
    platform: 'linux',
  },
  {
    name: 'Seccomp BPF',
    description:
      'Syscall filter that denies 27+ calls by default. The kernel refuses them before the agent process sees a result.',
    platform: 'linux',
  },
  {
    name: 'eBPF Monitoring',
    description:
      'Records every denied operation at the kernel level. Adds no measurable overhead in typical agent workloads.',
    platform: 'linux',
  },
  {
    name: 'TUN + SOCKS5 Network',
    description:
      'All outbound traffic routes through a transparent proxy with a live allow and deny dashboard.',
    platform: 'linux',
  },
]

export const supportedAgents: SupportedAgent[] = [
  { name: 'Claude Code', category: 'agent' },
  { name: 'Cursor', category: 'agent' },
  { name: 'Codex', category: 'agent' },
  { name: 'Aider', category: 'agent' },
  { name: 'Goose', category: 'agent' },
  { name: 'Amp', category: 'agent' },
  { name: 'Gemini CLI', category: 'agent' },
  { name: 'Cline', category: 'agent' },
  { name: 'GitHub Copilot', category: 'agent' },
  { name: 'OpenCode', category: 'agent' },
  { name: 'Kilo', category: 'agent' },
  { name: 'Auggie', category: 'agent' },
  { name: 'Droid', category: 'agent' },
]

export const installMethods: InstallMethod[] = [
  {
    name: 'Homebrew',
    command: 'brew tap greyhavenhq/tap && brew install greywall',
    platform: 'macOS',
  },
  {
    name: 'Shell Script',
    command:
      'curl -fsSL https://raw.githubusercontent.com/GreyhavenHQ/greywall/main/install.sh | sh',
    platform: 'Linux / macOS',
  },
  {
    name: 'Go Install',
    command: 'go install github.com/GreyhavenHQ/greywall@latest',
    platform: 'Any (with Go)',
  },
]

export const platformFeatures: PlatformFeature[] = [
  { name: 'Deny-by-default filesystem', linux: true, macos: true },
  { name: 'Syscall filtering', linux: true, macos: true },
  { name: 'Filesystem access control', linux: true, macos: true },
  { name: 'Violation monitoring', linux: true, macos: true },
  { name: 'Transparent proxy', linux: true, macos: false },
  { name: 'DNS capture', linux: true, macos: false },
  { name: 'Network isolation', linux: true, macos: false },
  { name: 'Learning mode', linux: true, macos: true },
  { name: 'PTY support', linux: true, macos: true },
]

export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'problem', label: 'Why' },
  { id: 'features', label: 'Layers' },
  { id: 'agents', label: 'Agents' },
  { id: 'platform', label: 'Platform' },
  { id: 'install', label: 'Install' },
] as const
