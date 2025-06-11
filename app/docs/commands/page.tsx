import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Terminal,
  GitBranch,
  Sparkles,
  FileText,
  FolderOpen,
  Copy,
  Activity,
  Wifi,
  Lock,
  Calculator,
  BarChart3,
  Cloud,
  Calendar,
  Gamepad2,
  Bot,
  TrendingUp,
  Play,
  History,
  Undo,
  Archive,
  Shield,
  LayoutDashboard,
  Merge,
  Mic,
  Bell,
  WifiOff,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Commands | PyShell Documentation",
  description:
    "Complete reference of all available PyShell commands including standard operations, Git integration, and unique features",
}

const standardCommands = [
  { name: "rename", description: "Rename files and directories", icon: FileText, category: "File Operations" },
  { name: "move", description: "Move files and directories", icon: FolderOpen, category: "File Operations" },
  { name: "copy", description: "Copy files and directories", icon: Copy, category: "File Operations" },
  { name: "processes", description: "List running processes", icon: Activity, category: "System" },
  { name: "kill", description: "Terminate processes", icon: Activity, category: "System" },
  { name: "network", description: "Network information and tools", icon: Wifi, category: "Network" },
  { name: "copytext", description: "Copy text to clipboard", icon: Copy, category: "Utilities" },
  { name: "paste", description: "Paste from clipboard", icon: Copy, category: "Utilities" },
  { name: "password", description: "Generate secure passwords", icon: Lock, category: "Security" },
  { name: "calc", description: "Basic calculator operations", icon: Calculator, category: "Math" },
  { name: "stats", description: "System statistics", icon: BarChart3, category: "System" },
  { name: "equation", description: "Solve mathematical equations", icon: Calculator, category: "Math" },
  { name: "differential", description: "Differential equation solver", icon: Calculator, category: "Math" },
  { name: "math-help", description: "Mathematical help and formulas", icon: Calculator, category: "Math" },
  { name: "weather", description: "Weather information", icon: Cloud, category: "Information" },
  { name: "schedule", description: "Schedule tasks and reminders", icon: Calendar, category: "Productivity" },
  { name: "tasks", description: "Manage tasks and to-dos", icon: Calendar, category: "Productivity" },
  { name: "unscheduled", description: "View unscheduled tasks", icon: Calendar, category: "Productivity" },
  { name: "stop", description: "Stop running operations", icon: Activity, category: "System" },
  { name: "cls", description: "Clear terminal screen", icon: Terminal, category: "Terminal" },
  { name: "terminal", description: "Terminal operations", icon: Terminal, category: "Terminal" },
  { name: "game", description: "Built-in games and entertainment", icon: Gamepad2, category: "Entertainment" },
  { name: "pybot", description: "AI assistant integration", icon: Bot, category: "AI" },
  { name: "plot", description: "Data visualization and plotting", icon: TrendingUp, category: "Visualization" },
  { name: "exit", description: "Exit PyShell", icon: Terminal, category: "Terminal" },
]

const gitCommands = [
  { name: "git-status", description: "Show repository status", icon: GitBranch, category: "Status" },
  { name: "git-branches", description: "List all branches", icon: GitBranch, category: "Branches" },
  { name: "git-create", description: "Create new branch", icon: GitBranch, category: "Branches" },
  { name: "git-switch", description: "Switch between branches", icon: GitBranch, category: "Branches" },
  { name: "git-push", description: "Push changes to remote", icon: GitBranch, category: "Remote" },
  { name: "git-pull", description: "Pull changes from remote", icon: GitBranch, category: "Remote" },
  { name: "git-merge", description: "Merge branches", icon: Merge, category: "Branches" },
  { name: "git-delete", description: "Delete branches", icon: GitBranch, category: "Branches" },
  { name: "git-clone", description: "Clone repositories", icon: GitBranch, category: "Repository" },
  { name: "git-add", description: "Stage changes", icon: GitBranch, category: "Staging" },
  { name: "git-commit", description: "Commit changes", icon: GitBranch, category: "Staging" },
]

