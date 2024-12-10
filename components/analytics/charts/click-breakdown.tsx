interface ClickBreakdownProps {
  data: Array<{ label: string; value: number }>;
}

export function ClickBreakdown({ data }: ClickBreakdownProps) {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.label} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{item.label}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}