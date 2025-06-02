export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="h-10 bg-muted rounded animate-pulse" />
        <div className="h-6 bg-muted rounded animate-pulse w-2/3" />
      </div>

      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-muted rounded-full animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-muted rounded animate-pulse w-1/3" />
                <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