const uniqueGitFeatures = [
  { name: "play", description: "Interactive Git playground", icon: Play, category: "Interactive" },
  { name: "git-smart", description: "AI-powered Git suggestions", icon: Sparkles, category: "AI" },
  { name: "git-help", description: "Contextual Git help", icon: GitBranch, category: "Help" },
  { name: "git-history", description: "Visual commit history", icon: History, category: "History" },
  { name: "git-undo", description: "Smart undo operations", icon: Undo, category: "Recovery" },
  { name: "git-stash", description: "Enhanced stash management", icon: Archive, category: "Stashing" },
  { name: "git-recover", description: "Recover lost commits", icon: Shield, category: "Recovery" },
  { name: "git-dashboard", description: "Git repository dashboard", icon: LayoutDashboard, category: "Visualization" },
  { name: "git-auto_merge", description: "Automated merge resolution", icon: Merge, category: "Automation" },
  { name: "git-voice", description: "Voice-controlled Git operations", icon: Mic, category: "Voice" },
  { name: "git-reminder", description: "Git task reminders", icon: Bell, category: "Productivity" },
  { name: "git-offline_sync", description: "Offline synchronization", icon: WifiOff, category: "Sync" },
]

const categoryColors = {
  "File Operations": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  System: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Network: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  Utilities: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Security: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Math: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  Information: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  Productivity: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Terminal: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  Entertainment: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  AI: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
  Visualization: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  Status: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  Branches: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  Remote: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  Repository: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
  Staging: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  Interactive: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300",
  Help: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
  History: "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300",
  Recovery: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  Stashing: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  Automation: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  Voice: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  Sync: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
}

function CommandCard({
  command,
  icon: Icon,
  description,
  category,
}: {
  command: string
  icon: any
  description: string
  category: string
}) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-mono">{command}</CardTitle>
          </div>
          <Badge className={categoryColors[category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"}>{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default function CommandsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Commands Reference</h1>
        <p className="text-lg text-muted-foreground mt-2">Complete reference of all available PyShell commands</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <Terminal className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{standardCommands.length}</div>
            <div className="text-sm text-blue-600 dark:text-blue-400">Standard Commands</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <GitBranch className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">{gitCommands.length}</div>
            <div className="text-sm text-green-600 dark:text-green-400">Git Commands</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6 text-center">
            <Sparkles className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">{uniqueGitFeatures.length}</div>
            <div className="text-sm text-purple-600 dark:text-purple-400">Unique Features</div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Standard Commands</h2>
          <p className="text-muted-foreground mt-2">Core PyShell commands for everyday terminal operations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {standardCommands.map((cmd) => (
            <CommandCard
              key={cmd.name}
              command={cmd.name}
              icon={cmd.icon}
              description={cmd.description}
              category={cmd.category}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Standard Git Commands</h2>
          <p className="text-muted-foreground mt-2">Essential Git operations with PyShell enhancements</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gitCommands.map((cmd) => (
            <CommandCard
              key={cmd.name}
              command={cmd.name}
              icon={cmd.icon}
              description={cmd.description}
              category={cmd.category}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">Unique Git Features</h2>
          <p className="text-muted-foreground mt-2">Innovative Git features exclusive to PyShell</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {uniqueGitFeatures.map((cmd) => (
            <CommandCard
              key={cmd.name}
              command={cmd.name}
              icon={cmd.icon}
              description={cmd.description}
              category={cmd.category}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Usage Examples</h3>
        <div className="space-y-4">
          <div className="rounded-md bg-black/90 p-4">
            <pre className="text-white text-sm overflow-x-auto">
              <code>{`# File operations
rename old_file.txt new_file.txt
move file.txt /path/to/destination/
copy document.pdf backup/

# Git operations
git-status
git-create feature-branch
git-smart commit "Add new feature"

# Unique features
weather london
calc 2 + 2 * 5
password --length 16 --secure`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
