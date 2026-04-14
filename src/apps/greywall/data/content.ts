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
      'Process, network, mount, and user namespace isolation. Your agent runs in its own sandboxed world.',
    platform: 'linux',
  },
  {
    name: 'Landlock Filesystem',
    description:
      'Granular per-path read, write, and execute restrictions enforced at the kernel level.',
    platform: 'linux',
  },
  {
    name: 'Seccomp BPF',
    description:
      'Syscall-level filtering blocks 27+ dangerous system calls with deny-by-default policies.',
    platform: 'linux',
  },
  {
    name: 'eBPF Monitoring',
    description:
      'Real-time kernel-level observability traces every denied operation without performance overhead.',
    platform: 'linux',
  },
  {
    name: 'TUN + SOCKS5 Network',
    description:
      'Full network interception via transparent proxy with a live allow/deny dashboard.',
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
  { id: 'features', label: 'Features' },
  { id: 'agents', label: 'Agents' },
  { id: 'platform', label: 'Platform' },
  { id: 'install', label: 'Install' },
] as const
